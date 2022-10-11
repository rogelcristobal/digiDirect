import SyntaxHighlighter from "react-syntax-highlighter";
import { Box, Paper, Snackbar, Alert, Button, IconButton } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { DiCss3Full } from "react-icons/di";
import Slide from "@mui/material/Slide";
import { BiCodeAlt } from "react-icons/bi";
import { useState } from "react";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdContentCopy } from "react-icons/md";
import { useRef, useEffect, useMemo } from "react";
import { hover } from "@testing-library/user-event/dist/hover";
const CodeBlock = ({ code, lang }) => {
  const [styleVisibility, setStyleVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [blockSize, setBlockSize] = useState(0);
  const codeBlockContainer = useRef(null);
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
  const [hoverCode, setHoveringCode] = useState(false);

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
  useEffect(() => {
    setBlockSize(codeBlockContainer.current.clientHeight);
  });

  return (
    <Box
      onMouseEnter={() => setHoveringCode(true)}
      onMouseLeave={() => setHoveringCode(false)}
      ref={codeBlockContainer}
      className="h-full w-full  box-border   relative flex flex-col items-end justify-center "
    >
      <Snackbar
        open={open}
        autoHideDuration={1300}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
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
          className="bg-blue-500 text-white text-xs flex items-center "
        >
          Copied to Clipboard!
        </Alert>
      </Snackbar>

      {/* code block */}
      <SyntaxHighlighter
        className={` w-full scrollbar-hide hover:scrollbar-default  font-medium`}
        wrapLongLines={true}
        wrapLines={true}
        language={lang}
        style={stackoverflowDark}
        codeTagProps={{
          style: {
            fontFamily: "Source Code pro ",
            letterSpacing: "-0.025em",
            fontSize: "0.85rem",
            lineHeight: "1.25rem",
            
          },
        }}
        customStyle={{
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "2rem",
          paddingRight: "4rem",
          // color: "rgb(212 212 212)",
          // color:'black',
          // borderRadius: " 0.75rem",
          overflowX: "hidden",
          boxSizing: "border-box",
          minHeight: "4rem",
          maxHeight: "25rem",
          height: "fit",
          margin: "0",
          display: blockSize === 64 && "flex",
          alignItems: blockSize === 64 && "center",

          // backgroundColor:'inherit'
        }}
      >
        {styleVisibility
          ? code?.styles
            ? `${code.styles}${code.tags}`
            : code.tags
          : code.tags}
      </SyntaxHighlighter>

      {/* button container */}
      <Box
        className={`${
          blockSize === 64 ? "top-1/2  -translate-y-1/2 " : "top-2.5 "
        } right-3 box-border border-thin absolute ${
          hoverCode ? "flex" : "hidden"
        } w-fit  items-center justify-end space-x-3 rounded-lg transition-all ease-in-out duration-300 `}
      >
        {code.styles && (
          <IconButton
            variant="contained"
            className={` capitalize text-sm     flex  rounded-lg  shadow-none font-normal  text-gray-300 border border-gray-500/50 border-solid cursor-pointer text-gray-300`}
            onClick={handleShowStyles}
          >
            {!styleVisibility ? (
              <DiCss3Full className="font-normal text-base" />
            ) : (
              <BiCodeAlt className="font-normal text-base" />
            )}
          </IconButton>
        )}
        <IconButton
          variant="contained"
          className={` capitalize text-sm     flex  rounded-lg  shadow-none font-normal  text-gray-300 border border-gray-500/50 border-solid cursor-pointer  `}
          onClick={handleCopy}
        >
          <MdContentCopy></MdContentCopy>
        </IconButton>
      </Box>
    </Box>
  );
};

CodeBlock.defaultProps = {
  lang: "css",
};

export default CodeBlock;
