import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useContext } from "react";
import NavScrollContext from "../context/NavScrollContext";
import DigiLogoInJs from "./DigiLogoInJs";
import { NavLink } from "react-router-dom";
import ListItemBtnComponent from './ListItemBtnComponent'
const Navbar = () => {
  const { scrollPosition } = useContext(NavScrollContext);
  // console.log('scroll state change')
  return (
    // <Box
    //   component="nav"
    //   className={` fixed  ${
    //     scrollPosition >= 100 ? 'h-[4.1rem] pt-2' : "h-0 "
    //   } bg-gray-900  transition-all duration-300 ease-in-out px-6 z-20 w-full top-0   left-0 box-border flex items-center justify-between  overflow-y-hidden shadow
    // `}

    <Box
      component="nav"
      className={` fixed      h-[4.4rem] pt-2 bg-[#121418]  transition-all duration-300 ease-in-out px-6 z-10 w-full top-0  left-0 box-border flex items-center justify-end  overflow-y-hidden 
    `}
    >
      {/* <Box className="ml-2  ">
        <DigiLogoInJs
          
          color="text-gray-50  font-medium"
        ></DigiLogoInJs>
      </Box> */}
    
      <div
        className={`w-[calc(100%-12rem)] box-border     h-full  flex items-center justify-end   px-8 transition-all ease-in-out duration-500 `}
      >
        <Box className="flex items-center justify-end pr-20 space-x-3 box-border  w-full">
         
          {[
            { title: "templates", path: "/templates" },
            { title: "converter", path: "/converter" },
          ].map((item,id) => (
            <Box key={id} className=" h-full w-fit  grid place-content-center">

             <ListItemBtnComponent
              path={`${item.path}`}
              title={`${item.title}`}
              parentBtn
              />
            </Box>
          ))}
        </Box>

        {/* rightside box icons */}
        <Box className="flex items-center   justify-around space-x-4 box-border">
          <Box className="p-2 grid place-content-center cursor-pointer text-gray-400 hover:text-white  transition-all dration-300 ease-in-out text-md ">
            <HiOutlineMoon></HiOutlineMoon>
          </Box>

          <a
            href="https://github.com/rogelcristobal/digiDirect"
            target="_blank"
            className="p-2 grid place-content-center cursor-pointer text-gray-400 hover:text-white  transition-all duration-300 ease-in-out   no-underline"
          >
            <FiGithub></FiGithub>
          </a>

          <Box className="p-2 grid place-content-center cursor-pointer text-gray-400 hover:text-white  transition-all dration-300 ease-in-out text-md ">
            <AiOutlineUser></AiOutlineUser>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Navbar;
