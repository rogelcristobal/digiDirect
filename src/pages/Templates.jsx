import { useRef, lazy } from "react";
import { Box, Typography, Link } from "@mui/material";
import TextContent from "../components/TextContent";
import template from "../template/template";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useContext } from "react";
import LinkBtn from "../components/LinkBtn";
import TemplateSectionContext from "../context/TemplateSectionContext";
import { HiArrowUpRight } from "react-icons/hi2";
import SideBar from "../components/SideBar";
const ArticleBlock = lazy(() => import("../components/ArticleBlock"));

const Templates = () => {
  const { templateSections, pageCategoryRef, storeRef } = useContext(
    TemplateSectionContext
  );

  return (
    <>
      {/* main content */}
      <Box className="w-full h-auto box-border px-0 pt-28 pb-36 space-y-16 border-thiner">
        <Box className=" w-full h-fit box-border px-14  pt-8 pb-8 cursor-default  flex flex-col  justify-center items-start    border-thiner">
          <Box className=" box-border  ">
            <TextContent
              title={
                <Typography
                  variant="subtitle1"
                  className=" font-ukraine-regular text-[2.8rem] uppercase space-x-12 box-border leading-[3.3rem] text-black  "
                >
                  Product <br /> Listing Templates
                  <span className="text-5xl">&#8599;</span>
                </Typography>
              }
              // subTitle={
              //   <Typography
              //     variant="subtitle1"
              //     className="font-ukraine-light  text-neutral-400 mt-8 "
              //   >
              //     Control how the product descriptions, what's in the box and specifications looks on digiDirect, and what content is included. 
              //   </Typography>
              // }
            />
          </Box>
        </Box>
        <Box className="space-y-20 w-full box-border border-thiner px-14 pt-20 ">
          {/* space-y-12 between siblings */}
          {templateSections.map((item, id) => (
            // divided per category
            <Box
              className="box-border w-full scrollMargin flex items-center  justify-start "
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
        {/* main content here */}
        {/* space-y-12 between title and child */}

         
      </Box>

      {/* page navigation */}
    </>
  );
};

export default Templates;
