import React, { lazy } from "react";
import { Box, Typography, Divider, Snackbar, Alert } from "@mui/material";
import TextContent from "./TextContent";

import { BsCheckCircle } from "react-icons/bs";

const ArticleBlock = ({ title, children, titleStyle, view, sx, id, category}) => {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [hoverLink, setHoverLink] = React.useState(false);

  const getID = () => {
    if (id < 10) {
      return `0${id + 1}`;
    } else {
      return id + 1;
    }
  };
  return (
    <Box
      className={`w-full h-fit ${sx}  px-10 py-7 flex flex-col justify-between `}
      ref={view}
    >
      <Box component="article" className="w-full  box-border  ">
        <TextContent
          category={category}
          sx={`space-y-4`}
          title={
            <>
              <Typography
                variant="body1"
                className="header-text font-inter   font-bold capitalize"
              >
                {title}
              </Typography>
              <Typography
                variant="h6"
                className="header-details  max-w-[45rem] pb-4 font-inter  "
              >
                A product listing is a description of a product that includes
                its features, specs, pricing, and images. It is typically used
                on e-commerce websites to provide customers with information to
                make informed purchasing decisions.
              </Typography>
            </>
          }
        >
          <Box
            
            className={`max-w-[45rem] font-inter  thin-box-divider    text-[16px] leading-[28px] text-[#354357] `}
          >
            {children}
          </Box>
        </TextContent>
      </Box>
    </Box>
  );
};

export default ArticleBlock;
// https://dribbble.com/shots/17800881-Web-UI
