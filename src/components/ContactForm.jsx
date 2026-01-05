"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
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
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
        setTimeout(() => {
          router.push("/contact/thank-you");
        }, 500);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-foreground rounded-2xl p-8 lg:p-12">
      <h2 className="text-primary text-3xl lg:text-4xl font-bold mb-8">
        Connect with us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-primary text-lg font-medium mb-2"
          >
            first name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="first name"
            className={`w-full px-6 py-4 rounded-lg border-2 bg-transparent text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
              errors.firstName ? "border-red-500" : "border-primary"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-primary text-lg font-medium mb-2"
          >
            last name*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="last name"
            className={`w-full px-6 py-4 rounded-lg border-2 bg-transparent text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
              errors.lastName ? "border-red-500" : "border-primary"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-primary text-lg font-medium mb-2"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full px-6 py-4 rounded-lg border-2 bg-transparent text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
              errors.email ? "border-red-500" : "border-primary"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-primary text-lg font-medium mb-2"
          >
            Phone*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="phone"
            className={`w-full px-6 py-4 rounded-lg border-2 bg-transparent text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
              errors.phone ? "border-red-500" : "border-primary"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-foreground px-12 py-4 rounded-lg font-bold text-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSubmitting ? "Sending..." : "Submit"}
          {!isSubmitting && <Send className="w-5 h-5" />}
        </button>

        {submitStatus === "success" && (
          <p className="text-green-500 font-medium">
            Message sent successfully! We'll get back to you soon.
          </p>
        )}

        {submitStatus === "error" && (
          <p className="text-red-500 font-medium">
            Failed to send message. Please try again or contact us directly.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
