import React, { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { FaCopy } from "react-icons/fa";
import { DiCss3Full } from "react-icons/di";
import { BiCodeAlt } from "react-icons/bi";
import { Box, Snackbar, Alert, IconButton } from "@mui/material";

import Slide from "@mui/material/Slide";
const CodeSnippetComponent = ({ code, canEdit, lang }) => {
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

  const [hoverCode, setHoveringCode] = useState(true);

  // snackbar mui functions
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const SlideTransition = (props) => {
    return <Slide {...props} direction="up" />;
  };
 
  return (
    <Box className="relative h-fit w-full  p-0 rounded-lg box-border ">
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
      <Box className=" h-full w-full  py-0  box-border ">
        <Box className=" w-full flex flex-col items-center box-border ">
          <Box className="  p-3 w-full max-w-[50rem]  text-[0.80rem] box-border flex flex-col items-end space-y-3  rounded-xl">
            <CodeBlock
              code={code}
              lang={lang}
              canEdit={canEdit}
              setHoveringCode={setHoveringCode}
              styleVisibility={styleVisibility}
            ></CodeBlock>
            {/* button container */}
            <Box
              className={`  right-3 box-border   ${
                hoverCode ? "flex" : "hidden"
              } w-fit  items-center justify-end space-x-3 rounded-lg transition-all ease-in-out duration-300 `}
            >
              {/* copy btn */}
              <IconButton
                variant="contained"
                className={` capitalize text-sm  border-none   flex  rounded-lg  shadow-none font-normal  text-gray-400 hover:text-sky-500  bg-gray-100 h-8 w-8  cursor-pointer  `}
                onClick={handleCopy}
              >
                <FaCopy></FaCopy>
              </IconButton>

              {/* styles btn */}
              {code.styles && (
                <IconButton
                  variant="contained"
                  className={` capitalize text-sm    flex  rounded-lg  shadow-none font-normal  text-gray-400 border bg-gray-100 h-8 w-8 cursor-pointer`}
                  onClick={handleShowStyles}
                >
                  {!styleVisibility ? (
                    <DiCss3Full className="font-normal text-base hover:text-sky-500" />
                  ) : (
                    <BiCodeAlt className="font-normal text-base text-sky-500" />
                  )}
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CodeSnippetComponent;
