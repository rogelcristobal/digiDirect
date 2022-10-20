import React from "react";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import { html } from "@codemirror/lang-html";

import { css } from "@codemirror/lang-css";
const CodeBlock = ({ snippet }) => {
  const theme = {
    colors: {
      surface1: "#151515", //canvas
      surface2: "transparent", //border
      surface3: "#2F2F2F", // ?
      clickable: "#999999",
      base: "#808080",
      disabled: "#4D4D4D",
      hover: "#C5C5C5",
      accent: "#90e86f",
      error: "#E1CFF8",
      errorSurface: "#b08df8",
    },

    syntax: {
      plain: "#f0fdaf",
      comment: {
        color: "#757575",
        fontStyle: "italic",
      },
      keyword: "#e5fd78",
      tag: "#f0fdaf",
      punctuation: "#ffffff",
      definition: "#eeeeee",
      property: "#90e86f",
      static: "#ffffff",
      string: "#dafecf",
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
      size: "13px",
      lineHeight: "20px",
    },
  };
  return (
    <SandpackProvider
      theme={theme}
      template="react"
      files={{
        "/index.html": {
          code: snippet?.tags,
          active: true,
          // readOnly: true,
        },
        "/styles.css": {
          code: snippet?.styles,
          hidden: snippet?.styles ? false : true,
        },
      }}
      options={{
        classes: {
          // "sp-layout":"bg-red-500 "
        },
      }}
    >
      <SandpackLayout className="box-border  rounded-none">
        <SandpackCodeViewer
          className="h-fit max-h-[25rem] min-h-[5rem] p-1 px-2 box-border rounded-none" // styles for the code viewer itself
          additionalLanguages={[
            {
              name: "html",
              extensions: ["html"],
              language: html(),
            },
            {
              name: "css",
              extensions: ["css"],
              language: css(),
            },
          ]}
          // showTabs
          // showLineNumbers
          showInlineErrors
          wrapContent
          readOnly
        />
       
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default CodeBlock;
