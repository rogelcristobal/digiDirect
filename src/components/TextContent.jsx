import React from "react";
import { Typography, Box } from "@mui/material";
const TextContent = ({ category, title, subTitle,sx }) => {
 
    return (
      <Box className={`  box-border  ${sx}`}>
      

        {title}
         {category? <Typography
          variant="body1"
          className=" text-[0.7rem] relative capitalize font-ukraine-regular  text-gray-500/60 	mt-6 "
        >
          {category}
        </Typography>:null}

       {subTitle}
      </Box>
    );
  
};

export default TextContent;
