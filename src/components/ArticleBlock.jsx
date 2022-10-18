import React from "react";
import { Box, Typography } from "@mui/material";
import PageTitle from "./PageTitle";
import CodeSnippetComponent from "./CodeSnippetComponent";
import PropTypes from "prop-types";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  Sandpack,
  SandpackLayout,
} from "@codesandbox/sandpack-react";

const Block = ({ article, refStore, children, pageRef, id }) => {
  const code = `
<ul>
<li>The code for your html </li>
<li>The code for your html </li>
<li>The code for your html</li>
</ul>
  `;
  return (
    <>
      <Box
        component="article"
        ref={refStore}
        className="w-full box-border space-y-2 "
      >
        <Sandpack
          files={{
            "/index.html": {
              code: code,
              active: true,
              // readOnly: true,
            },
            "/index.css":code
          }}
          customSetup={{
            entry: "/index.html",
          }}
          options={{
            showReadOnly:"true",
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

        <PageTitle
          category={article?.category}
          title={
            <Typography
              variant="subtitle1"
              className="font-semibold text-[1.3rem]  text-gray-800  "
            >
              {article.title}
              {/* {pageRef.current[id].} */}
            </Typography>
          }
          subTitle={
            <Typography
              variant="subtitle1"
              className={`text-gray-700   text-[0.9rem] ${
                !article?.snippet && "mb-12"
              }`}
            >
              {article.content}
            </Typography>
          }
        />

        {article?.snippet && (
          <Box className=" h-fit w-full box-border rounded-xl  ">
            <CodeSnippetComponent
              code={article?.snippet}
            ></CodeSnippetComponent>
          </Box>
        )}
      </Box>
      {children}
    </>
  );
};

const ArticleBlock = (props) => {
  return (
    <SandpackProvider template="react">
      <Block {...props} />
    </SandpackProvider>
  );
};

ArticleBlock.propTypes = {
  articleList: PropTypes.array,
};

export default ArticleBlock;
