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
      surface1: "white",
      surface2: "#F3F3F3",
      surface3: "#e4e7eb",
      clickable: "#737373",
      base: "#323232",
      disabled: "#C5C5C5",
      hover: "#1f2933",
      accent: "#dbb8ff",
    },

    syntax: {
      plain: "#1F2933",
      comment: {
        color: "#A7B6C2",
        fontStyle: "italic",
      },
      keyword: "#1A56DB",
      tag: "#1A56DB",
      punctuation: "#394b59",
      definition: "#A23DAD",
      property: "#2e7692",
      static: "#1A56DB",
      string: "#1992D4",
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
      <SandpackLayout className="box-border  rounded-lg border-xl">
        <SandpackCodeViewer
          className="h-fit max-h-[25rem] min-h-[5rem]  pl-3 py-2 box-border rounded-none" // styles for the code viewer itself
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
