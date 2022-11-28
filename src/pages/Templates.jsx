import { lazy, useContext, useEffect, useRef, useState } from "react";
import img from "../img/unsplash/brandonErlingerFord.jpg";
import { Box, Typography, Divider } from "@mui/material";
import TextContent from "../components/TextContent";
import TemplateSectionContext from "../context/TemplateSectionContext";
import SideBar from "../components/SideBar";
import PageScrollableContext from "../context/PageScrollableContext";
import Scrollbar from "smooth-scrollbar";
import LinkBtn2 from "../components/LinkBtn2";
const ArticleBlock = lazy(() => import("../components/ArticleBlock"));

const Templates = () => {
  const { templateSections, pageCategoryRef, storeRef } = useContext(
    TemplateSectionContext
  );
  const text = `Product listing templates`;
  const sentence = {
    hidden: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
    },
  };
  const ref = useRef(null);
  const { scrollEl } = useContext(PageScrollableContext);
  const scrollbar = Scrollbar.init(scrollEl);
  const [hoverState, setHoverState] = useState(false);


  const mouseEnterHover=()=>{
    setHoverState((prev)=>prev=!hoverState)
  }
  const underlineAnimation={
    animate:{
      ...(hoverState ? {width:'100%'}:{width:'0%'})
    }
  }
 
  return (
    <Box className="flex flex-col items-center justify-start w-full container h-full  box-border  mx-auto bg-[#ffffff]">
      {/* title */}
      <Box className=" w-full h-[28rem] box-border  relative  pb-16   flex flex-col  justify-center items-end   ">
        <Box className=" box-border h-fit w-fit z-[8]   absolute top-[12rem]  right-[4rem]">
          <TextContent
            title={
              <Typography
                variant="subtitle1"
                className=" font-ukraine-light  text-[3.2rem] tracking-tighter normal-case indent-48 box-border leading-[3.7rem] text-black pointer-events-none text-left  "
              >
                {/* <motion.span variants={sentence} initial="hidden" animate="animate">
                 {text.split("").map((char,index)=>{
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                  )
                 })}
                </motion.span> */}
                Product listing
                <br />
                templates
                <span className="">
                  {" "}
                  <span className="font-medium  "></span>for external <br />
                  content creators.
                </span>
              </Typography>
            }
          />

          <span className="font-ukraine-light capitalize text-neutral-500/70 tracking-tight text-xs absolute   -top-[1.3rem] left-0 cursor-default">
            content
          </span>
        </Box>
      </Box>

      <Box className="flex  items-start justify-center w-full h-fit min-h-[100vh] mt-[30rem] box-border">
       

        {/* main content */}
        <Box className="w-full h-full  box-border px-0 pb-[20rem]  ">
          <Box className="space-y-72 w-full box-border   ">
            {/* space-y-12 between siblings */}
            {templateSections.map((item, id) => (
              // divided per category

              <Box
                className="box-border w-full  h-full scrollMargin grid grid-cols-8  "
                key={id}
                data-id={id}
                ref={storeRef}
              >
                <Box className="box-border w-full col-span-3">
                  <TextContent
                    title={
                      <Typography
                        variant="body1"
                        className="font-ukraine-regular  leading-[2rem] w-full lg:max-w-[20rem] text-[1.6rem] tracking-tighter"
                      >
                        {item.category}
                      </Typography>
                    }
                  ></TextContent>
                </Box>

                <ArticleBlock
                  article={item}
                  titleStyle="text-[1.2rem] font-ukraine-light"
                  sx="col-span-5"
                  view={item?.refView}
                  id={id}
                >
                  {item.child?.map((childNode, idx) => (
                    <Box key={idx}  className="box-border w-full ">
                      <LinkBtn2 title={childNode.title}/>
                    </Box>
                  ))}
                </ArticleBlock>
              </Box>
            ))}
          </Box>
          {/* space-y-12 between title and child */}
        </Box>
      </Box>
    </Box>
  );
};

export default Templates;
// https://wemakefab.com/journal/gs-project-crm
//https://www.awwwards.com/sites/plastic
