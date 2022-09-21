import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Box, Paper, Typography } from "@mui/material";
import {
  AiOutlineCopy,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { useState } from "react";
const CodeBlock = ({ code, handleCopy }) => {
  const [styleVisibility, setStyleVisibility] = useState(false);
  const handleShowStyles = () => {
    setStyleVisibility((prev) => (prev = !prev));
  };

  return (
    <Box className="h-full w-full relative box-border">
      <SyntaxHighlighter
        wrapLongLines={true}
        wrapLines={true}
        language="css"
        style={nightOwl}
        // showLineNumbers={true}
        customStyle={{
          paddingTop: "0.7rem",
          paddingBottom: "1rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          borderRadius: "15px",
          overflowX: "hidden",
          boxSizing: "border-box",
        }}
      >
        {styleVisibility
            ? code?.styles? `${code.styles}${code.tags}`:code.tags
          : code.tags}
      </SyntaxHighlighter>
      <Box className="absolute bg-transparent top-3 right-3 flex items-center justify-around space-x-2">
        <Paper
          variant="outlined"
          className={`p-2  bg-inherit border-neutral-600 flex items-center justify-center rounded-lg text-neutral-300 cursor-pointer gap-3 `}
          onClick={handleShowStyles}
        >
          {styleVisibility ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          <Typography variant="body2" className="text-xs capitalize ">
            {styleVisibility ? "view styles" : "hide styles"}
          </Typography>
        </Paper>
        <Paper
          variant="outlined"
          className={`p-2 text-sm  bg-inherit border-neutral-600 flex items-center justify-center rounded-lg text-neutral-300 cursor-pointer gap-3 `}
          onClick={handleCopy}
        >
          <AiOutlineCopy />
        </Paper>
      </Box>
    </Box>
  );
};

export default CodeBlock;
