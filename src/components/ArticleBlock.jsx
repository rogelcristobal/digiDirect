import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PageTitle from "./PageTitle";
import PropTypes from "prop-types";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import { html } from "@codemirror/lang-html";

import { css } from "@codemirror/lang-css";

const Block = ({ article, refStore, children, pageRef, id }) => {
  return (
    <Box className="">
      <Box
        component="article"
        ref={refStore}
        className="w-full box-border space-y-4 "
      >
        <PageTitle
          category={article?.category}
          title={
            <Typography
              variant="subtitle1"
              className="font-medium text-[1.7rem]  text-white  "
            >
              {article.title}
            </Typography>
          }
          subTitle={
            <Typography
              variant="subtitle1"
              className={`text-white font-normal  text-[0.9rem] `}
            >
              {article.content}
            </Typography>
          }
        />
        <Box className="relative box-border">
          {article?.snippet && (
            <SandpackLayout className="box-border  rounded-none">
              <SandpackCodeViewer
                className="h-fit max-h-[25rem] min-h-[5rem] p-1 px-2 box-border rounded-none" // styles for the code viewer itself
                additionalLanguages={[
                  {
                    name: "html",
                    extensions: ["html"],
                    language: html(),
                  },
                  {
                    name: "css",
                    extensions: ["css"],
                    language: css(),
                  },
                ]}
                // showTabs
                // showLineNumbers
                showInlineErrors
                wrapContent
                readOnly
              />
              {/* <Button variant="contained" className="absolute text-xs p-2 rounded-none bg-[#1f1f1f] shadow-none bottom-3 right-3 normal-case font-normal ">
              Copy
            </Button> */}
            </SandpackLayout>
          )}
          {article?.snippet&& <Box className="absolute box-border right-[0.08rem] -bottom-[2.40rem] h-10 w-fit min-w-[10rem] bg-[#151515] flex items-center justify-end pr-8"
          style={{  clipPath:'polygon(0 0, 100% 0%, 100% 100%, 25% 100%,0 0)'}} 
          >
            {/* [#151515] */}
           <Button disableTouchRipple  variant="contained"  className="text-neutral-50 bg-transparent rounded-none shadow-none text-xs">
             copy
           </Button>
          </Box>}
        </Box>
      </Box>
      {/* for nesteded nodes */}
      {children}
    </Box>
  );
};

const ArticleBlock = (props) => {
  const theme = {
    colors: {
      surface1: "#151515", //canvas
      surface2: "transparent", //border
      surface3: "#2F2F2F", // ?
      clickable: "#999999",
      base: "#808080",
      disabled: "#4D4D4D",
      hover: "#C5C5C5",
      accent: "#90e86f",
      error: "#E1CFF8",
      errorSurface: "#b08df8",
    },

    syntax: {
      plain: "#f0fdaf",
      comment: {
        color: "#757575",
        fontStyle: "italic",
      },
      keyword: "#e5fd78",
      tag: "#f0fdaf",
      punctuation: "#ffffff",
      definition: "#eeeeee",
      property: "#90e86f",
      static: "#ffffff",
      string: "#dafecf",
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
      size: "13px",
      lineHeight: "20px",
    },
  };
  return (
    <SandpackProvider
      theme={theme}
      template="react"
      files={{
        "/index.html": {
          code: props?.article?.snippet?.tags,
          active: true,
          // readOnly: true,
        },
        "/styles.css": {
          code: props?.article?.snippet?.styles,
          hidden: props?.article?.snippet?.styles ? false : true,
        },
      }}
      options={{
        classes: {
          // "sp-layout":"bg-red-500 "
        },
      }}
    >
      <Block {...props} />
    </SandpackProvider>
  );
};

export default ArticleBlock;
// https://sandpack.codesandbox.io/theme
