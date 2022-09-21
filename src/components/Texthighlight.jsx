import React from "react";
import { Typography } from "@mui/material";
const Texthighlight = ({ children,variant,sx }) => {
  return (
    <Typography variant={variant} className={`${sx} `}>
      {children}
    </Typography>
  );
};

export default Texthighlight;
