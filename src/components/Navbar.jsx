import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Box } from "@mui/material";
import { useContext } from "react";
import NavScrollContext from "../context/NavScrollContext";
import DigiLogoInJs from "./DigiLogoInJs";
const Navbar = () => {
  const { state, transparency } = useContext(NavScrollContext);
  return (
    // <Box
    //   className={`h-[4.5rem] fixed  ${
    //     state >= 100 ? "bg-transparent" : "bg-white "
    //   } trnsition-all duration-300 ease-in-out px-6 z-10 w-full top-0 pt-3  left-0 box-border flex items-center justify-end   
    // `}
    // >
    <Box
      className={`h-[4.5rem] fixed  ${
        state >= 100 ? !transparency? 'bg-transparent':'bg-white shadow-sm' : "bg-white "
      } trnsition-all duration-300 ease-in-out px-6 z-10 w-full top-0 pt-3  left-0 box-border flex items-center justify-end   
    `}
    >
      {/* [#635dff] */}
      <div
        className={`w-[calc(100%-17.5rem)] box-border  h-full  flex items-center justify-end bg-white  px-8 transition-all ease-in-out duration-500  ${
          state >= 100 ? !transparency? 'border-thin  rounded-xl ':'border-none': 'border-none'
        } `}
      >
        {/* <Box>
          <DigiLogoInJs dark color="text-blue-500 text-base"></DigiLogoInJs>
        </Box> */}
        {/* rightside box icons */}
        <Box className="flex items-center justify-around space-x-4 box-border">
          <Box className="p-2 grid place-content-center cursor-pointer text-blue-500 transition-all dration-300 ease-in-out   hover:border-thin text-md rounded-xl">
            <HiOutlineMoon></HiOutlineMoon>
          </Box>
          <Box className="p-2 grid place-content-center cursor-pointer text-blue-500 transition-all dration-300 ease-in-out   hover:border-thin text-md rounded-xl">
            <AiOutlineUser></AiOutlineUser>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Navbar;
