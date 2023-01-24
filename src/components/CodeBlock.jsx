import React, { useRef, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import { FiClipboard, FiCode } from "react-icons/fi";
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
    plain: "#151515",
    comment: {
      color: "#999999",
      fontStyle: "italic"
    },
    keyword: "#121213",
    tag: "#151515",
    punctuation: "#3B3B3B",
    definition: "#151515",
    property: "#151515",
    static: "#151515",
    string: "#151515"
  },
    // font: {
    //   body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

    //   mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',

    //   size: "13.40px",
    //   lineHeight: "19px",
    // },
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
    setHoverState(!hover);
  };
  return (
    <Box className="space-y-4  py-7  box-border">
      {text && (
        <Typography variant="body1" className="text-lg font-semibold  font-plus">
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
          className="box-border flex items-center justify-center w-full  relative  rounded-none "
        >
          <SandpackCodeViewer
            // showLineNumbers
            onMouseEnter={hoverBlock}
            onMouseLeave={hoverBlock}
            className="h-fit border-none  min-h-[4.3rem] w-full px-2 py-1    box-border "
            wrapContent
          />
          <AnimatePresence>
            <motion.div
              className="absolute top-1.5 right-1.5  box-border  w-fit h-fit      space-y-2 "
              animate={{ opacity: hover ? 1 : 0 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              <IconButton
                onClick={handleToggleCopyToggle}
                className={` 
              } w-fit h-fit  box-border cursor-pointer p-2 rounded-md grid place-content-center text-[0.9rem]  text-neutral-500 hover:text-white bg-neutral-400/10 `}
              >
                <FiClipboard />
              </IconButton>
              {content.styles ? (
                <IconButton
                  onClick={handleToggleCopyToggle}
                  className={` 
              } w-fit h-fit  box-border cursor-pointer p-2 rounded-md grid place-content-center text-[0.9rem] bg-gray-400/10 text-neutral-500    `}
                >
                  <FiCode />
                </IconButton>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </SandpackLayout>
      </SandpackProvider>
    </Box>
  );
};

export default CodeBlock;

// https://f36.contentful.com/components/button-group
