import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {oceanBlue} from '@codesandbox/sandpack-themes'

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import { Box, IconButton, Typography } from "@mui/material";
import { TbCopy } from "react-icons/tb";
import { useElementDimension } from "../hooks/useElementDimension";
const CodeBlock = ({ content, handleCopy, copyState }) => {
  const container = useRef(null);
  const { width, height } = useElementDimension(container);

  return (
    <SandpackProvider
      theme={oceanBlue}
      template="react"
      customSetup={{
        entry: "index.css",
      }}
      files={{
        "/index.html": {
          code: content?.snippet?.tags
          ? content?.snippet?.tags
            : content?.snippet?.text,
          active: true,
          // readOnly: true,
        },
        //         "/styles.css": {
          //           code: `<styles>
          // ${content?.snippet?.styles}
        // </styles>`,
        //           hidden: content?.snippet?.styles ? false : true,
        //         },
      }}
    >
      <SandpackLayout
        ref={container}
        // onClick={(e)=>alert( content?.title )}
        className="box-border cursor-pointer rounded-lg border-none  flex items-center justify-center w-full   relative "
        >
        <SandpackCodeViewer
           // styles for the code
           className="h-fit  min-h-[4.5rem] w-full  px-3 py-0  font-mono font-medium box-border text-[0.8rem]"
           wrapContent
           />
      </SandpackLayout>
    </SandpackProvider>
    
  );
};

export default CodeBlock;

// https://f36.contentful.com/components/button-group
