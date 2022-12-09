import React from "react";
import { Typography, Box } from "@mui/material";
const TextContent = ({ category, title, subTitle,sx }) => {
 
    return (
      <Box className={`  box-border  ${sx}`}>
       {category? <Typography
          variant="body1"
          className=" text-[0.8rem] relative font-plus text-gray-400/70 	mb-2 "
        >
          {category}
        </Typography>:null}

        {title}

       {subTitle}
      </Box>
    );
  
};

export default TextContent;
