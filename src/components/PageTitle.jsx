import React from "react";
import { Typography, Box } from "@mui/material";
const PageTitle = ({ category, title, subTitle }) => {
  return (
  
    <Box className="font-sans normal-case">
      <Typography
        variant="h6"
        className="font-medium text-sm text-blue-500  capitalize	 mb-2"
      >
        {category}
      </Typography>
      
        {title}
     
      <Box className=" mt-4 ">{subTitle}</Box>
    </Box>
  );
};

export default PageTitle;
