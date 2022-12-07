import React, { useRef, useContext ,useState} from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import { aquaBlue } from "@codesandbox/sandpack-themes";
import { useElementDimension } from "../hooks/useElementDimension";
import CodeMenuContext from "../context/CodeMenuContext";
const CodeBlock = ({ content, handleCopy, copyState }) => {
  const container = useRef(null);

  const theme={
    colors: {
    surface1: "#f7f7f7",
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
    body: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    mono:"\"Fira Mono\", \"DejaVu Sans Mono\", Menlo, Consolas, \"Liberation Mono\", Monaco, \"Lucida Console\", monospace",
    size: "13px",
    lineHeight: "20px"
  }
  }
  const{setModalState}=useContext(CodeMenuContext) 
  const handleclick=()=>{
    setModalState(true)
  }
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
          onClick={handleclick}
          className="box-border cursor-pointer  flex items-center justify-center w-full rounded-lg  relative "
          >
          <SandpackCodeViewer
            // styles for the code
            className="h-fit  min-h-[4.5rem] w-full px-3 py-0 font-medium  box-border text-[0.840rem]"
            wrapContent
            />
        </SandpackLayout>
      </SandpackProvider>
  );
};

export default CodeBlock;

// https://f36.contentful.com/components/button-group
