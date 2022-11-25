import {  lazy,useContext,useEffect,useRef,useState } from "react";
import img from '../img/unsplash/brandonErlingerFord.jpg'
import { Box, Typography,Divider } from "@mui/material";
import TextContent from "../components/TextContent";
import TemplateSectionContext from "../context/TemplateSectionContext";
import SideBar from "../components/SideBar";
import PageScrollableContext from "../context/PageScrollableContext";
import  Scrollbar  from "smooth-scrollbar";
 
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
  const ref=useRef(null)
  const {scrollEl} = useContext(PageScrollableContext)
  const scrollbar = Scrollbar.init(scrollEl);
  const [state,setState]=useState(null)
 

  return (
    <Box className="flex flex-col items-center justify-start w-full h-full  box-border   bg-[#ffffff]">
      {/* title */}
      <Box className=" w-full h-[28rem] box-border  relative  pb-16   flex flex-col  justify-center items-end bg-inherit    border-thiner">
        <Box className=" box-border h-fit w-fit z-[8]   absolute top-[8rem]  right-[4rem]">
            

          <TextContent
            title={
              <Typography
                variant="subtitle1"
                className=" font-ukraine-light  text-[3.3rem] tracking-tighter normal-case indent-48 box-border leading-[4rem] text-black pointer-events-none text-left  border-thiner"
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

          <span className="font-ukraine-light capitalize text-neutral-500/70 tracking-tight text-xs absolute  border-thiner -top-[1.3rem] left-0 cursor-default">
            content
          </span>
        </Box>
        <Box className="absolute  border-thiner  top-[30rem] left-12 w-fit h-full bg-red-300 ">

          <img src={img} alt="" className="object-cover z-[5]  h-[45rem] w-[40rem] box-border   border-thiner" />
           <span className="font-ukraine-light capitalize text-neutral-500/70 tracking-tight text-xs absolute -top-[1.3rem] -right-0 cursor-default">
            Brandon Erlinger-Ford
  </span>
          
        </Box>

      </Box>

      <Box className="flex  items-start justify-center w-full h-fit min-h-[100vh] mt-[60rem]">
      
          {/* <SideBar></SideBar> */}
          
       
        {/* main content */}
        <Box className="w-full h-full  box-border px-12 pb-[20rem]  ">
         
          <Box className="space-y-5 w-full box-border   ">
            {/* space-y-12 between siblings */}
            {templateSections.map((item, id) => (
              // divided per category

              <Box
                className="box-border w-full  h-full scrollMargin flex flex-col items-start  justify-start  "
                key={id}
                data-id={id}
                ref={storeRef}
              >
                {/* <TextContent title={
                  <Typography variant="body1" className="font-ukraine-light text-[1.3rem]">{item.title}</Typography>
                }></TextContent> */}

                {/* <ArticleBlock
                  article={item}
                  titleStyle="text-[1.2rem] font-ukraine-light"
                  view={item?.refView}
                  id={id}
                >
                  
                  {item.child?.map((childNode, idx) => (
                    <Box key={idx} className="box-border my-32 w-full ">
                      my-12 between each child nodes
                      <ArticleBlock
                        article={childNode}
                        titleFontSize="text-[1.1rem]"
                      />
                    </Box>
                  ))}
                </ArticleBlock>
                <Divider variant='fullWidth' className="h-[1px] bg-[#1c1c1d] w-full mx-auto mt-2"></Divider> */}
              </Box>
            ))}
          </Box>
          {/* main content here */}
          {/* space-y-12 between title and child */}
        </Box>
      </Box>
    </Box>
  );
};

export default Templates;
// https://wemakefab.com/journal/gs-project-crm
