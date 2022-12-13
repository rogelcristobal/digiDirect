import React from "react";
import { Typography, Box } from "@mui/material";
const TextContent = ({ category, title, subTitle,sx }) => {
 
    return (
      <Box className={`  box-border  ${sx}`}>
       {category? <Typography
          variant="body1"
          className=" text-[0.8rem] relative font-plus text-gray-500/70 font-medium	mb-1.5 "
        >
          {category}
        </Typography>:null}

        {title}

       {subTitle}
      </Box>
    );
  
};

export default TextContent;
