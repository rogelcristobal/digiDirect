import React from "react";
import { Box, Typography, Button, Snackbar ,Alert} from "@mui/material";
import PageTitle from "./PageTitle";
import { useState } from "react";
import CodeBlock from "./CodeBlock";
import {BsCheckCircle} from 'react-icons/bs'
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
      return styles + tags;
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
        <Alert onClick={handleClose} icon={ <BsCheckCircle className="text-white text-xl" /> } className="w-72 h-14 px-4 cursor-pointer bg-blue-500 text-white rounded-lg  flex items-center justify-start space-x-4" color="info">
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
        <Box className="relative box-border">
          {article?.snippet && <CodeBlock snippet={article?.snippet} />}

          {/* btn container  (this will only show if a codeblock is present) */}
          {article?.snippet && (
            <Box className="absolute box-border right-[0rem]  -bottom-[calc(1.2rem + 0.75rem)]  pt-4  h-fit  w-fit  bg-inherit  flex items-center justify-center ">
              <Button
                variant="contained"
                className=" text-white-50 hover:text-neutral-50 font-medium rounded-md bg-blue-500 shadow-none text-xs normal-case px-6 py-2"
                onClick={handleToggleCopyToggle}
              >
                Copy
              </Button>
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
