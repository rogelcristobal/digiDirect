import { Box, Typography } from "@mui/material";
import TextContent from "./TextContent";
import ScrollContext from "../context/ScrollContext";
import PageScrollableContext from "../context/PageScrollableContext";
import {useContext,useEffect} from 'react'

const Navbar = ({scrollPosition}) => {
  // const {scrollRefState}= useContext(PageScrollableContext)
  
  return (
    <Box
      component="nav"
      className={` border-thin-bottom  h-14 pt-6 py-2 absolute top-0 z-10 left-0  w-full  box-border flex  justify-center bg-[#ffffff]
    `}
    >
      <div
        className={`box-border container mx-auto h-fit  flex items-center justify-between    transition-all ease-in-out z-10 duration-500 tracking-wide`}
      >
      
        
   
      </div>
    </Box>
  );
};

export default Navbar;
