import { createContext, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import template from "../template/template";
import CodeBlock from "../components/CodeBlock";
import { Box, Typography } from "@mui/material";
import TextContent from "../components/TextContent";

const TemplateSectionContext = createContext();

export const TemplateSectionProvider = ({ children }) => {
  const pageCategoryRef = useRef([]);
  pageCategoryRef.current = [];
  const storeRef = (element) => {
    if (element && !pageCategoryRef.current.includes(element)) {
      pageCategoryRef.current.push(element);
      // console.log(element)
    }
  };
  

  const {
    inTheBoxMarkup,
    specsMarkup,
    descriptionSimple,
    specsMarkupCategorized,
    descriptionBest,
    descriptionKit,
    seoMetaTitle,
    seoMetaKeyword,
    seoMetaDescription,
    shortDescription,
    shortDescriptionKit,
    bundleInTheBox,
  } = template();

  const [inTheBoxRef, inTheBoxState] = useInView({ threshold: 0.2 });
  const [specsRef, specsState] = useInView({ threshold: 0.3 });
  const [descriptionRef, descriptionState] = useInView({ threshold: 0.1 });
  const [shortDescriptionRef, shortDescriptionState] = useInView({
    threshold: 0.3,
  });
  const [seoRef, seoState] = useInView({ threshold: 0.4 });

 
  return (
    <TemplateSectionContext.Provider
      value={{  pageCategoryRef, storeRef }}
    >
      {children}
    </TemplateSectionContext.Provider>
  );
};

export default TemplateSectionContext;
