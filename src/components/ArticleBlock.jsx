import React from "react";
import { Box, Typography } from "@mui/material";
import PageTitle from "./PageTitle";
import PropTypes from "prop-types";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackLayout,
} from "@codesandbox/sandpack-react";
// import { sandpackDark } from "@codesandbox/sandpack-themes";

const Block = ({ article, refStore, children, pageRef, id }) => {
  return (
    <Box className="">
      <Box
        component="article"
        ref={refStore}
        className="w-full box-border space-y-8 "
      >
        <PageTitle
          category={article?.category}
          title={
            <Typography
              variant="subtitle1"
              className="font-medium text-[1.7rem]  text-white  "
            >
              {article.title}
              {/* {pageRef.current[id].} */}
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

        {article?.snippet && (
          <SandpackLayout>
            <SandpackCodeEditor
             
              showTabs
              // showLineNumbers
              showInlineErrors
              wrapContent
              readOnly
            />
          </SandpackLayout>
        )}

        {/* {article?.snippet && (
          <Sandpack
            theme={theme}
            files={{
              "/index.html": {
                code: article?.snippet?.tags,
                active: true,
                readOnly: true,
              },
              "/index.css": {
                code: article?.snippet?.styles,
              },
            }}
            customSetup={{
              entry: "/index.html",
            }}
            options={{
              
              showReadOnly: "true",
              codeEditor: {
                additionalLanguages: [
                  {
                    name: "html",
                    extensions: ["html"],
                    language: html(),
                  },
                ],
              },
             
            }}
          />
        )} */}

        {/* {article?.snippet && (
          <Box className=" h-fit w-full box-border rounded-xl  ">
            <CodeSnippetComponent
              code={article?.snippet}
            ></CodeSnippetComponent>
          </Box>
        )} */}
      </Box>
      {/* for nesteded nodes */}
      {children}
    </Box>
  );
};

const ArticleBlock = (props) => {
  const theme = {
    colors: {
      surface1: "#151515",
      surface2: "#252525",
      surface3: "#2F2F2F",
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
          hidden: props?.article?.snippet?.styles ? false: true,
        },
      }}
    >
      <Block {...props} />
    </SandpackProvider>
  );
};

ArticleBlock.propTypes = {
  articleList: PropTypes.array,
};

export default ArticleBlock;
// https://sandpack.codesandbox.io/theme
