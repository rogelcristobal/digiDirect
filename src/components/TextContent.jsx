import React from "react";
import { Typography, Box } from "@mui/material";
const TextContent = ({ category, title, subTitle,sx }) => {
 
    return (
      <Box className={` normal-case box-border  ${sx}`}>
       {category? <Typography
          variant="body1"
          className="font-ukraine-light text-[0.8rem] relative text-neutral-400/70 capitalize	 mb-0"
        >
          {category}
        </Typography>:null}

        {title}

       {subTitle? <Box className=" mt-3 max-w-[80%] ">{subTitle}</Box>:null}
      </Box>
    );
  
};

export default TextContent;
