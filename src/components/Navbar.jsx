import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import {BsGithub} from 'react-icons/bs'

import { Box } from "@mui/material";
import { useContext } from "react";
import NavScrollContext from "../context/NavScrollContext";
import DigiLogoInJs from "./DigiLogoInJs";
const Navbar = () => {
  const { scrollPosition  } = useContext(NavScrollContext);
  // console.log('scroll state change')
  return (
    
    <Box
      className={` fixed  ${
        scrollPosition >= 100 ? 'h-[4.2rem] pt-2' : "h-0 "
      } bg-[#ffffff] border-thiner trnsition-all duration-300 ease-in-out px-6 z-30 w-full top-0   left-0 box-border flex items-center justify-end   
    `}
    >
      {/* [#635dff] */}
      <div
        className={`w-[calc(100%-18.5rem)] box-border  h-full  flex items-center justify-end   px-8 transition-all ease-in-out duration-500 `}
      >
        {/* <Box>
          <DigiLogoInJs dark color="text-blue-500 text-base"></DigiLogoInJs>
        </Box> */}
        {/* rightside box icons */}
        {/* <Box className="flex items-center justify-around space-x-4 box-border">
          <Box className="p-2 grid place-content-center cursor-pointer text-blue-500 transition-all dration-300 ease-in-out   hover:border-thin text-md rounded-xl">
            <HiOutlineMoon></HiOutlineMoon>
          </Box>
          <Box className="p-2 grid place-content-center cursor-pointer text-gray-400 transition-all dration-300 ease-in-out   hover:border-thin text-lg rounded-xl">
            <BsGithub></BsGithub>
          </Box>
          <Box className="p-2 grid place-content-center cursor-pointer text-blue-500 transition-all dration-300 ease-in-out   hover:border-thin text-md rounded-xl">
            <AiOutlineUser></AiOutlineUser>
          </Box>
        </Box> */}
      </div>
    </Box>
  );
};

export default Navbar;
