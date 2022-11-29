import React from "react";
import { Typography, Box } from "@mui/material";
const TextContent = ({ category, title, subTitle,sx }) => {
 
    return (
      <Box className={`  box-border  ${sx}`}>
       {category? <Typography
          variant="body1"
          className=" text-[0.8rem] relative text-neutral-400/70 capitalize	 "
        >
          {category}
        </Typography>:null}

        {title}

       {subTitle? <Box className="  max-w-[80%] ">{subTitle}</Box>:null}
      </Box>
    );
  
};

export default TextContent;
