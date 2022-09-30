import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Box } from "@mui/material";
import {useContext} from 'react'
import NavScrollContext from "../context/NavScrollContext";
import DigiLogoInJs from "./DigiLogoInJs";
const Navbar = () => {
  const {state} =useContext(NavScrollContext)
  return (
    <Box className={`h-[4.2rem] fixed ${state >= 100? 'bg-gray-900 border-thin ':'bg-gray-900 '} trnsition-all duration-300 ease-in-out px-6 z-30 w-full top-0   left-0 box-border flex items-center justify-between `}>
      {/* [#635dff] */}
        <Box>
          <DigiLogoInJs  color="text-blue-500 text-base"></DigiLogoInJs>
        </Box>
      <div className="w-[calc(100%-23.5rem)]   h-full  flex items-center justify-end px-8 ">
        {/* rightside box icons */}
        <Box className="flex items-center justify-around space-x-4">
          <Box className="p-2 grid place-content-center cursor-pointer text-white transition-all dration-300 ease-in-out   hover:border-thin text-md rounded-xl">
            <HiOutlineMoon></HiOutlineMoon>
          </Box>
          <Box className="p-2 grid place-content-center cursor-pointer text-white transition-all dration-300 ease-in-out   hover:border-thin text-md rounded-xl">
            <AiOutlineUser></AiOutlineUser>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Navbar;
