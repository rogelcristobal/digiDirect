import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { amethyst} from '@codesandbox/sandpack-themes'

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
  const theme={
   colors: {
    surface1: "#000000",
    surface2: "#0a0a23",
    surface3: "#3b3b4f",
    clickable: "#dfdfe2",
    base: "#ffffff",
    disabled: "#858591",
    hover: "#ffffff",
    accent: "#a26cd6",
    error: "#ffffff",
    errorSurface: "#3b3b4f"
  },
   syntax: {
    plain: "#FFFFFF",
    comment: {
      color: "#757575",
      fontStyle: "italic"
    },
    keyword: "#4a90e2",
    tag: "#7199c7",
    punctuation: "#ffffff",
    definition: "#b7d3f3",
    property: "#4a90e2",
    static: "#5d04a7",
    string: "#dbe3ec"
  },
  font: {
    body:  "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    mono: "\"Fira Mono\", \"DejaVu Sans Mono\", Menlo, Consolas, \"Liberation Mono\", Monaco, \"Lucida Console\", monospace",
    size: "12px",
    lineHeight: "20px"
  }
}

  
  // animatin

  return (
   
    

    <SandpackProvider
      theme={theme}
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
           className="h-fit  min-h-[4.5rem] w-full tracking-wide px-3 py-0  font-plus font-medium box-border text-[0.9rem]"
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
