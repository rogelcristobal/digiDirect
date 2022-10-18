import SyntaxHighlighter from "react-syntax-highlighter";
import { Box } from "@mui/material";
import { useState, useMemo } from "react";
import { googlecode } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useRef, useEffect } from "react";
import React from "react";
export function Code({ code, lang, styleVisibility }) {
  const codeBlockContainer = useRef(null);

  // mui transition prop
  const [blockSize, setBlockSize] = useState(null);
  const checkBlockHeight = () => {
    setBlockSize(codeBlockContainer.current.clientHeight);
  };
  const blockMemo = useMemo(() => checkBlockHeight, [code]);
  useEffect(() => {
    blockMemo();
  }, [code]);

  return (
    <Box
      ref={codeBlockContainer}
      className="h-full w-full   box-border   relative "
    >
      {/* code block */}
      <SyntaxHighlighter
        // showLineNumbers={true}
        className={`  scrollbar-hide hover:scrollbar-default box-border rounded-none font-[500] border-thin`}
        wrapLongLines={true}
        wrapLines={true}
        language={lang}
        style={googlecode}
        codeTagProps={{
          style: {
            fontFamily: "Sans-serif ",
            // letterSpacing: "0em",
            fontSize: "0.85rem",
            lineHeight: "1rem",
          },
        }}
        customStyle={{
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          paddingLeft: "2rem",
          // borderRadius: " 0.65rem",
          padding: "1rem",
          // overflowX: "hidden",
          minHeight: "5rem",
          maxHeight: "20rem",
          height: "fit",
          margin: "0",
          display: blockSize === 80 && "flex",
          alignItems: blockSize === 80 && "center",
        }}
        // lineNumberContainerStyle ={{}}
        lineNumberStyle={{
          fontSize: "0.7rem",
          // marginRight:'1rem',
          // marginLeft:'0.3rem',

          color: "rgb(107, 114, 128)",
        }}
      >
        {styleVisibility
          ? code?.styles
            ? `${code.styles}${code.tags}`
            : code.tags
          : code.tags}
      </SyntaxHighlighter>
      {/* <p className="absolute -top-2 text-blue-400">{blockSize}</p> */}
    </Box>
  );
}

Code.defaultProps = {
  lang: "css",
};

export const CodeBlock = React.memo(Code);
