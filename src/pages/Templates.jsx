import { useRef, lazy } from "react";
import { Box, Typography } from "@mui/material";
import TextContent from "../components/TextContent";
import template from "../template/template";
import { useInView } from "react-intersection-observer";
import Divider from "@mui/material/divider";
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
  const text= `Product listing templates`
  const sentence = {
    hidden:{opacity:1},
    animate:{
      
      opacity:1,
      transition:{
        delay:0.5,
        staggerChildren:0.08
      }
    }
  }
  const letter={
    hidden:{opacity:0},
    animate:{
      opacity:1,
      
    }
  }
  return (
    <>
    {/* title container */}
      <Box className=" w-full h-[16rem]  box-border  relative  pb-16   flex flex-col  justify-center items-end bg-inherit    ">



        

        <Box className=" box-border h-fit w-fit   absolute top-[8rem]  left-[3rem]">
          <TextContent
            title={
              <Typography
                variant="subtitle1"
                className=" font-ukraine-light  text-[2.7rem] tracking-tighter normal-case indent-52 box-border leading-[3rem] text-black pointer-events-none text-left "
              >
                <motion.span variants={sentence} initial="hidden" animate="animate">
                 {text.split("").map((char,index)=>{
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                  )
                 })}
                </motion.span>
                 <br />
                <span className=""> <span className="font-medium  "></span> External content creator.
                </span>
              </Typography>
            }
          />
        </Box>


      </Box>
      
      {/* main content and sidebar */}
      <Box className="flex items-start justify-center w-full h-fit  mt-20">
        <SideBar></SideBar>

        {/* main content */}
        <Box className="w-full h-auto min-h-screen  box-border px-0  pb-[20rem] border-thiner">
          
          <Box className="space-y-52 w-full box-border  px-12 py-20 border-thiner">
            {/* space-y-12 between siblings */}
            {templateSections.map((item, id) => (
              // divided per category
            
              <Box
                className="box-border w-full scrollMargin flex flex-col items-start  justify-start  "
                key={id}
                data-id={id}
                ref={storeRef}
              >
                {/* <TextContent title={
                  <Typography variant="body1" className="font-ukraine-regular text-[1.3rem]">{item.title}</Typography>
                }></TextContent> */}
                
              
                <ArticleBlock
                  article={item}
                  titleFontSize="text-[1.3rem]"
                  view={item?.refView}
                  id={id}
                >
                  
                  {/* category */}
                  {item.child?.map((childNode, idx) => (
                    <Box key={idx} className="box-border my-32 w-full ">
                      {/* my-12 between each child nodes */}
                      <ArticleBlock
                        article={childNode}
                        titleFontSize="text-[1.1rem]"
                      />
                    </Box>
                  ))} 
                 </ArticleBlock>
                  {/* <Divider variant='fullWidth' className="h-[1px] bg-[#1c1c1d] w-full mt-3"></Divider> */}
                
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
// https://wemakefab.com/journal/gs-project-crm