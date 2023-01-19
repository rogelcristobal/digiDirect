import React, { useRef, useContext, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import {
  theme,
  nightOwl,
  oceanBlue,
  aquaBlue,
  levelUp,
} from "@codesandbox/sandpack-themes";
import { useElementDimension } from "../hooks/useElementDimension";
import CodeMenuContext from "../context/CodeMenuContext";
import { Box,Typography } from "@mui/material";
const CodeBlock = ({text, content, handleCopy, copyState, id }) => {
  const container = useRef(null);

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

      size: "13.25px",
      lineHeight: "19px",
    },
  };

  return (
    <Box className="space-y-7 py-7  box-border">
      <Typography
        variant="body1"
        className="text-lg font-bold text-gray-800 font-plus"
      >
        {text}
      </Typography>
      <SandpackProvider
        theme={theme}
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
          className="box-border flex items-center justify-center w-full  relative     "
        >
          <SandpackCodeViewer
            // showLineNumbers
            className="h-fit border-none font-ukraine-regular min-h-[4.3rem] w-full px-2     box-border "
            wrapContent
          />
        </SandpackLayout>
      </SandpackProvider>
    </Box>
  );
};

export default CodeBlock;

// https://f36.contentful.com/components/button-group
