import { useRef, lazy } from "react";
import { Box, Typography, Link } from "@mui/material";
import TextContent from "../components/TextContent";
import template from "../template/template";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useContext } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";

const ArticleBlock = lazy(() => import("../components/ArticleBlock"));

const Templates = () => {
  const { templateSections, pageCategoryRef, storeRef } = useContext(
    TemplateSectionContext
  );
  
  return (
    <>
      {/* main content */}
      <Box className="w-full h-auto box-border px-0   pt-0 pb-36 space-y-16 border-thiner">
        <Box className=" w-full h-[34rem] box-border px-24  pt-[4.5rem]  cursor-default  flex flex-col  justify-start items-start    border-thiner">
          <Box className="border-thiner box-border sticky top-3 ">
            <TextContent
              category="digiDirect"
              title={
                <Typography
                  variant="subtitle1"
                  className=" font-ukraine-regular leading-[3rem]  text-[2.6rem] text-black  "
                >
                  Product <br /> Listing Templates
                </Typography>
              }
              subTitle={<Typography variant="subtitle1"></Typography>}
            />
          </Box>
        </Box>

        {/* main content here */}
        {/* space-y-12 between title and child */}
        <Box className="space-y-20 w-full box-border border-thiner px-24">
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
                titleFontSize="text-[1.7rem]"
                view={item?.refView}
                id={id}
              >
                {/* category */}
                {item.child?.map((childNode, idx) => (
                  <Box key={idx} className="box-border my-32 w-full ">
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

export default Templates;
