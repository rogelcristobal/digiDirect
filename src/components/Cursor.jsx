import React, { useContext } from "react";
import MouseStateContext from "../context/MouseStateContext";
import { motion } from "framer-motion";
const Cursor = () => {
  const { mouseHoverState, x, y } = useContext(MouseStateContext);
 
  const animation = {
    hidden: { x: -56, y: -56 },
    animate: {
      x: x - 56,
      y: y - 56,
      transition:{
        ease:[.51,.5,.41,.7],duration:0.3
      },

      ...(!mouseHoverState ? { backgroundColor: "white" } : { backgroundColor: "transparent" }),
    },
  };
  const cursor={
    hidden:{
        x: -12, y: -12
    },animate:{
        x:x,
        y:y,
        transition:{
            type: "tween", duration:0,stiffness:500
        },
        
    },
   
  }
  return (
    <>
    {/* <motion.div
      variants={animation}
      
      initial="hidden"
      animate="animate"
      className={`fixed z-50 h-28  w-28 rounded-full flex items-center pointer-events-none mix-blend-difference `}
    >
     </motion.div> */}


    <motion.div variants={cursor} initial="hidden" animate="animate"  whileTap={{ scale: 0.9 }} className="z-50  fixed h-4 w-4 bg-white mix-blend-difference customCursor pointer-events-none"></motion.div>
      </>
  );
};

export default Cursor;
