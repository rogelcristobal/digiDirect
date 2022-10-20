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
  AiFillExperiment,
} from "react-icons/ai";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";

import { IoShapes } from "react-icons/io5";

const SideBar = () => {
  // f7f8fa
  return (
    <Box className="h-screen w-[23rem]  bg-inherit  z-20 box-border relative border-thin-dark ">
      {/* <Divider
        orientation="vertical"
        className="absolute right-0 top-0"
        variant="fullWidth"
        light
      ></Divider> */}
      {/* sidebar bg-[#111827] */}
      <Box className="h-24   w-full flex flex-col items-start  justify-center  px-8   box-border ">
        {/* <DigiLogoInJs    color="text-white  text-[1.2rem]" /> */}
      </Box>
      <Box className="w-full  box-border h-auto    ">
        <Paper
          square
          variant="contained"
          className="w-full bg-inherit  rounded-xl h-auto max-h-full  py-4 pl-7   box-border scrollbar-hide hover:scrollbar-default mt-0 space-y-0"
        >
          {/* dashboard */}
          <List>
            {/* <Typography
              variant="body1"
              className="text-stone-700 text-xs font-semibold ml-2 "
              >
              Dashboard
            </Typography> */}
            <ListItemBtnComponent
              path="/"
              title="dashboard"
              icon={<IoShapes />}
              parentBtn
            />

            {/* general */}

            {/* <Typography
              variant="body1"
              className="text-neutral-700 text-xs font-semibold ml-2 mb-2"
            >
              General
            </Typography> */}
            <ListItemBtnExpandable
              textColor="text-neutral-50"
              bgColor="bg-inherit  "
              title="product listing"
              initialState={true}
              icon={<AiTwotoneTags className="text-xs " />}
              enableIcon={<HiChevronDown className="text-neutral-50" />}
              disableIcon={<HiChevronRight className="text-inherit" />}
            >
              {[
                { title: "quick create", path: "/xyz" },
                { title: "templates", path: "/templates" },
              ].map((item, idx) => (
                <ListItemBtnComponent
                  path={item.path}
                  activeStyle="   no-underline "
                  title={item.title}
                  key={idx}
                />
              ))}
            </ListItemBtnExpandable>
            <ListItemBtnComponent
              path="/experimental"
              title="experimental"
              icon={<AiFillExperiment className="text-xs text-neutral-50" />}
              parentBtn
              activeStyle="text-neutral-50  no-underline "
            />

            {/* tools */}

            {/* <Typography
              variant="body1"
              className="text-stone-700 text-xs font-semibold ml-2 "
            >
              Tools & API's
            </Typography> */}
            <ListItemBtnComponent
              parentBtn
              path="/converter"
              activeStyle=" text-neutral-50  no-underline "
              title="Converter"
              icon={<AiFillFileImage className="text-xs text-neutral-50" />}
            />
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default SideBar;
