import React, { useRef, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import { FiClipboard, FiCode   } from "react-icons/fi";
import { Box, IconButton, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
const CodeBlock = ({ text, content, handleCopy, copyState, id }) => {
  const container = useRef(null);
  const theme2 = {
    colors: {
      surface1: "#1f2937",
      surface2: "#243b4c",
      surface3: "#112331",
      clickable: "#6988a1",
      base: "#808080",
      disabled: "#4D4D4D",
      hover: "#c5e4fd",
      accent: "#c5e4fd",
      error: "#ffcdca",
      errorSurface: "#811e18",
    },
    syntax: {
      plain: "#d6deeb",
      comment: {
        color: "#999999",
        fontStyle: "italic",
      },
      keyword: {
        color: "#c792ea",
        fontStyle: "italic",
      },
      tag: "#7fdbca",
      punctuation: "#7fdbca",
      definition: "#82aaff",
      property: {
        color: "#addb67",
        fontStyle: "italic",
      },
      static: "#f78c6c",
      string: "#ecc48d",
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',

      size: "13.25px",
      lineHeight: "20px",
    },
  };

  const theme = {
    colors: {
      surface1: "#f1f3f4",
      surface2: "#EFEFEF",
      surface3: "#F3F3F3",
      clickable: "#808080",
      base: "#323232",
      disabled: "#C5C5C5",
      hover: "#4D4D4D",
      accent: "#0971F1",
      error: "#ff453a",
      errorSurface: "#ffeceb",
    },
    syntax: {
      keyword: "#d73a49",
      property: "#005cc5",
      plain: "#24292e",
      static: "#032f62",
      string: "#032f62",
      definition: "#6f42c1",
      punctuation: "#24292e",
      tag: "#22863a",
      comment: {
        color: "#6a737d",
        fontStyle: "normal",
      },
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',

      size: "13.40px",
      lineHeight: "19px",
    },
  };
  const mergeTagsAndStyles = ({ tags, styles }) => {
    if (!styles) {
      return tags;
    } else {
      return `<style>${styles}</style>` + tags;
    }
  };
  const handleToggleCopyToggle = () => {
    navigator.clipboard.writeText(mergeTagsAndStyles(content));
  };
  const [hover, setHoverState] = useState(false);
  const hoverBlock = () => {
    setHoverState((prev) => (prev = !hover));
  };
  return (
    <Box className="space-y-4   box-border">
      {text && (
        <Typography variant="body1" className="text-lg font-bold  font-plus">
          {text}
        </Typography>
      )}
      <SandpackProvider
        theme={theme2}
        template="react"
        customSetup={{
          entry: "index.css",
        }}
        files={{
          "/index.html": {
            code: content?.tags ? content?.tags : content?.text,
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
          onMouseEnter={hoverBlock}
          onMouseLeave={hoverBlock}
          className="box-border flex items-center justify-center w-full  relative  rounded-lg medium-box-divider"
        >
          <SandpackCodeViewer
            // showLineNumbers
            className="h-fit border-none font-ukraine-regular min-h-[4.3rem] w-full px-3 py-3    box-border "
            wrapContent
          />
          <AnimatePresence>
           <motion.div
              className="absolute top-2 right-2 p-2 box-border  w-fit h-fit bg-[#2c3643]    rounded-lg space-y-2 "
              animate={{opacity:hover? 1 : 0}}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              
               <IconButton
              
              onClick={handleToggleCopyToggle}
              className={` 
              } w-fit h-fit  box-border cursor-pointer p-2 rounded-md grid place-content-center text-[0.9rem] bg-gray-400/10 text-gray-400 hover:text-white hover:bg-neutral-200/20 `}
            >
              <FiClipboard />
            </IconButton>
            {content.styles?<IconButton
              
              onClick={handleToggleCopyToggle}
              className={` 
              } w-fit h-fit  box-border cursor-pointer p-2 rounded-md grid place-content-center text-[0.9rem] bg-gray-400/10 text-gray-400 hover:text-white hover:bg-neutral-200/20   `}
            >
              <FiCode />
            </IconButton>:null}
             
              
            </motion.div>
          </AnimatePresence>
        </SandpackLayout>
      </SandpackProvider>
    </Box>
  );
};

export default CodeBlock;

// https://f36.contentful.com/components/button-group
