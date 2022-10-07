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
import { AiFillDashboard } from "react-icons/ai";
import {FaShapes} from 'react-icons/fa'

const SideBar = () => {
  // f7f8fa
  return (
    <Box className="h-screen w-[24rem]  bg-[#ffffff] border-thiner z-20 box-border  relative  ">
      {/* <Divider
        orientation="vertical"
        className="absolute right-0 top-0"
        variant="fullWidth"
        light
      ></Divider> */}
      {/* sidebar bg-[#111827] */}
      <Box className="h-20   w-full flex flex-col items-start  justify-center  px-8   box-border ">
       
        {/* <DigiLogoInJs size="text-xl"  dark color="text-blue-400 text-[1.1rem]" /> */}
       
      </Box>
      <Box className="w-full  box-border h-auto    ">
         <Paper
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
              icon={<FaShapes className="text-base"/>}
              parentBtn
              activeStyle=" text-sky-600  no-underline "
            />
          </List>

          {/* general */}
          <List>
            <Typography
              variant="body1"
              className="text-gray-700 text-xs font-semibold ml-2 "
            >
              General
            </Typography>
            <ListItemBtnExpandable
              textColor="text-sky-600"
              bgColor="bg-inherit "
              title="product listing"
              initialState={true}
              icon={<AiTwotoneTags className="text-sm " />}
              enableIcon={<HiChevronDown className="text-inherit " />}
              disableIcon={<HiChevronRight className="text-inherit" />}
            >
              {[
                { title: "quick create", path: "/templates" },
                { title: "templates", path: "/templates" },
               
              ].map((item, idx) => (
                <ListItemBtnComponent
                  path={item.path}
                  activeStyle=" text-sky-600  no-underline "
                  
                  title={item.title}
                  key={idx}
                />
              ))}
            </ListItemBtnExpandable>
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
              path="/image-converter"
              activeStyle="bg-blue-50 text-sky-600  no-underline "
              
              title="Converter"
              icon={<AiFillFileImage className="text-sm" />}
            />
             <ListItemBtnComponent
              path="/experimental"
              
              title="experimental"
              icon={<AiFillExperiment className="text-sm"/>}
              parentBtn
              activeStyle="bg-blue-50 text-sky-600  no-underline "
            />
            
            {/* <ListItemBtnExpandable
              textColor="text-blue-500"
              bgColor="bg-inherit "
              title="templates"
              initialState
              icon={<AiOutlineLayout className="text-sm" />}
              enableIcon={<HiChevronDown className="text-inherit " />}
              disableIcon={<HiChevronRight className="text-inherit" />}
            >
              {[
                {
                  title: "normal listing template",
                  path: "/normal-listing-template",
                },
                {
                  title: "open box template",
                  path: "/open-box-listing-template",
                },
              ].map((item, idx) => (
                <ListItemBtnComponent
                  path={item.path}
                  activeStyle="bg-blue-50 text-sky-600  no-underline "
                  
                  title={item.title}
                  key={idx}
                />
              ))}
            </ListItemBtnExpandable> */}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default SideBar;
