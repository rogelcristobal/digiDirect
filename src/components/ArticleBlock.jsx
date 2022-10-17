import React from "react";
import { Box, Typography } from "@mui/material";
import PageTitle from "./PageTitle";
import CodeSnippetComponent from "./CodeSnippetComponent";
import PropTypes from "prop-types";

const ArticleBlock = ({ articleList, refStore }) => {
  return (
    <>
      {articleList?.map((item, idx) => {
        // console.log(item);
        return (
        
            <Box
             key={idx}
              component="article"
              ref={refStore}
              className="w-full box-border space-y-2 "
            >
              <PageTitle
                category={item?.category}
                title={
                  <Typography
                    variant="subtitle1"
                    className="font-semibold text-[1.3rem]  text-gray-800  "
                  >
                    {item.title}
                  
                  </Typography>
                }
                subTitle={
                  <Typography
                    variant="subtitle1"
                    className={`text-gray-700   text-[0.9rem] ${
                      !item?.snippet && "mb-12"
                    }`}
                  >
                    {item.content}
                  </Typography>
                }
              />
              {item.child?.map((childObj, id) => (
                <ArticleBlock
                  key={id}
                  articleList={[childObj]}
                  refStore={refStore}
                />
              ))}
              {item?.snippet && (
                <Box className=" h-fit w-full box-border rounded-xl  ">
                  <CodeSnippetComponent
                    code={item?.snippet}
                  ></CodeSnippetComponent>
                </Box>
              )}
            </Box>
        
        );
      })}
    </>
  );
};

ArticleBlock.propTypes = {
  articleList: PropTypes.array,
};

export default ArticleBlock;
