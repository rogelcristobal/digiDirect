import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
const PageSubTitle = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        variant="h6"
        className=" leading-5 text-[1.4rem] font-[500] text-gray-700 "
      >
        {title}
      </Typography>
      <Box className=" mt-6">{subtitle}</Box>
    </Box>
  );
};

export default PageSubTitle;
