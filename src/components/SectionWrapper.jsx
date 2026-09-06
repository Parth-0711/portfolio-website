import React from 'react'

import { motion } from "framer-motion";

const SectionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 1,
      }}
    //   style={{ border: "2px solid red" }} // temporary
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
