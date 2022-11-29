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
      className={`  h-fit pt-6 py-2 absolute top-0 z-10 left-0  w-full mix-blend-difference box-border flex  justify-center
    `}
    >
      <div
        className={`box-border container mx-auto h-fit  flex items-center justify-between    transition-all ease-in-out z-10 duration-500 tracking-wide`}
      >
        <TextContent title={
          <Typography variant="body1" className="font-plus   text-neutral-100  text-[1rem] ">digiDirect{scrollPosition}</Typography>
        }></TextContent>

        <TextContent title={
          <Typography variant="body1" className="font-plus text-neutral-100  text-[0.8rem] ">rogel.c</Typography>
        }></TextContent>

        
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
        {/*<Box className="flex items-center  justify-around space-x-4 box-border">
           <IconButton
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
           className=" py-2 px-4 rounded-lg bg-[#3b72ff] text- grid place-content-center "
          >
            <Typography variant="overline" className="text-xs capitalize p-0 m-0">sign in</Typography>
            
          </Button> 
        </Box>*/}
      </div>
    </Box>
  );
};

export default Navbar;
