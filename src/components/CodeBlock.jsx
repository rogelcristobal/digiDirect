import SyntaxHighlighter from "react-syntax-highlighter";
import { Box, Paper, Snackbar, Alert, Button } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { DiCss3Full } from "react-icons/di";
import Slide from "@mui/material/Slide";
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
    <Box className="h-full w-full  box-border   flex flex-col items-end justify-center ">
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
        className="scrollbar-hide hover:scrollbar-default w-full"
        wrapLongLines={true}
        wrapLines={true}
        language="css"
        style={tomorrowNight}
        // showLineNumbers={true}
        codeTagProps={{
          style: { fontFamily: "Hack",letterSpacing:'-0.025em' },
        }}
        customStyle={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "2rem",
          paddingRight: "1rem",
          borderRadius: " 0.75rem",
          overflowX: "hidden",
          boxSizing: "border-box",
          minHeight: !code ? "12rem" : "fit",
          maxHeight: "25rem",
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
        <Button
          variant="contained"
          className={`py-2.5 px-5.5 capitalize text-xs  transition-all ease-in-out duration-300   flex items-center  rounded-lg justify-center shadow-none font-normal  text-gray-100 bg-sky-500  cursor-pointer  `}
          onClick={handleCopy}
        >
          copy
        </Button>

        {code.styles && (
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
