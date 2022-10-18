import React from "react";
import { Box, Divider, Typography, List, Paper } from "@mui/material";

// components
import ListItemBtnComponent from "./ListItemBtnComponent";
import ListItemBtnExpandable from "./ListItemBtnExpandable";
import DigiLogoInJs from "./DigiLogoInJs";
// icon
import {
  AiTwotoneTags,
  AiFillFileImage,
  AiFillExperiment
} from "react-icons/ai";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";

import {IoShapes} from 'react-icons/io5'

const SideBar = () => {
  // f7f8fa
  return (
    <Box className="h-screen w-[23rem]  bg-inherit border-thiner z-20 box-border  relative  ">
      {/* <Divider
        orientation="vertical"
        className="absolute right-0 top-0"
        variant="fullWidth"
        light
      ></Divider> */}
      {/* sidebar bg-[#111827] */}
      <Box className="h-16   w-full flex flex-col items-start  justify-center  px-8   box-border ">
       
        {/* <DigiLogoInJs size="text-xl"  dark color="text-sky-400 text-[1.1rem]" /> */}
       
      </Box>
      <Box className="w-full  box-border h-auto    ">
         <Paper
          square
          variant="contained"
          className="w-full bg-inherit  rounded-xl h-auto max-h-full  py-4 px-4  box-border scrollbar-hide hover:scrollbar-default mt-4 space-y-0"
        >
          {/* dashboard */}
          <List>

            <Typography
              variant="body1"
              className="text-gray-700 text-xs font-semibold ml-2 "
              >
              Dashboard
            </Typography>
            <ListItemBtnComponent
              path="/"
              
              title="dashboard"
              icon={<IoShapes className="text-sm " />}
              
              parentBtn
              activeStyle=" text-sky-500  no-underline  "
            />
          </List>

          {/* general */}
          <List>
            <Typography
              variant="body1"
              className="text-gray-700 text-xs font-semibold ml-2 mb-2"
            >
              General
            </Typography>
            <ListItemBtnExpandable
              textColor="text-sky-500"
              bgColor="bg-inherit  "
              title="product listing"
              initialState={true}
              icon={<AiTwotoneTags className="text-sm " />}
              enableIcon={<HiChevronDown className="text-sky-500 " />}
              disableIcon={<HiChevronRight className="text-inherit" />}
            >
              {[
                { title: "quick create", path: "/xyz" },
                { title: "templates", path: "/templates" },
               
              ].map((item, idx) => (
                <ListItemBtnComponent
                  path={item.path}
                  activeStyle=" text-sky-500  no-underline "
                  
                  title={item.title}
                  key={idx}
                />
              ))}
            </ListItemBtnExpandable>
            <ListItemBtnComponent
              path="/experimental"
              
              title="experimental"
              icon={<AiFillExperiment className="text-sm text-sky-500"/>}
              parentBtn
              activeStyle="text-sky-500  no-underline "
            />
          </List>

          {/* tools */}
          <List>
            <Typography
              variant="body1"
              className="text-gray-700 text-xs font-semibold ml-2 "
            >
              Tools & API's
            </Typography>
            <ListItemBtnComponent
              parentBtn
              path="/converter"
              activeStyle=" text-sky-500  no-underline "
              
              title="Converter"
              icon={<AiFillFileImage className="text-sm text-sky-500" />}
            />

            
           
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default SideBar;
