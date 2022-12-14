import React,{useContext} from 'react';
import { Box, Typography } from '@mui/material';
import { HiOutlineArrowUp} from 'react-icons/hi'
import {motion} from 'framer-motion'
import ScrollContext from '../context/ScrollContext';
import { width } from '@mui/system';
const ScrollTopWidget = ({scrl}) => {
const {scrollPosition} = useContext(ScrollContext)
  const handleClick=()=>{
    scrl?.current.scrollTo({
      top: 0,
      left: 0,
     
    });
  }
  const anim={
    initial:{
        opacity:0,
     
    },
    animate:{
        opacity:scrollPosition > 500 ? 1 : 0,
        
    },
    hover:{
       scale:1.3
    }
  }
  return (
    <motion.div  variants={anim} animate="animate" whileHover="hover" initial="initial"  onClick={handleClick} className="w-fit   rounded-full  z-50  fixed right-8 bottom-6 flex flex-col  items-center justify-center p-3.5   bg-black box-border text-lg  text-black">
      <HiOutlineArrowUp></HiOutlineArrowUp>
    a
    </motion.div>
  );
}

export default ScrollTopWidget;
