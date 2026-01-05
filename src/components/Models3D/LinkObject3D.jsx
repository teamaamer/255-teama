import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion-3d";

const LinkObject3D = ({ object, link }) => {
  const router = useRouter();

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <motion.primitive
      object={object}
      onClick={() => router.push(link)}
      whileHover={{
        scale: 1.15,
        y: 0.02,
        transition: { duration: 0.2, type: "spring", stiffness: 200 },
      }}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
};

export default LinkObject3D;
