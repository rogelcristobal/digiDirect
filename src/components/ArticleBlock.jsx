import React from "react";
import { Box, Typography } from "@mui/material";
import PageTitle from "./PageTitle";
import CodeSnippetComponent from "./CodeSnippetComponent";
import PropTypes from 'prop-types';


const ArticleBlock = ({ articleList, refStore }) => {
    console.log(articleList)
  return (

    <div className=" space-y-6">
      {articleList?.map((item, idx) => (
        <Box key={idx} ref={refStore}>
          <Box component="article" className="w-full box-border space-y-2 ">
            <PageTitle
              category={item?.category}
              title={
                <Typography
                  variant="subtitle1"
                  className="font-medium text-[1.3rem]  text-gray-800  "
                >
                  {item.title}
                </Typography>
              }
              subTitle={
                <Typography
                  variant="subtitle1"
                  className={`text-gray-700   text-[0.9rem] ${!item?.snippet&& 'mb-12'}`}
                >
                  {item.content}
                </Typography>
              }
            />
            {item.child?.map((childObj, id) => (
                <ArticleBlock key={id} articleList={[childObj]}/>
                // console.log([childObj])
            ))}
            {item?.snippet && (
              <Box className=" h-fit w-full box-border rounded-xl  ">
                <CodeSnippetComponent
                  code={item?.snippet}
                ></CodeSnippetComponent>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </div>
  );
};

ArticleBlock.propTypes={
    articleList: PropTypes.array
}


export default ArticleBlock;
