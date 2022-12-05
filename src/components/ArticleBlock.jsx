import React from "react";
import { Box, Typography, Divider, Snackbar, Alert, ListItem } from "@mui/material";
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

      <Box className={`w-full h-fit ${sx}   flex flex-col justify-between `} ref={view}>
        <Box component="article" className="w-full  box-border  max-w-[50rem]">
          <TextContent
            // category={article?.category}
            sx={`${article.snippet ? 'space-y-3':'space-y-2'}`}
            title={

              <Typography
                variant="subtitle1"
                className={` font-inter   flex flex-col gap-2 relative max-w-fit ${titleStyle} `}
                >
                {article.title}
              </Typography>
            }
            subTitle={
              <Typography
                variant="subtitle1"
                className={` font-inter font-medium text-[0.825rem] text-gray-600/90   `}
              >
                {article.content}
              </Typography>
            }
          />
        </Box>
        { children &&
        // spaces for each child
          <Box className="space-y-8 pl-6 flex flex-col items-center justify-center box-border"> 
            {children} 
           
          </Box>

        }
      </Box>
    </>
  );
};

export default ArticleBlock;
// https://dribbble.com/shots/17800881-Web-UI
