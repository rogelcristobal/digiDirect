import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
// import NavScrollContext from "../context/ScrollContext";
import DigiLogoInJs from "./DigiLogoInJs";
import { NavLink } from "react-router-dom";
import ListItemBtnComponent from "./ListItemBtnComponent";
import IconButton from "@mui/material/IconButton";
const Navbar = () => {
  // const { scrollPosition } = useContext(NavScrollContext);
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
      className={`  h-[4.3rem] border-thiner  bg-[#ffffff] transition-all duration-300 ease-in-out px-6 z-30 w-full  box-border flex items-center justify-end  overflow-y-hidden 
    `}
    >
     

      <div
        className={`w-[calc(100%-12rem)] box-border     h-full  flex items-center justify-end   px-8 transition-all ease-in-out duration-500 `}
      >
        {/* <Box className="flex items-center justify-end pr-20 space-x-3 box-border  w-full">
          {[
            { title: "templates", path: "/templates" },
            { title: "converters", path: "/converter" },
             { title: "tools", path: "/" },
          ].map((item, id) => (
            <Box key={id} className=" h-full w-fit  grid place-content-center">
              <ListItemBtnComponent
                path={`${item.path}`}
                title={`${item.title}`}
                parentBtn
              />
            </Box>
          ))}
        </Box> */}

        {/* rightside box icons */}
        <Box className="flex items-center  justify-around space-x-4 box-border">
          {/* <IconButton
            size="small"
            className="p-2  cursor-pointer  text-gray-600 hover:text-[#3180e2]   transition-all dration-300 ease-in-out text-[0.985rem] "
          >
            <HiOutlineMoon></HiOutlineMoon>
          </IconButton>

          <IconButton
            size="small"
            target="_blank"
            href="https://github.com/rogelcristobal/digiDirect"
            className="p-2  cursor-pointer  text-gray-600 hover:text-[#3180e2]   transition-all dration-300 ease-in-out text-[0.985rem]  no-underline"
          >
            <FiGithub></FiGithub>
          </IconButton>

          <IconButton
            size="small"
            className="p-2  cursor-pointer  text-gray-600 hover:text-[#3180e2]   transition-all dration-300 ease-in-out text-[0.985rem] "
          >
            <AiOutlineUser></AiOutlineUser>
          </IconButton> */}
          {/* <Button
            variant="text"
            size="small"
           className=" py-2 px-4 rounded-lg bg-[#3b72ff] text-white grid place-content-center "
          >
            <Typography variant="overline" className="text-xs capitalize p-0 m-0">sign in</Typography>
            
          </Button> */}
        </Box>
      </div>
    </Box>
  );
};

export default Navbar;
