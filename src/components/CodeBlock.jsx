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
    surface1: "#011627",
    surface2: "#243b4c",
    surface3: "#112331",
    clickable: "#6988a1",
    base: "#808080",
    disabled: "#4D4D4D",
    hover: "#c5e4fd",
    accent: "#c5e4fd",
    error: "#ffcdca",
    errorSurface: "#811e18"
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
    tag: "#5A9AE6",
    punctuation: "#7fdbca",
    definition: "#82aaff",
    property: {
      color: "#addb67",
      fontStyle: "italic"
    },
    static: "#f78c6c",
    string: "#ecc48d"
  },
    // light
    // colors: {
    //   surface1: "white",
    //   surface2: "#EBEDF0",
    //   surface3: "#e4e7eb",
    //   clickable: "#737373",
    //   base: "#323232",
    //   disabled: "#C5C5C5",
    //   hover: "#1f2933",
    //   accent: "#2e7692",
    // },

    // syntax: {
    //   plain: "#151515",
    //   comment: {
    //     color: "#A7B6C2",
    //     fontStyle: "italic",
    //   },
    //   keyword: "#1A56DB",
    //   tag: "#1A56DB",
    //   punctuation: "#394b59",
    //   definition: "#82d8d8",
    //   property: "#2e7692",
    //   static: "#1A56DB",
    //   string: "#1992D4",
    // },

    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',

      size: "14px",
      lineHeight: "21px",
    },
  };

  const tag = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
  ${snippet?.tags}
  </body>
</html>
  `;
  return (
    <SandpackProvider
      theme={theme}
      template="react"
      
      customSetup={{
        entry: "index.css",
      }}
      files={{
        "/index.html": {
          code: snippet?.tags,
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
      <SandpackLayout className="box-border  rounded-lg ">
        <SandpackCodeViewer
          className="h-fit  min-h-[4.5rem]   px-4 py-2 box-border rounded-none" // styles for the code viewer itself
          // additionalLanguages={[
          //   {
          //     name: "html",
          //     extensions: ["html"],
          //     language: html(),
          //   },
          //   {
          //     name: "css",
          //     extensions: ["css"],
          //     language: css(),
          //   },
          // ]}
          // showTabs
          // showLineNumbers
          // showInlineErrors
          wrapContent
          
          
          
        />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default CodeBlock;
