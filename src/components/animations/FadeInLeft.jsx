import React from "react";
import * as motion from "framer-motion/client";

const FadeInLeft = ({ children, className, style }) => {
  return (
    <motion.div
      className={className}
      style={{ position: 'relative', ...style }}
      initial={{ opacity: 0, x: -300, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeft;
