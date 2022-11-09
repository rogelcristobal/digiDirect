import { useRef, lazy } from "react";
import { Box, Typography, Link } from "@mui/material";
import TextContent from "../components/TextContent";
import template from "../template/template";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useContext } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import SideBar from "../components/SideBar";
const ArticleBlock = lazy(() => import("../components/ArticleBlock"));

const Templates = () => {
   const {templateSections,pageCategoryRef,storeRef} = useContext(TemplateSectionContext)

 
 

  return (
    <>
      

      {/* main content */}
      <Box className="w-full h-auto box-border px-6  pt-8 pb-36 space-y-20">
        {/* <Box className=" w-full max-w-xl box-border px-12 overflow-hidden cursor-default  flex flex-col  space-y-10 justify-between items-start   ">
          <TextContent
            // category="product listing"
            title={
              <Typography
                variant="subtitle1"
                className=" font-semibold  truncate  text-[1.8rem] text-gray-100  "
              >
                Templates
              </Typography>
            }
          />
        </Box> */}

        {/* space-y-12 between title and child */}
        <Box className="space-y-20 w-full  box-border ">
          {/* space-y-12 between siblings */}
          {templateSections.map((item, id) => (
            // divided per category
            <Box
              className="box-border w-full scrollMargin flex items-center justify-start "
              key={id}
              data-id={id}
              ref={storeRef}
            >
              <ArticleBlock
                article={item}
                titleFontSize="text-[1.3rem]"
                view={item?.refView}
              >
                {item.child?.map((childNode, idx) => (
                  <Box key={idx} className="box-border my-16 w-full ">
                    {/* my-12 between each child nodes */}
                    <ArticleBlock
                      article={childNode}
                      titleFontSize="text-[1.2rem]"
                    />
                  </Box>
                ))}
              </ArticleBlock>
            </Box>
          ))}
        </Box>
      </Box>
    

      {/* page navigation */}
    </>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
// https://www.cdnfonts.com/lota-grotesque-alt-1.font
export default Templates;
