import React from "react";
import {  Typography,Box } from "@mui/material";
const PageTitle = ({ category, title, subTitle }) => {
  return (
    <Box>
      <Typography
        variant="h6"
        className="font-medium text-sm text-blue-500  capitalize mb-2"
      >
        {category}
      </Typography>
      <Typography
        variant="h6"
        className="font-medium text-[1.6rem]  capitalize"
      >
        {title}
      </Typography>

      <Typography
        variant="subtitle1"
        className="text-neutral-600 leading-6 text-base font-[500] mt-2"
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default PageTitle;
