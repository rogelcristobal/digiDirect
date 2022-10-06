import SyntaxHighlighter from "react-syntax-highlighter";
import { Box, Paper, Snackbar, Alert } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { DiCss3Full } from "react-icons/di";
import Slide from "@mui/material/Slide";
import { FaClipboard } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { useState } from "react";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
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
    <Box className="h-full w-full  box-border  font-medium flex flex-col items-end justify-center ">
      <Snackbar
        open={open}
        autoHideDuration={1300}
        onClose={handleClose}
        anchorOrigin={{
          vertical:'bottom',
          horizontal:'right'
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
        className="scrollbar-hide hover:scrollbar-default w-full  "
        wrapLongLines={true}
        wrapLines={true}
        language="css"
        style={tomorrowNight}
        // showLineNumbers={true}
        customStyle={{
         
          fontFamily:'Poppins',
        
          paddingTop: "0rem",
          paddingBottom: "0rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          borderRadius: " 0.75rem",
          overflowX: "hidden",
          boxSizing: "border-box",
          minHeight: !code ? "12rem" : "fit",
          maxHeight: "22rem",
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
      <Box className=" box-border  px-2 w-full min-w-[10rem] flex items-center justify-end space-x-3 rounded-md ">
        <Paper
          variant="contained"
          className={`p-2 text-base  transition-all ease-in-out duration-300   flex items-center  rounded-lg justify-center  text-blue-400 bg-[#f1f3f8]   cursor-pointer gap-3 `}
          onClick={handleCopy}
        >
          <FaClipboard />
        </Paper>
       

        {code.styles && (
          <Paper
            variant="contained"
            className={`p-2    flex items-center  rounded-lg justify-center   transition-all ease-in-out duration-300   cursor-pointer gap-2 ${
              !styleVisibility
                ? "text-blue-400 bg-[#f1f3f8] "
                : "text-white bg-blue-400 "
            }`}
            onClick={handleShowStyles}
          >
            {!styleVisibility ? (
              <DiCss3Full className="font-bold text-base" />
            ) : (
              <BiCodeAlt className="font-bold text-base" />
            )}
            {/* <Typography variant="body2" className=" text-xs font-medium  tracking-tight  ">
            {!styleVisibility ? "View styles" : "Hide styles"}
          </Typography> */}
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default CodeBlock;
