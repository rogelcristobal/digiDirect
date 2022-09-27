import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  Box,
  Paper,
  Typography,
  Snackbar,
  Alert,
  Zoom
} from "@mui/material";
import Tooltip,{ tooltipClasses } from '@mui/material/Tooltip' 
import Slide from "@mui/material/Slide";

import {
  AiOutlineCopy,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { useState, useRef } from "react";
const CodeBlock = ({ code }) => {
  const [styleVisibility, setStyleVisibility] = useState(false);
  const [open, setOpen] = useState(false);

  const handleShowStyles = () => {
    setStyleVisibility((prev) => (prev = !prev));
    handleClose();
  };
  const mergeTagsAndStyles = ({ tags, styles }) => {
    if (!styles) {
      return tags;
    } else {
      return styles + tags;
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(mergeTagsAndStyles(code));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  // mui transition prop
  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <Box className="h-full w-full relative box-border">
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        direction="left"
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: "100%",
            "& .MuiAlert-icon": {
              color: "white",
              fontSize: "0.875rem",
            },
          }}
          className="bg-blue-500 text-white text-xs flex items-center"
        >
          Copied to Clipboard!
        </Alert>
      </Snackbar>
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
          minHeight: !code ? "12rem" : "fit",
          maxHeight: "25rem",
        }}
      >
        {styleVisibility
          ? code?.styles
            ? `${code.styles}${code.tags}`
            : code.tags
          : code.tags}
      </SyntaxHighlighter>
      <Box className="absolute bg-transparent top-3 right-4 flex items-center justify-around space-x-2">
        {code.styles && (
          <Paper
            variant="outlined"
            className={`p-2  bg-inherit border-neutral-600 flex items-center justify-center rounded-lg text-neutral-300 cursor-pointer gap-3 `}
            onClick={handleShowStyles}
          >
            {!styleVisibility ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            <Typography variant="body2" className="text-xs capitalize ">
              {!styleVisibility ? "view styles" : "hide styles"}
            </Typography>
          </Paper>
        )}
      
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
