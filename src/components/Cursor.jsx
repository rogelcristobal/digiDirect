import React, { useContext } from "react";
import MouseStateContext from "../context/MouseStateContext";
import { motion } from "framer-motion";
const Cursor = () => {
  const { mouseHoverState, mousepos } = useContext(MouseStateContext);
  const {x,y} = mousepos
 
  const animation = {
    hidden: { x: -56, y: -56 },
    animate: {
      x: x-12,
      y: y -12,
      transition:{
        ease:[.51,.5,.41,.7],duration:0.3
      },
      // ...(!mouseHoverState ? { backgroundColor: "white" } : { backgroundColor: "transparent" }),
    },
  };
  
  const cursor={
    hidden:{
        x: -12, y: -12
    },animate:{
        x:x-8,
        y:y-8,
        transition:{
            type: "linear", duration:0,stiffness:0
        },      
    }, 
  }
  return (
    <>

    <motion.div
       variants={animation}
       initial="hidden"
       animate="animate"
       className={`fixed z-50 h-0  w-0 rounded-full flex items-center pointer-events-none mix-blend-difference bg-white`}
       >
    
    
    </motion.div> 
    <motion.div variants={cursor} initial="hidden" animate="animate"  className="z-50  fixed h-4 w-4 bg-white mix-blend-difference customCursor  pointer-events-none"></motion.div>
       </>
  );
};

export default Cursor;
