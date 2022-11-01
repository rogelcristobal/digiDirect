import React from "react";
import { Box, Typography } from "@mui/material";
import { HiOutlineArrowRight } from "react-icons/hi";
const Card = () => {
  return (
    <Box className="h-40 w-full bg-[#3498ff] text-white p-4 flex  items-start cursor-pointer justify-between ">
      <span className="capitalize text-lg "> get Started</span>
      <Box className="h-full w-[10%]  flex items-end justify-center text-2xl">
        <HiOutlineArrowRight></HiOutlineArrowRight>
      </Box>
    </Box>
  );
};

export default Card;
