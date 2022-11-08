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
const CodeBlock = ({ content, handleCopy, copyState }) => {
  const container = useRef(null);
  const { width, height } = useElementDimension(container);
  const theme = {
    // light
    colors: {
      surface1: "#191c20",
      surface2: "transparent",
      surface3: "#f5f5f5",
      clickable: "#959da5",
      base: "#24292e",
      disabled: "#d1d4d8",
      hover: "#24292e",
      accent: "#24292e",
    },
    syntax: {
      plain: "#d4d4d8",
      comment: {
        color: "#999999",
        fontStyle: "italic",
      },
      keyword: {
        color: "#c792ea",
        fontStyle: "italic",
      },
      tag: "#6b7280",
      punctuation: "#6b7280",
      definition: "#82aaff",
      property: {
        color: "#06b6d4",
        fontStyle: "italic",
      },
      static: "#f78c6c",
      string: "#7dd3fc  ",
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
      size: "14px",
      lineHeight: "21px",
      
    },
  };
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
        className="box-border cursor-pointer rounded-2xl  flex items-center justify-center w-full   relative"
      >
        <SandpackCodeViewer
           // styles for the code
          className="h-fit  min-h-[4.5rem] w-full tracking-wide px-4 py-1  font-medium box-border "
          wrapContent
        />
      </SandpackLayout>

      {/* btn container  (this will only show if a codeblock is present) */}
      {content?.snippet && (
        <Box className="absolute box-border right-2.5 top-2   h-fit  w-fit  bg-inherit   flex items-center justify-center space-x-2">
          <IconButton
            variant="contained"
            className="  transition-all duration-300 ease-in-out font-medium rounded-lg  bg-gray-700/20 hover:bg-[#2a3037] text-gray-400 hover:text-white normal-case py-2 px-2 relative"
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
