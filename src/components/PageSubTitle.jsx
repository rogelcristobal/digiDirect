import React from "react";
import { Typography } from "@mui/material";
const PageSubTitle = ({ title, subtitle }) => {
  return (
    <>
      <Typography
        variant="h6"
        className=" leading-5 text-xl font-medium text-neutral-800 "
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        className=" leading-5   text-sm font-medium mt-3 text-neutral-700"
      >
        {subtitle}
      </Typography>
    </>
  );
};

export default PageSubTitle;
