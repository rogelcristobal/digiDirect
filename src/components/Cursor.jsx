import React from 'react';
import useMousePosition from '../hooks/useMousePosition'
import { motion } from 'framer-motion';
const Cursor = () => {
    const {x,y}= useMousePosition()
    const animation = {
        initial:{x:-12,y:-12},
        animate:{
            x:x-6, y:y-6
        }
    }
    return (
    <motion.div variants={animation} initial="initial" animate="animate" className='fixed z-50 h-3  w-3 rounded-full  mix-blend-difference bg-white pointer-events-none'>
    </motion.div>
  );
}

export default Cursor;
