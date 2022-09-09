import React from "react";
import {Box,Divider,Typography,List,Paper} from '@mui/material'

// components
import ListItemBtnComponent from './ListItemBtnComponent'
import ListItemBtnExpandable from './ListItemBtnExpandable'
import DigiLogoInJs from "./DigiLogoInJs";
// icon
import { AiOutlineTags, AiOutlineFileImage, AiOutlineLayout } from "react-icons/ai";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import {AiOutlineDashboard} from 'react-icons/ai'
const SideBar = () => {
  return (
    <Box className="h-screen w-[22rem] bg-[#ffffff] z-10 box-border relative pt-0 shadow">
      <Divider
        orientation="vertical"
        className="absolute right-0 top-0"
        light
      ></Divider>
      {/* sidebar */}
      <Box className="h-32 w-full flex flex-col items-start justify-center px-5 py-6 bg-[#111827] relative box-border space-y-12 ">
        {/* digi logo */}
        <DigiLogoInJs size="text-xl" color="text-blue-500" />
        {/* <div className="h-1 w-full absolute bottom-0 left-0 bg-blue-500"></div> */}
      </Box>
      <Box className="w-full px-0 box-border h-60 mt-6 ">
        <Paper
          variant="contained"
          className="w-full bg-inherit rounded-2xl h-auto max-h-[25rem]  py-4 px-4 overflow-y-scroll box-border mt-4 "
        >
          <Typography
            variant="body1"
            className="text-neutral-900/30 text-xs font-semibold ml-2"
          >
            Dashboard
          </Typography>
          <List>
            <ListItemBtnComponent
              path="/dashboard"
              hoverColor="hover:text-blue-500"
              title="dashboard"
              icon={<AiOutlineDashboard />}
              parentBtn
              activeStyle="bg-blue-50 text-blue-500  no-underline "
            />
          </List>
          <Typography
            variant="body1"
            className="text-neutral-900/30 text-xs font-semibold ml-2"
          >
            General
          </Typography>

          <List>
            <ListItemBtnExpandable
              textColor="text-blue-500"
              bgColor="bg-blue-50"
              title="product listing"
              initialState={true}
              icon={<AiOutlineTags className="text-sm " />}
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
                  hoverColor="hover:text-blue-500"
                  title={item.title}
                  key={idx}
                />
              ))}
            </ListItemBtnExpandable>
            <ListItemBtnExpandable
              textColor="text-blue-500"
              bgColor="bg-blue-50"
              icon={<AiOutlineFileImage className="text-sm" />}
              title="image converter"
              enableIcon={<HiChevronDown className="text-inherit " />}
              disableIcon={<HiChevronRight className="text-inherit" />}
            >
              {[
                { title: "webp to jpg", path: "/webp-to-jpg" },
                { title: "png to jpg", path: "/png-to-jpg" },
              ].map((item, idx) => (
                <ListItemBtnComponent
                  path={item.path}
                  activeStyle="bg-blue-50 text-blue-500  no-underline "
                  hoverColor="hover:text-blue-500"
                  title={item.title}
                  key={idx}
                />
              ))}
            </ListItemBtnExpandable>
            <ListItemBtnExpandable
              textColor="text-blue-500"
              bgColor="bg-blue-50"
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
                  hoverColor="hover:text-blue-500"
                  title={item.title}
                  key={idx}
                />
              ))}
            </ListItemBtnExpandable>
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default SideBar;
