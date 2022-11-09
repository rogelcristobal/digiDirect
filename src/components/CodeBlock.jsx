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
    surface1: "#ffffff",
    surface2: "#EFEFEF",
    surface3: "#F3F3F3",
    clickable: "#808080",
    base: "#323232",
    disabled: "#C5C5C5",
    hover: "#4D4D4D",
    accent: "#0971F1",
    error: "#ff453a",
    errorSurface: "#ffeceb"
  },
  syntax: {
    plain: "#151515",
    comment: {
      color: "#999",
      fontStyle: "italic"
    },
    keyword: "#0971F1",
    tag: "#d28cf6",
    punctuation: "#3B3B3B",
    definition: "#042d60",
    property: "#0971F1",
    static: "#FF453A",
    string: "#bf5af2"
  },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
      size: "13px",
      lineHeight: "20px",
      
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
        className="box-border cursor-pointer  rounded-lg flex items-center justify-center w-full   relative"
      >
        <SandpackCodeViewer
           // styles for the code
          className="h-fit  min-h-[4.5rem] w-full tracking-wide px-4 py-1   font-medium box-border "
          wrapContent
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
