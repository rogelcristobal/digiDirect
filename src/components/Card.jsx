import React from "react";
import { Box, Typography } from "@mui/material";
import { HiArrowUpRight } from "react-icons/hi2";
const Card = () => {
  return (
    <Box className="h-24 w-72 bg-[#21252b] text-gray-500 p-6 flex  items-start cursor-pointer justify-between rounded-lg">
      <span className="capitalize text-md font-normal"> get Started</span>
      <Box className="h-full w-[10%]  flex items-end justify-center text-2xl">
        <HiArrowUpRight></HiArrowUpRight>
      </Box>
    </Box>
  );
};

export default Card;
