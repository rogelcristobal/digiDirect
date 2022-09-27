import { useState, useRef, useContext } from "react";
import { Box } from "@mui/material";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import CodeSnippetComponent from "../components/CodeSnippetComponent";
import template from "../template/template";
import NavScrollContext from "../context/NavScrollContext";
import { useEffect } from "react";
import useScrollRefHook from "../hooks/useScrollRefHook";
const ImageConverter = () => {
  const { inTheBoxMarkup, specsMarkup, descriptionSimple,descriptionBest } = template();

  const { setState: setScrollPos } = useContext(NavScrollContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    const handleScroll = () => {
      let position = element.scrollTop;
      setScrollPos(position);
    };
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
      setScrollPos(0);
    };
  }, []);

  return (
    <Box className="h-full box-border flex items-start gap-3 rounded-lg pt-[4.5rem]   w-full ">
      <Box
        ref={scrollRef}
        className="h-full  overflow-auto w-full  flex  items-start justify-start box-border"
      >
        <Box className="w-full max-w-4xl h-auto box-border px-16  pt-12 pb-36 space-y-20">
          {/* page title */}
          <Box className="pb-16  w-full">
            <PageTitle
              category="Tools & API's"
              title="ImageConverter listing"
              subTitle="Convert Image format to JPG"
            />
          </Box>
          
   
         
        </Box>
        <Box
          className="h-72 w-72  border-thin sticky top-0 mt-16 flex flex-col items-start justify-start
        "
        ></Box>
      </Box>

      {/* sidepage nav */}
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default ImageConverter;
