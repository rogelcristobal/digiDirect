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

  const mouseEnterHover = () => {
    setHoverState((prev) => (prev = !hoverState));
  };
  const underlineAnimation = {
    animate: {
      ...(hoverState ? { width: "100%" } : { width: "0%" }),
    },
  };

  const addZeroToSingleDigit = (input) => {
    const number = (input += 1);
    if (number < 9) return "0" + number;
    else return number;
  };

  return (
    <Box className="flex flex-col items-center justify-start w-full container h-full  box-border  mx-auto ">
      {/* title */}
      <Box className=" w-full h-[25rem] box-border 	     flex flex-col  justify-center items-end   ">
        <Box className=" box-border h-fit w-fit z-[8]   absolute top-[8rem]  right-[4rem]">
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

          <span className="font-ukraine-regular capitalize text-neutral-900 tracking-tight text-[0.7rem] absolute   -top-[1.3rem] left-0 cursor-default">
            content
          </span>
        </Box>
      </Box>




        {/* main content */}
      <Box className="flex  items-start justify-center w-full h-fit min-h-[100vh] mt-[3rem] mb-[30rem] box-border ">
        <Box className="w-full h-full  box-border px-0 pb-[20rem] space-y-2 ">
          {/* number */}
          <Typography variant="body1" className=" text-[7rem] font-ukraine-regular tracking-tight">{addZeroToSingleDigit(templateSections.length)}</Typography>
          <Divider variant="fullWidth" className="bg-black h-[1px] relative ">
            <span className="font-ukraine-regular  text-neutral-900 tracking-tight text-[0.7rem] absolute right-52 -top-7">digiDirect</span>

            <span className="font-ukraine-regular capitalize text-neutral-900 tracking-tight text-[0.7rem] absolute right-0 -top-7">templates</span>
          </Divider>
         
         
         {/* items */}
          <Box className="space-y-4 w-full box-border h-full  ">
            {/* space-y-12 between siblings */}
            {templateSections.map((item, id) => (
              // divided per category
              <Box
                className="box-border w-full   h-auto min-h-[12rem]  grid grid-cols-11  relative"
                key={id}
                data-id={id}
                ref={storeRef}
              >

                {/* category / title */}
                <Box className="box-border  py-[0.9rem]  h-full   -full col-span-4 overflow-y-auto ">
                  <TextContent
                    sx=""
                    title={
                      <div className="flex h-full items-center gap-2 ">
                        <Typography
                          variant="body1"
                          className="font-ukraine-regular   w-fit text-[1.2rem] tracking-tight h-full"
                        >
                          {addZeroToSingleDigit(id)}.
                        </Typography>

                        <Typography
                          variant="body1"
                          className="font-ukraine-regular  leading-[3.2rem] w-full  text-[1.2rem] tracking-tight "
                        >
                          {item.title}.
                        </Typography>
                      </div>
                    }
                  ></TextContent>
                </Box>
                
                {/* content / snippet */}
                <Box className="box-border  py-[0.9rem]  h-full flex items-start  col-span-6 col-start-5 ">
                  <ArticleBlock
                    article={item} 
                    view={item?.refView}
                    id={id}
                  >
                    {item.child?.map((childNode, idx) => (
                        <LinkBtn2 key={idx} title={childNode.title} />
                     
                    ))}
                  </ArticleBlock>
                </Box>

                <Divider variant="fullWidth" className="bg-black h-[1px] absolute -bottom-2 left-0 w-full"></Divider>
                 
         
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
//https://wearemotto.com/
