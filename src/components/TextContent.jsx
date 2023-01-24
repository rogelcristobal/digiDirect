import React from "react";
import { Typography, Box } from "@mui/material";

const TextContent = ({anchor,  title, children, sx }) => {
  return (
    <div {...(anchor !== null && { 'id': anchor })} data-label={title} className={`  box-border  ${anchor&&'scroll-mt-16'}`}>
      
      {title ? (
        <Typography
          variant="body1"
          className={`text-lg ${sx}  font-semibold  font-plus ${anchor?'mb-6':'mb-3'}`}
        >
          {title}
        </Typography>
      ) : null}


      {children}
    </div>
  );
};

export default TextContent;
