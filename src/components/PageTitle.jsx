import React from "react";
import { Typography, Box } from "@mui/material";
const PageTitle = ({ category, title, subTitle, bottomCategory }) => {
  if (bottomCategory) {
    return (
      <Box className="font-sans normal-case">

        {title}
        <Typography
          variant="h6"
          className="font-medium font-LotaGrotesqueSemiBold text-sm text-gray-200 capitalize	 mt-1"
        >
          {category}
        </Typography>

       
      </Box>
    );
  } else {
    return (
      <Box className=" normal-case">
        <Typography
          variant="h6"
          className="font-medium text-base   text-gray-400 capitalize	 mb-4"
        >
          {category}
        </Typography>

        {title}

        <Box className=" mt-3 max-w-[80%] ">{subTitle}</Box>
      </Box>
    );
  }
};

export default PageTitle;
