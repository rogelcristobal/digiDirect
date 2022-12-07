import React,{lazy,useContext} from 'react';
import { motion } from 'framer-motion';
import CodeMenuContext from '../context/CodeMenuContext';
import Backdrop from '../backdrop/Backdrop'
import {Box} from '@mui/material'
import {TbX} from 'react-icons/tb'
const CodeBlockMenu = () => {
const {setModalState} = useContext(CodeMenuContext)
 //  close modal ? onclick modal component
 const handleClick=()=>{setModalState((prev)=>prev = false)}
  return (
    <Backdrop handleClick={handleClick}>
        <motion.div initial={{
            width:0
        }}
        animate={{
            width:'35rem',
            transition:{
                duration:0.5,
                delay:0.3
            }
        }}
        exit={{
            width:0,
            transition:{
                duration:0.5,         
            }
        }}
        onClick={(e)=> e.stopPropagation()} className='h-full w-full bg-[#ffffff] box-border  fixed top-0 -right-5 z-40 shadow-light '>
            <motion.div onClick={handleClick} className="absolute top-6 -left-[2.1rem] p-2.5 bg-[#ffffff] rounded-l-md grid place-content-center text-gray-400 shadow-light  hover:text-gray-800 cursor-pointer text-[0.875rem]">
                <TbX />
            </motion.div>
        
        </motion.div>
    </Backdrop>
  );
}

export default CodeBlockMenu;
