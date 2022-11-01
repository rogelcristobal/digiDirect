import React from "react";
import { Typography, Box } from "@mui/material";
const TextContent = ({ category, title, subTitle }) => {
 
    return (
      <Box className=" normal-case">
        <Typography
          variant="h6"
          className="font-medium text-base   text-gray-600 capitalize	 mb-4"
        >
          {category}
        </Typography>

        {title}

        <Box className=" mt-2 max-w-[80%] ">{subTitle}</Box>
      </Box>
    );
  
};

export default TextContent;
