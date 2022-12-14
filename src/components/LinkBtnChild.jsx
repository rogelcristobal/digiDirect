import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListItemButton, Typography, Box } from "@mui/material";

import PageScrollableContext from "../context/PageScrollableContext";
import TextContent from "./TextContent";
import SidebarStateContext from "../context/SidebarStateContext";
import Scrollbar from "smooth-scrollbar";

const LinkBtnChild = ({
  title,
  sxText,
  sxContainer,
  active,
  id,
  scrollreference,
}) => {
  const { state } = useContext(SidebarStateContext);
  const { scrollEl } = useContext(PageScrollableContext);
  const scrollingOptions = {
    alignToTop: true,
    offsetTop: 80,
  };
  const handleScrollTo = () => {
    const scrollbar = Scrollbar.init(scrollEl);
    scrollbar.scrollIntoView(scrollreference.current[id], scrollingOptions);
  };
  return (
    <Box className="relative box-border my-1">
      <ListItemButton
        disableRipple
        disableTouchRipple
        onClick={handleScrollTo}
        className={`${sxContainer}  flex flex-col pl-12  w-full h-fit items-start  justify-start transition-all duration-300 ease-in-out`}
      >
        <Box
          className={`box-border w-full flex items-center 
           justify-between h-full`}
        >
          <TextContent
            sx="space-y-4"
            title={
              <Box className="box-border space-x-4 flex items-center justify-center ">
                <Typography
                  variant="subtitle2"
                  className={`  capitalize  ${sxText}  `}
                >
                  {title}
                </Typography>
              </Box>
            }
          />
        </Box>
      </ListItemButton>
    </Box>
  );
};

export default LinkBtnChild;
