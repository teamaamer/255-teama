import React from "react";
import * as motion from "framer-motion/client";

const FadeIn = ({ children, className, style }) => {
  return (
    <motion.div
      className={className}
      style={{ position: 'relative', ...style }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
