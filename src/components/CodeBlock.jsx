import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import { Box, IconButton, Typography } from "@mui/material";
import { MdContentCopy } from "react-icons/md";
import { useElementDimension } from "../hooks/useElementDimension";
const CodeBlock = ({ snippet, handleCopy, copyState }) => {
  const container = useRef(null);
  const { width, height } = useElementDimension(container);
  const theme = {
    // colors: {
    // 	surface1: "#011627",
    // 	surface2: "#243b4c",
    // 	surface3: "#112331",
    // 	clickable: "#6988a1",
    // 	base: "#808080",
    // 	disabled: "#4D4D4D",
    // 	hover: "#c5e4fd",
    // 	accent: "#c5e4fd",
    // 	error: "#ffcdca",
    // 	errorSurface: "#811e18",
    // },
    // syntax: {
    // 	plain: "#d6deeb",
    // 	comment: {
    // 		color: "#999999",
    // 		fontStyle: "italic",
    // 	},
    // 	keyword: {
    // 		color: "#c792ea",
    // 		fontStyle: "italic",
    // 	},
    // 	tag: "#5A9AE6",
    // 	punctuation: "#7fdbca",
    // 	definition: "#82aaff",
    // 	property: {
    // 		color: "#addb67",
    // 		fontStyle: "italic",
    // 	},
    // 	static: "#f78c6c",
    // 	string: "#ecc48d",
    // },
    // light
    colors: {
      surface1: "white",
      surface2: "#EBEDF0",
      surface3: "#e4e7eb",
      clickable: "#737373",
      base: "#323232",
      disabled: "#C5C5C5",
      hover: "#1f2933",
      accent: "#2e7692",
    },

    syntax: {
      plain: "#4b5563",
      comment: {
        color: "#A7B6C2",
        fontStyle: "italic",
      },
      keyword: "#1A56DB",
      tag: "#1A56DB",
      punctuation: "#394b59",
      definition: "#82d8d8",
      property: "#2e7692",
      static: "#1A56DB",
      string: "#1992D4",
    },

    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',

      size: "14px",
      lineHeight: "21px",
    },
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
        className="box-border border-xl flex items-center justify-center w-full   relative"
      >
        <SandpackCodeViewer
          className="h-fit  min-h-[4.5rem] w-full  px-4   box-border " // styles for the code 
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
        <Box className="absolute box-border right-1  bottom-1  p-2.5  h-fit  w-fit  bg-inherit   flex items-center justify-center space-x-2">
          {/* <Box className="absolute box-border right-[0rem]  -bottom-[calc(1.2rem + 0.75rem)]  px-0 py-2  h-fit  w-fit  bg-inherit   flex items-center justify-center space-x-4"> */}
			
          <IconButton
            variant="contained"
            className="  text-gray-800 transition-all duration-300 ease-in-out font-medium rounded-md  bg-white  border-lg  normal-case h-8 px-3 relative"
            onClick={handleCopy}
          >
            
            <MdContentCopy className="text-sm" />
            {/* <Typography className="text-xs font-medium">Copy</Typography> */}
          </IconButton>

          {!snippet?.text && (
            <IconButton
              variant="contained"
              className="  text-gray-800 transition-all duration-300 ease-in-out font-medium rounded-md  bg-white  border-lg  normal-case h-8 px-3 space-x-2"
              onClick={handleCopy}
            >
              {/* <MdContentCopy className="text-sm" /> */}
              <Typography className="text-xs font-medium">Preview</Typography>
            </IconButton>
          )}
        </Box>
      )}
    </SandpackProvider>
  );
};

export default CodeBlock;

// https://f36.contentful.com/components/button-group
