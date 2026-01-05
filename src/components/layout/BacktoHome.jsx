"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const BacktoHome = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={() => router.push("/")}
      className="bg-transparent backdrop-blur-md -z-10 fixed top-0 left-0 right-0 bottom-0"
    />
  );
};

export default BacktoHome;
