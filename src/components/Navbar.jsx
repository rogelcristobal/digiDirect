import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Box } from "@mui/material";
import {useContext} from 'react'
import NavScrollContext from "../context/NavScrollContext";
const Navbar = () => {
  const {state} =useContext(NavScrollContext)
  return (
    <Box className={`h-[4.2rem] fixed ${state >= 100? 'bg-[#ffffff] border-medium':'bg-transparent'}  px-4 z-10 w-full top-0 left-0 box-border flex items-end justify-end `}>
      <div className="w-[calc(100%-23.5rem)]   h-full  flex items-center justify-end px-8 ">
        {/* rightside box icons */}
        <Box className="flex items-center justify-around space-x-4">
          <Box className="p-2 grid place-content-center cursor-pointer hover:text-blue-500 transition-all dration-300 ease-in-out text-gray-600 border-thin text-lg rounded-xl">
            <HiOutlineMoon></HiOutlineMoon>
          </Box>
          <Box className="p-2 grid place-content-center cursor-pointer hover:text-blue-500 transition-all dration-300 ease-in-out text-gray-600 border-thin text-lg rounded-xl">
            <AiOutlineUser></AiOutlineUser>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Navbar;
