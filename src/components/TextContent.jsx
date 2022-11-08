import React from "react";
import { Typography, Box } from "@mui/material";
const TextContent = ({ category, title, subTitle }) => {
 
    return (
      <Box className=" normal-case">
       {category? <Typography
          variant="h6"
          className="font-medium text-sm   text-gray-700 capitalize	 mb-3"
        >
          {category}
        </Typography>:null}

        {title}

       {subTitle? <Box className=" mt-0 max-w-[80%] ">{subTitle}</Box>:null}
      </Box>
    );
  
};

export default TextContent;
