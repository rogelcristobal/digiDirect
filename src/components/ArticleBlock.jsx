import React from "react";
import { Box, Typography, Divider, Snackbar, Alert } from "@mui/material";
import TextContent from "./TextContent";
import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { BsCheckCircle } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const ArticleBlock = ({ article, children, titleFontSize, view,}) => {
  const [open, setOpen] = React.useState(false);

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

      <Box className={`w-full   ${children ? "py-8 px-0" : null}`} ref={view}>
        <Box component="article" className="w-full box-border space-y-6 ">
          <TextContent
            // category={article?.category}
            title={
              
              <Typography
                variant="subtitle1"
                className={`font-ukraine-regular tracking-tight  capitalize flex flex-col gap-2 relative max-w-fit ${titleFontSize}  text-[#1a1a1a]`}
                >
                {/* <Typography variant="overline w-fit text-lg text-gray-400">{id}</Typography> */}
                {article.title}
              </Typography>
            }
            // subTitle={
            //   <Typography
            //     variant="subtitle1"
            //     className={` font-ukraine-regular  text-[0.9rem] `}
            //   >
            //     {article.content}
            //   </Typography>
            // }
          />
          

          {/* code block width */}
          {/* <Box className=" relative box-border h-fit    max-w-[48rem]">
          {article?.snippet && (
            <CodeBlock
              handleCopy={handleToggleCopyToggle}
              copyState={open}
              content={article}
            />
          )}
        </Box> */}
        </Box>
        {/* if nesteded nodes are present*/}
        {children}
      </Box>
    </>
  );
};

export default ArticleBlock;
// https://dribbble.com/shots/17800881-Web-UI
