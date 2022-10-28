import React from "react";
import { Typography, Box } from "@mui/material";
const PageTitle = ({ category, title, subTitle }) => {
  return (
  
    <Box className="font-sans normal-case">
      <Typography
        variant="h6"
        className="font-medium text-sm text-[#017eff] capitalize	 mb-2"
      >
        {category}
      </Typography>
      
        {title}
     
      <Box className=" mt-3 max-w-[80%] ">{subTitle}</Box>
    </Box>
  );
};

export default PageTitle;
