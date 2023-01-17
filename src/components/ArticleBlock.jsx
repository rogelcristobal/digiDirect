import React,{lazy} from "react";
import { Box, Typography, Divider, Snackbar, Alert,  } from "@mui/material";
import TextContent from "./TextContent";
import { BsCheckCircle } from "react-icons/bs";
const ArticleBlock = ({ article, children, titleStyle, view, sx,id }) => {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const mergeTagsAndStyles = ({ tags, styles }) => {
    if (!styles) {
      return tags;
    } else {
      return `<style>${styles}</style>` + tags;
    }
  };
  const handleToggleCopyToggle = () => {
    navigator.clipboard.writeText(mergeTagsAndStyles(article?.snippet));
    setOpen(true);
  };

  const handleClick = () => {
    setShow((prev) => (prev = !show));
  };
  const clickAnimate = {
    animate: {
      // height:40,
      // width:"0rem",
    },
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {/* .MuiAlert-icon */}
        <Alert
          onClick={handleClose}
          icon={<BsCheckCircle className="text-white text-xl" />}
          className="w-72 h-14 px-4 cursor-pointer bg-blue-500 text-white rounded-lg  flex items-center justify-start space-x-4"
          color="info"
        >
          Copied to clipboard! <br />
        </Alert>
      </Snackbar>

    

      <Box className={`w-full h-fit ${sx}   flex flex-col justify-between `} ref={view}>
        <Box component="article" className="w-full  box-border  ">
          <TextContent
            // category={article?.category}
            sx={`space-y-3`}
            title={

              <Typography
                variant="subtitle2"
                className={`    flex flex-col relative max-w-fit ${titleStyle} `}
                >
                 {article.title}
              </Typography>
            }
            subTitle={
              <Typography
                variant="subtitle2"
                className={`max-w-[47rem] font-dm text-gray-800  text-[16px] leading-[24px] font-normal  `}
              >
                {article.content}

                
              </Typography>
            }
          />
        </Box>
       
       { children &&
        // spaces for each child
          <Box className="  flex flex-col items-center justify-start box-border"> 
            {children} 
           
          </Box>

        }
      </Box>
    </>
  );
};

export default ArticleBlock;
// https://dribbble.com/shots/17800881-Web-UI
