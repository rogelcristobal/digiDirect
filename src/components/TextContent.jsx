import React from "react";
import { Typography, Box } from "@mui/material";
const TextContent = ({ category, title, subTitle }) => {
 
    return (
      <Box className=" normal-case">
       {category? <Typography
          variant="h6"
          className="font-semibold text-[0.825rem]   text-[#3180e2] capitalize	 mb-1"
        >
          {category}
        </Typography>:null}

        {title}

       {subTitle? <Box className=" mt-4 max-w-[80%] ">{subTitle}</Box>:null}
      </Box>
    );
  
};

export default TextContent;
