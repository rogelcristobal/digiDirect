import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import { Box, IconButton, Typography } from "@mui/material";
import { TbCopy } from "react-icons/tb";
import { useElementDimension } from "../hooks/useElementDimension";
const CodeBlock = ({ snippet, handleCopy, copyState }) => {
  const container = useRef(null);
  const { width, height } = useElementDimension(container);
  const theme = {
    
  
    // light
   colors: {
    surface1: "#21252b",
    surface2: "transparent",
    surface3: "#f5f5f5",
    clickable: "#959da5",
    base: "#24292e",
    disabled: "#d1d4d8",
    hover: "#24292e",
    accent: "#24292e"
  },
   syntax: {
    plain: "#d6deeb",
    comment: {
      color: "#999999",
      fontStyle: "italic"
    },
    keyword: {
      color: "#c792ea",
      fontStyle: "italic"
    },
    tag: "#7fdbca",
    punctuation: "#7fdbca",
    definition: "#82aaff",
    property: {
      color: "#addb67",
      fontStyle: "italic"
    },
    static: "#f78c6c",
    string: "#ecc48d"
  },
  font: {
    body: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    mono:"\"Fira Mono\", \"DejaVu Sans Mono\", Menlo, Consolas, \"Liberation Mono\", Monaco, \"Lucida Console\", monospace",
    size: "14px",
    lineHeight: "22px"
  }
  };
  // animatin
  const variant = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    close: {},
  };

  return (
    <SandpackProvider
      theme={theme}
      template="react"
      customSetup={{
        entry: "index.css",
      }}
      files={{
        "/index.html": {
          code: snippet?.tags ? snippet.tags : snippet.text,
          active: true,
          // readOnly: true,
        },
        //         "/styles.css": {
        //           code: `<styles>
        // ${snippet?.styles}
        // </styles>`,
        //           hidden: snippet?.styles ? false : true,
        //         },
      }}
      options={{
        classes: {
          // "sp-layout":"bg-red-500 "
        },
      }}
    >
      <SandpackLayout

        ref={container}
        className="box-border cursor-pointer flex items-center justify-center w-full   relative"
      >
        <SandpackCodeViewer
          
          className="h-fit  min-h-[4.5rem] w-full  px-4 py-1  box-border " // styles for the code 
          // showTabs
          // showLineNumbers
          // showInlineErrors
          wrapContent
        />
      </SandpackLayout>
			<motion.div
              variants={variant}
              animate={copyState ? "open" : "close"}
              className="absolute bg-blue-500 top-0 rounded-lg h-0 z-10"
            ></motion.div>
      {/* btn container  (this will only show if a codeblock is present) */}
      {snippet && (
        <Box className="absolute box-border right-2 top-2   h-fit  w-fit  bg-inherit   flex items-center justify-center space-x-2">
         
			
          <IconButton
            variant="contained"
            className="  transition-all duration-300 ease-in-out font-medium rounded-md  bg-transparent  text-gray-400 hover:text-white normal-case h-8 px-3 relative"
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
