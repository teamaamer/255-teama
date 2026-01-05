"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from '@emailjs/browser';
import Loading from "./Loading";
import { contactInfo } from "@/data/data";
import Image from "next/image";
import { useTranslation } from "@/contexts/LanguageContext";

const ContactUsSection = () => {
  const t = useTranslation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        submission_time: new Date().toLocaleString(),
      };

      // Send notification email to admin
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply confirmation email to client
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Clear form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
      
      // Redirect to thank you page
      setTimeout(() => {
        router.push("/contact/thank-you");
      }, 500);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Show loading screen during form submission */}
      {isSubmitting && <Loading />}
      
      <section className="relative bg-primary py-16 px-4 overflow-hidden">
      {/* Large "LET'S" background text */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <h1 className="text-[12rem] md:text-[20rem] lg:text-[25rem] font-black text-white/10 leading-none tracking-tight">
          {t.contact.letsConnect || "LET'S"}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Find Us Here heading */}
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
          {t.contact.findUsHere || "Find Us Here"}
        </h2>

        {/* Location City View Cards - 4 cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {contactInfo.map((location, index) => {
            const cityImages = [
              '/cities/nablus.jpg', // Nablus
              '/cities/nazareth.jpg', // Nazareth
              '/cities/riyadh.jpg', // Riyadh
              '/cities/houston.jpg' // Houston/Texas
            ];
            
            return (
              <div
                key={index}
                className="relative rounded-xl p-3 flex flex-col justify-center overflow-hidden h-[170px]"
              >
                {/* City View Image Background */}
                <Image
                  src={cityImages[index]}
                  alt={`${location.address} city view`}
                  fill
                  className="object-cover z-0"
                  style={{
                    filter: 'brightness(0.7)'
                  }}
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                
                {/* Content */}
                <div className="relative z-20 p-4">
                  <Image
                    src="/255-logo-white.svg"
                    alt="255 Logo"
                    width={60}
                    height={30}
                    className="mb-1.5"
                  />
                  <p className="text-lg text-white/95 drop-shadow-md leading-snug whitespace-pre-line font-medium">
                    {location.address}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two column layout - 2/3 map, 1/3 form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Map - Takes 2 columns */}
          <div className="bg-white rounded-2xl shadow-xl h-[500px] lg:h-[600px] lg:col-span-2 p-4">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4773.4046173905535!2d35.255517961995544!3d32.222905400086574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce1b1af5cb07d%3A0x8393738a2be6be73!2s255%20Advertising%20Agancy!5e0!3m2!1sen!2s!4v1733662054166!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-primary text-2xl md:text-3xl font-bold mb-6">
              {t.contact.connectWithUs || "connect with us"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-primary text-base font-medium mb-2"
                >
                  {t.contact.firstName || "first name"}*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t.contact.firstName || "first name"}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.firstName ? "border-red-500" : "border-primary"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-primary text-base font-medium mb-2"
                >
                  {t.contact.lastName || "last name"}*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={t.contact.lastName || "last name"}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.lastName ? "border-red-500" : "border-primary"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-primary text-base font-medium mb-2"
                >
                  {t.contact.email}*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.email}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.email ? "border-red-500" : "border-primary"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-primary text-base font-medium mb-2"
                >
                  {t.contact.phone}*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.contact.phone}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.phone ? "border-red-500" : "border-primary"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.contact.sending : t.contact.send}
              </button>

              {/* Error Message */}
              {errors.submit && (
                <p className="text-red-500 text-sm mt-2 text-center">{errors.submit}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUsSection;
