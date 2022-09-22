import React from "react";
import { Box, Divider, Typography, List, Paper } from "@mui/material";

// components
import ListItemBtnComponent from "./ListItemBtnComponent";
import ListItemBtnExpandable from "./ListItemBtnExpandable";
import DigiLogoInJs from "./DigiLogoInJs";
// icon
import {
  AiFillTags,
  AiFillFileImage,
  AiOutlineLayout,
} from "react-icons/ai";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { AiFillDashboard } from "react-icons/ai";

const SideBar = () => {
  return (
    <Box className="h-screen w-[22rem] bg-inherit z-20 box-border relative pt-0 ">
      <Divider
        orientation="vertical"
        className="absolute right-0 top-0"
        variant="fullWidth"
        light
      ></Divider>
      {/* sidebar bg-[#111827] */}
      <Box className="h-32   w-full flex flex-col items-start justify-center px-8   box-border ">
        {/* digi logo */}
        <DigiLogoInJs size="text-xl" dark  color="text-blue-500" />
       
      </Box>
      <Box className="w-full  box-border h-60 mt-4  ">
         <Paper
          variant="contained"
          className="w-full bg-inherit rounded-2xl h-auto max-h-[25rem]  py-4 px-4 overflow-y-scroll box-border mt-4 space-y-0"
        >
          {/* dashboard */}
          <List>
            <Typography
              variant="body1"
              className="text-neutral-900/40 text-xs font-semibold ml-2 mb-1"
            >
              Dashboard
            </Typography>
            <ListItemBtnComponent
              path="/"
              hoverColor="hover:text-blue-500 "
              title="dashboard"
              icon={<AiFillDashboard className="text-sm"/>}
              parentBtn
              activeStyle="bg-blue-50 text-blue-500  no-underline "
            />
          </List>

          {/* general */}
          <List>
            <Typography
              variant="body1"
              className="text-neutral-900/40 text-xs font-semibold ml-2 mb-1"
            >
              General
            </Typography>
            <ListItemBtnExpandable
              textColor="text-blue-500 "
              bgColor="bg-inherit "
              title="product listing"
              initialState={true}
              icon={<AiFillTags className="text-sm " />}
              enableIcon={<HiChevronDown className="text-inherit " />}
              disableIcon={<HiChevronRight className="text-inherit" />}
            >
              {[
                { title: "normal listing", path: "/normal-listing" },
                { title: "open box", path: "/open-box-listing" },
              ].map((item, idx) => (
                <ListItemBtnComponent
                  path={item.path}
                  activeStyle="bg-blue-50 text-blue-500  no-underline "
                  hoverColor="hover:text-blue-500 "
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
              className="text-neutral-900/40 text-xs font-semibold ml-2 mb-1"
            >
              Tools & API's
            </Typography>
            <ListItemBtnComponent
              parentBtn
              path="/image-converter"
              activeStyle="bg-blue-50 text-blue-500  no-underline "
              hoverColor="hover:text-blue-500 "
              title="Image Converter"
              icon={<AiFillFileImage className="text-sm" />}
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
                  activeStyle="bg-blue-50 text-blue-500  no-underline "
                  hoverColor="hover:text-blue-500 "
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
