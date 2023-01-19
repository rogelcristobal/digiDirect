import React from "react";
import { Typography, Box } from "@mui/material";
const TextContent = ({ category, title, children, sx }) => {
  return (
    <Box className={`  box-border  ${sx}`}>
      {title ? (
        <Typography
          variant="body1"
          className="text-lg font-bold  font-plus mb-3"
        >
          {title}
        </Typography>
      ) : null}

      {children}
    </Box>
  );
};

export default TextContent;
