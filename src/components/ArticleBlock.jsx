import React from "react";
import { Box, Typography, IconButton, Snackbar, Alert } from "@mui/material";
import PageTitle from "./PageTitle";
import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
const ArticleBlock = ({ article, children, titleFontSize }) => {
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
    <Box>
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
      <Box component="article" className="w-full box-border space-y-4 ">
        <PageTitle
          category={article?.category}
          title={
            <Typography
              variant="subtitle1"
              className={`font-semibold  ${titleFontSize}  text-gray-800  `}
            >
              {article.title}
            </Typography>
          }
          subTitle={
            <Typography
              variant="subtitle1"
              className={`text-gray-800 font-medium  text-[0.9rem] `}
            >
              {article.content}
            </Typography>
          }
        />
        <Box className="relative box-border h-fit">
          {article?.snippet && <CodeBlock snippet={article?.snippet} />}

          {/* btn container  (this will only show if a codeblock is present) */}
          {article?.snippet && (
            <Box className="absolute box-border right-[0rem]  top-0  p-2.5  h-fit  w-fit  bg-inherit   flex items-center justify-center space-x-4">
            {/* <Box className="absolute box-border right-[0rem]  -bottom-[calc(1.2rem + 0.75rem)]  px-0 py-2  h-fit  w-fit  bg-inherit   flex items-center justify-center space-x-4"> */}
              
              <IconButton
                variant="contained"
                className="hover:text-gray-300 hover:border-gray-300 text-gray-300/30  border-solid border-gray-500/30 border-[1.5px]  font-medium rounded-md  bg-transparent shadow-none text-xs normal-case px-2 py-2"
                onClick={handleToggleCopyToggle}
              >
                <AiOutlineCopy className="text-sm" />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
      {/* if nesteded nodes are present*/}
      {children}
    </Box>
  );
};

export default ArticleBlock;
// https://sandpack.codesandbox.io/theme
