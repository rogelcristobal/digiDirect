import React from "react";
import { Box, Typography } from "@mui/material";
import PageTitle from "./PageTitle";
import CodeSnippetComponent from "./CodeSnippetComponent";
import PropTypes from "prop-types";
import { html } from "@codemirror/lang-html";

const ArticleBlock = ({ article, refStore,children ,pageRef ,id}) => {
  return (
    <>
      <Box
        component="article"
        ref={refStore}
        className="w-full box-border space-y-2 "
      >
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
            <CodeSnippetComponent code={article?.snippet}></CodeSnippetComponent>
          </Box>
        )}
      </Box>
      {children}
    </>
  );
};

ArticleBlock.propTypes = {
  articleList: PropTypes.array,
};

export default ArticleBlock;
