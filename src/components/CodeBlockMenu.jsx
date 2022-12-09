import React, { lazy, useContext } from "react";
import { motion } from "framer-motion";
import CodeMenuContext from "../context/CodeMenuContext";
import Backdrop from "../backdrop/Backdrop";
import { Box } from "@mui/material";
import CodeBlock from "./CodeBlock";
const CodeBlockMenu = () => {
  const { dispatch, state } = useContext(CodeMenuContext);
  //  close modal ? onclick modal component
  const handleClick = () => {
    dispatch({ type: "TOGGLE_MENU_OFF" });
};
  return (
    <Backdrop handleClick={handleClick}>
      <motion.div
        initial={{
            x:'100vw',
            y: 0,
        }}
        animate={{
          x:'calc(100vw - 32rem)',
          y: 0,
          width: "32rem",
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        exit={{
          x:'100vw',
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#ffffff] box-border h-full fixed  z-40 shadow-light `}
      >
        <Box
          className="w-full   h-full text-[0.50rem] p-4 pt-20  relative"
        >
           
        </Box>
      </motion.div>
    </Backdrop>
  );
};

export default CodeBlockMenu;
