import React,{useContext} from 'react';
import MouseStateContext from '../context/MouseStateContext';
import { motion } from 'framer-motion';
const Cursor = () => {
   
    const {mouseHoverState,x,y} = useContext(MouseStateContext)
   
    const animation = {
        initial:{x:-12,y:-12},
        animate:{
            x:x-8,
            y:y-8,
            ...(mouseHoverState?{scale:1.5}:{scale:1})
        }
    }
    return (
    <motion.div variants={animation} initial="initial" animate="animate" className={`fixed z-50 h-4  w-4 rounded-full  mix-blend-difference bg-white pointer-events-none`}>
    </motion.div>
  );
}

export default Cursor;
