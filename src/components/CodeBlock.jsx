import React, { useRef, useContext, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import { theme, nightOwl, oceanBlue, githubLight } from "@codesandbox/sandpack-themes";
import { useElementDimension } from "../hooks/useElementDimension";
import CodeMenuContext from "../context/CodeMenuContext";
const CodeBlock = ({ content, handleCopy, copyState, id }) => {
  const container = useRef(null);

  const theme = {
    colors: {
    surface1: "#f9f9f9",
    surface2: "#44475a",
    surface3: "#44475a",
    clickable: "#6272a4",
    base: "#f8f8f2",
    disabled: "#6272a4",
    hover: "#f8f8f2",
    accent: "#bd93f9",
    error: "#f8f8f2",
    errorSurface: "#44475a"
  },
  syntax: {
    plain: " rgb(229 231 235)",
    comment: {
      color: "#6272a4",
      fontStyle: "italic"
    },
    keyword: "#ff79c6",
    tag: "#6197d6",
    punctuation: "#6197d6",
    definition: "#f8f8f2",
    property: "#D1D1D1",
    static: "#bd93f9",
    string: "#6eb9df"
  },
    font: {
      body:  "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",

      mono: "\"Fira Mono\", \"DejaVu Sans Mono\", Menlo, Consolas, \"Liberation Mono\", Monaco, \"Lucida Console\", monospace",
 
      size: "13.5px",
      lineHeight: "21px",
    },
  };

  const theme2={
     colors: {
    surface1: "#f9f9f9",
    surface2: "#F3F3F3",
    surface3: "#f5f5f5",
    clickable: "#959da5",
    base: "#24292e",
    disabled: "#d1d4d8",
    hover: "#24292e",
    accent: "#24292e"
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
      fontStyle: "normal"
    }
  },
    font: {
      body:  "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",

      mono: "\"Fira Mono\", \"DejaVu Sans Mono\", Menlo, Consolas, \"Liberation Mono\", Monaco, \"Lucida Console\", monospace",
 
      size: "13px",
      lineHeight: "21px",
    },
  }

  return (
    <SandpackProvider
      theme={nightOwl}
      template="react"
      customSetup={{
        entry: "index.css",
      }}
      files={{
        "/index.html": {
          code: content?.tags
            ? content?.tags
            : content?.text,
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
        className="box-border flex items-center justify-center w-full  relative  border-none shadow-sm rounded-lg "
      >
        <SandpackCodeViewer
          // showLineNumbers
          className="h-fit border-none  min-h-[4.3rem] w-full px-4    box-border "
          wrapContent
        />
      </SandpackLayout>
      
    </SandpackProvider>
  );
};

export default CodeBlock;

// https://f36.contentful.com/components/button-group
