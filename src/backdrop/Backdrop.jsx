import React from "react";
import { motion } from "framer-motion";
const Backdrop = ({ children, handleClick }) => {
  return (
    
      <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:0.3,}}}
        exit={{opacity:0,transition:{duration:0.3,delay:0.3}}}
        onClick={handleClick}
        className="h-screen w-screen bg-gray-800/30 fixed top-0 left-0 z-50"
      >
        {children}
      </motion.div>
  );
};

export default Backdrop;
