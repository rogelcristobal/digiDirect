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
        <Box className="relative box-border h-fit  w-full">
          {article?.snippet && <CodeBlock handleCopy={handleToggleCopyToggle} snippet={article?.snippet} />}

          
        </Box>
      </Box>
      {/* if nesteded nodes are present*/}
      {children}
    </Box>
  );
};

export default ArticleBlock;
// https://sandpack.codesandbox.io/theme
