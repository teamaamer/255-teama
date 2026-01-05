import React from "react";
import * as motion from "framer-motion/client";

const FadeInBottom = ({ children, className, style }) => {
  return (
    <motion.div
      className={className}
      style={{ position: 'relative', ...style }}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInBottom;
