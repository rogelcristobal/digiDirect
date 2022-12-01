import React, { useState,useContext } from "react";
import { motion, AnimatePresence,useAnimation } from "framer-motion";
import {HiOutlineArrowUpRight} from 'react-icons/hi2'
import MouseStateContext from "../context/MouseStateContext";
const LinkBtn2 = ({ title }) => {
  const {setMouseHoverState,mouseHoverState} = useContext(MouseStateContext) 
  // const [hoverState,setHoverState] = useState(false)

  const arrowAnimation = useAnimation()
  const handleHoverState =()=>{
    setMouseHoverState(!mouseHoverState)
    // arrowAnimation.start({
    //   y:!mouseHoverState ? 0: 10,
    //   opacity: !mouseHoverState ? 1:0 ,
    //   transition:{ease:'easeOut',duration:0.4}
    // })
  }
  
  return (
    <AnimatePresence>
      <motion.div
        onHoverEnd={handleHoverState}
        onHoverStart={handleHoverState}
        className="text-[0.8rem]  cursor-pointer space-x-3 py-1 inline-block relative font-ukraine-regular flex items-center w-fit box-border hover-underline-animation whitespace-nowrap "
      >
        <span>

        {title}
        </span>
        <motion.div  animate={arrowAnimation} initial={{ opacity:0 ,y : 5}}>
          <HiOutlineArrowUpRight className=" text-lg"/>
        </motion.div>
        
      </motion.div>
    </AnimatePresence>
  );
};

export default LinkBtn2;
