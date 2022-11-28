import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const LinkBtn2 = ({ title }) => {
  
 
  return (
    <AnimatePresence>
      <motion.div
        className="text-[1rem]  py-3 inline-block relative font-ukraine-regular w-fit box-border cursor-pointer hover-underline-animation"
      >
        {title}
      </motion.div>
    </AnimatePresence>
  );
};

export default LinkBtn2;
