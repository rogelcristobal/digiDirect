import React, { lazy } from "react";
import { Box, Typography, Divider, Snackbar, Alert } from "@mui/material";
import TextContent from "./TextContent";

import { BsCheckCircle } from "react-icons/bs";

const ArticleBlock = ({ title, children, titleStyle, view, sx, id }) => {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [hoverLink, setHoverLink] = React.useState(false);

  const getID = () => {
    if (id < 10) {
      return `0${id + 1}`;
    } else {
      return id + 1;
    }
  };
  return (
    <Box
      className={`w-full h-fit ${sx}  px-10 py-7 flex flex-col justify-between `}
      ref={view}
    >
      <Box component="article" className="w-full  box-border  ">
        <TextContent
          // category={article?.category}
          sx={`space-y-7`}
          title={
            <Typography
              variant="body1"
              className="text-3xl font-plus  pb-4 font-semibold capitalize"
            >
              {title}
            </Typography>
          }
        >
          <Typography
            variant="h6"
            className={`max-w-[47rem] font-open      text-[0.875rem]  tracking-tight `}
          >
            {children}
          </Typography>
        </TextContent>
      </Box>
    </Box>
  );
};

export default ArticleBlock;
// https://dribbble.com/shots/17800881-Web-UI
