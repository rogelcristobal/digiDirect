import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const LinkBtn2 = ({ title }) => {
  
 
  return (
    <AnimatePresence>
      <motion.div
      onClick={()=>alert('asd')}
        className="text-[0.8rem]  cursor-none  py-2 inline-block relative font-ukraine-regular w-fit box-border hover-underline-animation whitespace-nowrap "
      >
        {title}
      </motion.div>
    </AnimatePresence>
  );
};

export default LinkBtn2;
