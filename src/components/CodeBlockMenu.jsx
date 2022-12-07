import React,{lazy,useContext} from 'react';
import { motion } from 'framer-motion';
import CodeMenuContext from '../context/CodeMenuContext';
import Backdrop from '../backdrop/Backdrop'
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
        onClick={(e)=> e.stopPropagation()} className='h-full w-full bg-[#ffffff] box-border border-thin-left fixed top-0 right-0 z-40 shadow-light'>
        
        </motion.div>
    </Backdrop>
  );
}

export default CodeBlockMenu;
