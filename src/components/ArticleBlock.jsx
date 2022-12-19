import React, { lazy } from "react";
import { Box, Typography, Divider, Snackbar, Alert } from "@mui/material";
import TextContent from "./TextContent";
import { motion, AnimatePresence } from "framer-motion";
import { RxArrowRight } from "react-icons/rx";
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
      onClick={handleClick}
      className={`w-full h-full ${sx}  box-border  flex flex-col justify-between `}
      ref={view}
    >
      <Box
        component="article"
        className="w-full flex relative items-start justify-between  box-border mb-16 h-16"
      >
        <TextContent
          title={
            <Typography
              variant="subtitle2"
              className={`tracking-tight flex items-center gap-3 relative max-w-fit ${titleStyle} `}
            >
              <span className="text-2xl"> {getID()}.</span> {article.title}
            </Typography>
          }
        />
        <TextContent
          subTitle={
            <Typography
              variant="subtitle2"
              className={`max-w-[20rem]  overflow-hidden line-clamp-3 h-14 border-thin-box font-ukraine-light text-[0.750rem] text-gray-500  absolute -translate-1/2 left-1/2 top-0`}
            >
              {article.content}
            </Typography>
          }
        />
      </Box>
      <Box className="  flex items-center justify-center box-border  h-14">
        {article.child.map((item, id) => (
          <Box component="article" className="w-full  box-border  ">
            <TextContent
              title={
                <Typography
                  variant="subtitle2"
                  className={`flex  items-center justify-center relative max-w-fit font-ukraine-light text-[0.950rem] linkHover `}
                >
                  {item.title}

                  {/* <RxArrowRight className="text-[1.5rem] " /> */}
                </Typography>
              }
              subTitle={
                <Typography
                  variant="subtitle2"
                  className={`max-w-[45rem] font-ukraine-light text-[0.850rem] text-gray-500  `}
                >
                  {item.content}
                </Typography>
              }
            />
          </Box>
        ))}
      </Box>

      <Divider variant="fullWidth" className="h-[1px]  bg-black"></Divider>
    </Box>
  );
};

export default ArticleBlock;
// https://dribbble.com/shots/17800881-Web-UI
