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
        // type:'tween',
        duration:0.5,
        stiffness:500
      },
      ...(mouseHoverState ? { opacity:1 } : {opacity:0}),
    },
  };
  
  const cursor={
    hidden:{
        x: -12, y: -12
    },animate:{
        x:x,
        y:y,
        transition:{
            type: "linear", duration:0,stiffness:0
        },      
    }, 
  }
  return (
    <>

     <motion.div variants={cursor} initial="hidden" animate="animate"  className="z-50  fixed h-1 w-1 bg-white mix-blend-difference   pointer-events-none">

      
    </motion.div>


    <motion.div variants={cursor} initial="hidden" animate="animate"  className="z-50  fixed h-4 w-4 bg-white mix-blend-difference customCursor  pointer-events-none">

      
    </motion.div>
    </>
  );
};

export default Cursor;
