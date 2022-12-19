import React from "react";
import { Typography, Box } from "@mui/material";
const TextContent = ({ category, title, subTitle,sx }) => {
 
    return (
      <Box className={`  box-border  ${sx}`}>
         {category? <Typography
          variant="body1"
          className=" text-[0.7rem] relative capitalize font-ukraine-regular  text-gray-500/60 	mb-3 "
        >
          {category}
        </Typography>:null}
      

        {title}

       {subTitle}
      </Box>
    );
  
};

export default TextContent;
