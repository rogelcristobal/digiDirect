import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
const PageSubTitle = ({ title, subtitle }) => {
  return (
    <>
      <Typography
        variant="h6"
        className=" leading-5 text-[1.30rem] font-[500] text-neutral-800 "
      >
        {title}
      </Typography>
      <Box className=" mt-3">{subtitle}</Box>
    </>
  );
};

export default PageSubTitle;
