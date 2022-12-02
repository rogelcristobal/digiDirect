import React from "react";
import { Box, Typography, Divider, Snackbar, Alert } from "@mui/material";
import TextContent from "./TextContent";
import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { BsCheckCircle } from "react-icons/bs";
import { motion, animate } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
const ArticleBlock = ({ article, children, titleStyle, view, sx }) => {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
  const clickAnimate = {
    animate: {
      // height:40,
      // width:"0rem",
    },
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {/* .MuiAlert-icon */}
        <Alert
          onClick={handleClose}
          icon={<BsCheckCircle className="text-white text-xl" />}
          className="w-72 h-14 px-4 cursor-pointer bg-blue-500 text-white rounded-lg  flex items-center justify-start space-x-4"
          color="info"
        >
          Copied to clipboard! <br />
        </Alert>
      </Snackbar>

      <Box className={`w-full h-full ${sx} max-w-[75%] space-y-6 flex flex-col justify-between p-0`} ref={view}>
        <Box component="article" className="w-full box-border mb-8   ">
          <TextContent
            // category={article?.category}
            sx="space-y-4"
            // title={

            //   <Typography
            //     variant="subtitle1"
            //     className={` tracking-tighter   flex flex-col gap-2 relative max-w-fit ${titleStyle} `}
            //     >
            //     {article.title}
            //   </Typography>
            // }
            subTitle={
              <Typography
                variant="subtitle1"
                className={` font-ukraine-light  text-[0.7rem] text-neutral-500`}
              >
                {article.content}
              </Typography>
            }
          />
        </Box>
        <Box className="box-border  flex  w-full items-center justify-start
         space-x-16">{children}</Box>
      </Box>
    </>
  );
};

export default ArticleBlock;
// https://dribbble.com/shots/17800881-Web-UI
