import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const PageTransition = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
