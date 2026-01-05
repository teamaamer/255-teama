import React from "react";
import { MessageCircle, Mail } from "lucide-react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import ContactUsSection from "@/components/ContactUsSection";
import { contactInfo } from "@/data/data";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-500px)] bg-foreground text-background py-24">
      <section className="h-[300px] bg-primary flex flex-col justify-center items-center overflow-hidden relative drop-shadow-lg">
        <Image
          className="absolute w-screen object-cover bottom-0"
          src="/designs/heroPattern.webp"
          width={2000}
          height={1000}
          alt=""
          loading="lazy"
          quality={70}
        />
        <h1 className="text-4xl md:text-8xl font-bold z-20 text-foreground">
          Contact Us!
        </h1>
      </section>
      <ContactUsSection />
    </div>
  );
};

export default ContactPage;
