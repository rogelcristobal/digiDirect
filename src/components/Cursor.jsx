import React, { useContext,useState } from "react";
import MouseStateContext from "../context/MouseStateContext";
import { motion } from "framer-motion";
const Cursor = () => {
  const { mouseHoverState, mousepos } = useContext(MouseStateContext);
  const {x,y} = mousepos
 
  const animation = {
    hidden: { x: -64, y: -64, },
    animate: {
      x: x-64,
      y: y -64,
      
      transition:{
        type:'linear',
        duration:0.2,
        stiffness:0
      },
      ...(mouseHoverState ? { opacity:1 } : {opacity:0}),
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
      //  initial="hidden"
       animate="animate"
       className={`fixed z-50 h-32  w-32 rounded-full flex items-center pointer-events-none  bg-white mix-blend-difference`}
       >
    </motion.div> 


    {/* <motion.div variants={cursor} initial="hidden" animate="animate"  className="z-50  fixed h-4 w-4 bg-white mix-blend-difference customCursor  pointer-events-none">

      
    </motion.div> */}
    </>
  );
};

export default Cursor;
