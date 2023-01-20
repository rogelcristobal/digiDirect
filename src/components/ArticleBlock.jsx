import React, { lazy } from "react";
import { Box, Typography, Divider, Snackbar, Alert } from "@mui/material";
import TextContent from "./TextContent";

import { BsCheckCircle } from "react-icons/bs";

const ArticleBlock = ({ article, children, titleStyle, view, sx, id }) => {

  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [hoverLink, setHoverLink] = React.useState(false);
  const mergeTagsAndStyles = ({ tags, styles }) => {
    if (!styles) {
      return tags;
    } else {
      return `<style>${styles}</style>` + tags;
    }
  };
  const handleToggleCopyToggle = () => {
    navigator.clipboard.writeText(mergeTagsAndStyles(article?.snippet));
    setOpen(true);
  };

  const handleClick = () => {
    setShow((prev) => (prev = !show));
  };
  const handleHoverLink = () => {
    setHoverLink((prev) => (prev = !hoverLink));
  };
  const clickAnimate = {
    animate: {
      // height:40,
      // width:"0rem",
    },
  };
  const getID = () => {
    if (id < 10) {
      return `0${id + 1}`;
    } else {
      return id + 1;
    }
  };
  return (
    <Box

      className={`w-full h-fit ${sx}   flex flex-col justify-between `}
      ref={view}
    >
      <Box component="article" className="w-full  box-border  ">
        <TextContent
          // category={article?.category}
          sx={`space-y-6`}
          title={
            <Typography
              variant="subtitle2"
              className={`    flex flex-col relative max-w-fit ${titleStyle} `}
            >
              {article.title}
            </Typography>
          }
        >
          <Typography
            variant="h6"
            className={`max-w-[47rem] font-plus     text-[0.875rem]   `}
          >
            {article.content}
          </Typography>
        </TextContent>
      </Box>


      {children && (
        // spaces for each child

        <Box className="  flex flex-col items-center justify-start box-border">
          {children}
        </Box>
      )}

    </Box>
  );
};

export default ArticleBlock;
// https://dribbble.com/shots/17800881-Web-UI
