import React,{useContext} from 'react';
import { Box, Typography } from '@mui/material';
import { HiOutlineArrowUp} from 'react-icons/hi'
import {motion} from 'framer-motion'
import NavScrollContext from '../context/NavScrollContext';
import { width } from '@mui/system';
const ScrollTopWidget = ({scrl}) => {
const {scrollPosition} = useContext(NavScrollContext)
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
       backgroundColor:'rgb(156 163 175 / 0.7)'
    }
  }
  return (
    <motion.div  variants={anim} animate="animate" whileHover="hover" initial="initial"  onClick={handleClick} className="w-fit bg-gray-400/50  rounded-lg  z-10 cursor-pointer fixed right-6 bottom-6 flex flex-col  items-center justify-center p-3.5  overflow-hidden  box-border text-lg  text-white space-y-12">
      <HiOutlineArrowUp></HiOutlineArrowUp>
    
    </motion.div>
  );
}

export default ScrollTopWidget;
