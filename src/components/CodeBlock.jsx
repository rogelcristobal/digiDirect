import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { nightOwl} from '@codesandbox/sandpack-themes'

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
  
    // light
 
  // animatin

  return (
    <SandpackProvider
      theme={nightOwl}
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
        className="box-border cursor-pointer rounded-none  flex items-center justify-center w-full   relative "
      >
        <SandpackCodeViewer
           // styles for the code
          className="h-fit  min-h-[4.5rem] w-full tracking-wide px-3 py-0  font-plus font-medium box-border "
          wrapContent
          
          // showLineNumbers
        />
      </SandpackLayout>

      {/* btn container  (this will only show if a codeblock is present) */}
      {content?.snippet && (
        <Box className="absolute box-border right-2.5 top-2   h-fit  w-fit  bg-inherit   flex items-center justify-center space-x-2">
          <IconButton
            variant="contained"
            className="  transition-all duration-300 ease-in-out font-medium rounded-md   text-gray-500 hover:text-gray-400 normal-case py-2 px-2 relative"
            onClick={handleCopy}
          >
            <TbCopy className="text-lg" />
          </IconButton>
        </Box>
      )}
    </SandpackProvider>
  );
};

export default CodeBlock;

// https://f36.contentful.com/components/button-group
