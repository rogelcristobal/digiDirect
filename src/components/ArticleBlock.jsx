import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PageTitle from "./PageTitle";
import { useState } from "react";
import CodeBlock from "./CodeBlock";

const ArticleBlock = ({ article, children, titleFontSize}) => {
  const [copyToggle,setCopyToggle] = useState(false)
   const mergeTagsAndStyles = ({ tags, styles }) => {
    if (!styles) {
      return tags;
    } else {
      return styles + tags;
    }
  };
  const handleToggleCopyToggle = ()=>{
    if(article?.snippet?.styles){
      setCopyToggle((prev) => prev = !copyToggle)
    }else{
      navigator.clipboard.writeText(mergeTagsAndStyles(article?.snippet))
    }
  }
  return (
    <Box className="">
      <Box
        component="article"
      
        className="w-full box-border space-y-4 "
      >
        <PageTitle
          category={article?.category}
          title={
            <Typography
              variant="subtitle1"
              className={`font-medium  ${titleFontSize}  text-white  `}
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
          {article?.snippet && <CodeBlock snippet={article?.snippet} />}

          {/* btn container  (this will only show if a codeblock is present) */}
          {article?.snippet && (
            <Box
              className="absolute box-border right-[0.08rem] -bottom-[2.40rem] h-10 w-fit min-w-[10rem] bg-[#151515] flex items-center justify-end pr-8"
              style={{
                clipPath: "polygon(0 0, 100% 0%, 100% 100%, 25% 100%,0 0)",
              }}
            >
              <Button
                disableTouchRipple
                variant="contained"
                className=" text-stone-500/40 hover:text-neutral-50 bg-transparent rounded-none shadow-none text-xs normal-case"
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
