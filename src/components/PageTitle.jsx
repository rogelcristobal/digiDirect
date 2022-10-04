import React from "react";
import { Typography, Box } from "@mui/material";
const PageTitle = ({ category, title, subTitle }) => {
  return (
    <Box>
      <Typography
        variant="h6"
        className="font-medium text-sm text-blue-500  capitalize mb-6"
      >
        {category}
      </Typography>
      <Typography
        variant="h6"
        className="font-[500] text-[1.8rem]  capitalize"
      >
        {title}
      </Typography>

      <Box className=" mt-2">{subTitle}</Box>
    </Box>
  );
};

export default PageTitle;
