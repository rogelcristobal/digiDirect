import React,{lazy,useContext} from 'react';
import { motion } from 'framer-motion';
import CodeMenuContext from '../context/CodeMenuContext';
import Backdrop from '../backdrop/Backdrop'
import {Box} from '@mui/material'
import {TbX} from 'react-icons/tb'
const CodeBlockMenu = ({children}) => {
const {dispatch,state} = useContext(CodeMenuContext)
 //  close modal ? onclick modal component
 const handleClick=()=>{dispatch({type: 'TOGGLE_MENU_OFF'})}
  return (
    <Backdrop handleClick={handleClick}>
        <motion.div initial={{
            width:0,
           
        }}
        animate={{
            width:'26rem',
           
            transition:{
                duration:0.5,
                delay:0.3
            }
        }}
        exit={{
            width:0,
            transition:{
                duration:0.3,

            }
        }}
        onClick={(e)=> e.stopPropagation()} className='h-full bg-[#ffffff] box-border  fixed  z-40 shadow-light rounded-lg '>
           
        {state.ElementProperties.height}
        </motion.div>
     </Backdrop>
  );
}

export default CodeBlockMenu;
