import React, { lazy } from "react";
import { Box, Typography, Divider, Snackbar, Alert } from "@mui/material";
import TextContent from "./TextContent";

import { BsCheckCircle } from "react-icons/bs";

const ArticleBlock = ({ title, children, titleStyle, view, sx, id }) => {
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
          // category={article?.category}
          sx={`space-y-8`}
          title={
            <>
              <Typography
                variant="body1"
                className="text-3xl font-plus   font-semibold capitalize"
              >
                {title}
              </Typography>
              <Typography
                variant="h6"
                className="text-[0.925rem] font-plus max-w-[45rem] pb-4 font-open tracking-tight "
              >
                A product listing is a description of a product that includes
                its features, specs, pricing, and images. It is typically used
                on e-commerce websites to provide customers with information to
                make informed purchasing decisions.
              </Typography>
            </>
          }
        >
          <Typography
            variant="h6"
            className={`max-w-[45rem] font-open  mt-16    text-[0.925rem]  tracking-tight `}
          >
            {children}
          </Typography>
        </TextContent>
      </Box>
    </Box>
  );
};

export default ArticleBlock;
// https://dribbble.com/shots/17800881-Web-UI
