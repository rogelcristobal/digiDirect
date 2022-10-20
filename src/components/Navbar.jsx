import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import {FiGithub} from 'react-icons/fi'
import {Link}from 'react-router-dom'
import { Box } from "@mui/material";
import { useContext } from "react";
import NavScrollContext from "../context/NavScrollContext";
import DigiLogoInJs from "./DigiLogoInJs";
const Navbar = () => {
  const { scrollPosition  } = useContext(NavScrollContext);
  // console.log('scroll state change')
  return (
    
    <Box
      component="nav"
      className={` fixed  ${
        scrollPosition >= 100 ? 'h-[4.1rem] pt-2' : "h-0 "
      } bg-[#090909]  trnsition-all duration-300 ease-in-out px-6 z-10 w-full top-0   left-0 box-border flex items-center justify-end  border-thin-dark overflow-y-hidden
    `}
    >
      {/* [#635dff] */}
      <div
        className={`w-[calc(100%-18.5rem)] box-border  h-full  flex items-center justify-end   px-8 transition-all ease-in-out duration-500 `}
      >
        {/* <Box>
          <DigiLogoInJs dark color="text-neutral-50 text-base"></DigiLogoInJs>
        </Box> */}
        {/* rightside box icons */}
        <Box className="flex items-center justify-around space-x-4 box-border">
          <Box className="p-2 grid place-content-center cursor-pointer text-stone-100 transition-all dration-300 ease-in-out   hover:border-thin text-md ">
            <HiOutlineMoon></HiOutlineMoon>
          </Box>
          
            <a href="https://github.com/rogelcristobal/digiDirect" target="_blank" className="p-2 grid place-content-center cursor-pointer text-stone-100 transition-all duration-300 ease-in-out   hover:border-thin   no-underline">
              <FiGithub></FiGithub>
            </a>
         
          <Box className="p-2 grid place-content-center cursor-pointer text-stone-100 transition-all dration-300 ease-in-out   hover:border-thin text-md ">
            <AiOutlineUser></AiOutlineUser>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Navbar;
