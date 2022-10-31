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
      className={` fixed    h-[4.4rem] pt-2 bg-[#ffffff]  transition-all duration-300 ease-in-out px-6 z-10 w-full top-0  left-0 box-border flex items-center justify-between  overflow-y-hidden 
    `}
    >
      <Box className="ml-2  ">
        {/* <DigiLogoInJs
          dark
          color="text-[#017eff] text-lg font-semibold"
        ></DigiLogoInJs> */}
      </Box>
      {/* [#635dff] */}
      <div
        className={`w-[calc(100%-15rem)] box-border   h-full  flex items-center justify-end   px-8 transition-all ease-in-out duration-500 `}
      >
        <Box className="flex items-center justify-end pr-20 space-x-3 box-border  w-full">
          {/*  <Box key={item.id} className="p-2 grid place-content-center cursor-pointer text-gray-400 hover:text-[#00203e] transition-all dration-300 ease-in-out text-sm font-medium capitalize">
             {item.title}
           </Box> */}
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
          <Box className="p-2 grid place-content-center cursor-pointer text-gray-400 hover:text-[#017eff] transition-all dration-300 ease-in-out   hover:border-thin text-md ">
            <HiOutlineMoon></HiOutlineMoon>
          </Box>

          <a
            href="https://github.com/rogelcristobal/digiDirect"
            target="_blank"
            className="p-2 grid place-content-center cursor-pointer text-gray-400 hover:text-[#017eff] transition-all duration-300 ease-in-out   hover:border-thin   no-underline"
          >
            <FiGithub></FiGithub>
          </a>

          <Box className="p-2 grid place-content-center cursor-pointer text-gray-400 hover:text-[#017eff] transition-all dration-300 ease-in-out   hover:border-thin text-md ">
            <AiOutlineUser></AiOutlineUser>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Navbar;
