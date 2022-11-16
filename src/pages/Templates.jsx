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
    {/* title container */}
      <Box className=" w-full h-fit box-border px-14  pt-16 pb-8 cursor-default  flex flex-col  justify-center items-end bg-inherit   border-thiner">
        <Box className=" box-border  ">
          <TextContent
            title={
              <Typography
                variant="subtitle1"
                className=" font-ukraine-light text-[5.3rem] uppercase box-border leading-[5.9rem] text-[#1c1c1d]"
              >
                Product <br />
                Listing Templates
                {/* <span className="text-5xl">&#8599;</span> */}
              </Typography>
            }
          />
        </Box>
      </Box>
      {/* main content and sidebar */}
      <Box className="flex items-start justify-center w-full h-fit pt-20">
        <SideBar></SideBar>
        {/* main content */}
        <Box className="w-full h-auto box-border px-0  pb-36 space-y-16 ">
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
      </Box>
      {/* page navigation */}
    </>
  );
};

export default Templates;
