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
  AiFillExperiment
} from "react-icons/ai";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { AiFillDashboard } from "react-icons/ai";

const SideBar = () => {
  return (
    <Box className="h-screen w-[22rem]  bg-[#ffffff] z-20 box-border relative pt-4 border-thin">
      {/* <Divider
        orientation="vertical"
        className="absolute right-0 top-0"
        variant="fullWidth"
        light
      ></Divider> */}
      {/* sidebar bg-[#111827] */}
      <Box className="h-20   w-full flex flex-col items-start justify-center px-9   box-border ">
       
        <DigiLogoInJs size="text-xl" dark  color="text-blue-500 text-md" />
       
      </Box>
      <Box className="w-full  box-border h-auto    ">
         <Paper
          variant="contained"
          className="w-full  rounded-xl h-auto max-h-[80%]  py-4 px-4 overflow-y-scroll box-border scrollbar-hide hover:scrollbar-default mt-4 space-y-0"
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
              textColor="text-inherit"
              bgColor="bg-inherit "
              title="product listing"
              initialState={true}
              icon={<AiFillTags className="text-sm " />}
              enableIcon={<HiChevronDown className="text-inherit " />}
              disableIcon={<HiChevronRight className="text-inherit" />}
            >
              {[
                { title: "basic listing", path: "/basic-listing" },
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
              title="Converter"
              icon={<AiFillFileImage className="text-sm" />}
            />
             <ListItemBtnComponent
              path="/experimental"
              hoverColor="hover:text-blue-500 "
              title="experimental"
              icon={<AiFillExperiment className="text-sm"/>}
              parentBtn
              activeStyle="bg-blue-50 text-blue-500  no-underline "
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
