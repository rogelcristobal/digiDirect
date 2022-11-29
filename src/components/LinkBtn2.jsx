import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const LinkBtn2 = ({ title }) => {
  
 
  return (
    <AnimatePresence>
      <motion.div
        className="text-[0.8rem]   py-2 inline-block relative font-ukraine-regular w-fit box-border cursor-pointer hover-underline-animation whitespace-nowrap "
      >
        {title}
      </motion.div>
    </AnimatePresence>
  );
};

export default LinkBtn2;
