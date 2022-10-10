import SyntaxHighlighter from "react-syntax-highlighter";
import { Box, Paper, Snackbar, Alert, Button, IconButton } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { DiCss3Full } from "react-icons/di";
import Slide from "@mui/material/Slide";
import { BiCodeAlt } from "react-icons/bi";
import { useState } from "react";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AiOutlineCopy } from "react-icons/ai";
import { useRef, useEffect, useMemo } from "react";
const CodeBlock = ({ code ,lang}) => {
  const [styleVisibility, setStyleVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [blockSize, setBlockSize] = useState(0);
  const codeBlockRef = useRef(null);
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
    setBlockSize(codeBlockRef.current.clientHeight);
  });
  return (
    <Box
      onMouseEnter={() => setHoveringCode(true)}
      onMouseLeave={() => setHoveringCode(false)}
      ref={codeBlockRef}
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
        className={` w-full scrollbar-hide hover:scrollbar-default`}
        wrapLongLines={true}
        wrapLines={true}
        language={lang}
        style={tomorrowNight}
        // showLineNumbers={true}
        codeTagProps={{
          style: {
            fontFamily: "Hack",
            letterSpacing: "-0.025em",
            fontSize: "0.8rem",
          },
        }}
        customStyle={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "2rem",
          paddingRight: "4rem",
          borderRadius: " 0.75rem",
          overflowX: "hidden",
          boxSizing: "border-box",
          minHeight: "4rem",
          maxHeight: "25rem",
          margin: "0",
          display: blockSize === 64 && 'flex',
          alignItems: blockSize === 64 && 'center'

          
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
        className={`${blockSize === 64? 'top-1/2  -translate-y-1/2 ' :'top-2.5 '} right-3 box-border border-thin absolute  w-fit flex items-center justify-end space-x-3 rounded-lg transition-all ease-in-out duration-300 `}
      >
        <IconButton
          variant="contained"
          className={` capitalize text-lg  p-1.5   flex  rounded-lg  shadow-none font-normal  text-gray-300 border border-gray-500/50 border-solid cursor-pointer  `}
          onClick={handleCopy}
        >
          <AiOutlineCopy></AiOutlineCopy>
        </IconButton>

        {/* {code.styles && (
          <Paper
            variant="contained"
            className={`py-2.5 px-2.5   flex items-center  rounded-lg justify-center   transition-all ease-in-out duration-300   cursor-pointer ${
              !styleVisibility
                ? "text-sky-500 bg-[#f1f3f8] "
                : "text-sky-500 bg-[#f1f3f8] "
            }`}
            onClick={handleShowStyles}
          >
            {!styleVisibility ? (
              <DiCss3Full className="font-normal text-base" />
            ) : (
              <BiCodeAlt className="font-normal text-base" />
            )}
            
          </Paper>
        )} */}
      </Box>
    </Box>
  );
};

CodeBlock.defaultProps={
  lang:'css'
}

export default CodeBlock;
