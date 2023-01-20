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
          sx={`space-y-5`}
          title={
            <Typography
              variant="subtitle2"
              className={` flex flex-col relative max-w-fit ${titleStyle} `}
            >
              {title}
            </Typography>
          }
        >
          <Typography
            variant="h6"
            className={`max-w-[47rem] font-plus     text-[0.875rem]   `}
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
