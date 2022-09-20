import React from "react";
import { Typography } from "@mui/material";
const PageSubTitle = ({ title, subtitle }) => {
  return (
    <>
      <Typography
        variant="h6"
        className=" leading-5 text-xl font-semibold  "
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        className=" leading-5  text-sm font-medium mt-2 text-neutral-600"
      >
        {subtitle}
      </Typography>
    </>
  );
};

export default PageSubTitle;
