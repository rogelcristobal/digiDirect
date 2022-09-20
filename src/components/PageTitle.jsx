import React from "react";
import {  Typography } from "@mui/material";
const PageTitle = ({ category, title, subTitle }) => {
  return (
    <>
      <Typography
        variant="h6"
        className="font-medium text-sm text-blue-500 tracking-tight capitalize mb-6"
      >
        {category}
      </Typography>
      <Typography
        variant="h6"
        className="font-medium text-3xl tracking-tight capitalize"
      >
        {title}
      </Typography>

      <Typography
        variant="subtitle1"
        className="text-neutral-600 leading-6 text-base font-medium mt-3"
      >
        {subTitle}
      </Typography>
    </>
  );
};

export default PageTitle;
