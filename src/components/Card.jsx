import React from "react";
import { Box, Typography } from "@mui/material";
import { HiArrowUpRight } from "react-icons/hi2";
const Card = () => {
  return (
    <Box className="h-20 w-72 bg-[#21252b] text-gray-200 p-5 flex  items-end cursor-pointer justify-end space-x-4 rounded-lg">
      <span className=" text-sm font-normal"> Get started</span>
      <Box className="h-fit w-[10%]  flex items-end justify-center text-lg">
        <HiArrowUpRight></HiArrowUpRight>
      </Box>
    </Box>
  );
};

export default Card;
