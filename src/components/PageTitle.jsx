import React from "react";
import { Typography, Box } from "@mui/material";
const PageTitle = ({ category, title, subTitle }) => {
  return (
    <Box>
      <Typography
        variant="h6"
        className="font-medium text-xs text-blue-500  capitalize mb-2"
      >
        {category}
      </Typography>
      
        {title}
     
      <Box className=" mt-2 ">{subTitle}</Box>
    </Box>
  );
};

export default PageTitle;
