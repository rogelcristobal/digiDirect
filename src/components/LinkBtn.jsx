import React, { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ListItemButton, Typography, Collapse, List, Box } from "@mui/material";
import { useState } from "react";
import { TbChevronDown, TbChevronRight } from "react-icons/tb";
import PageScrollableContext from "../context/PageScrollableContext";
import TextContent from "./TextContent";
import SidebarStateContext from "../context/SidebarStateContext";
const LinkBtn = ({
  title,
  sxText,
  sxContainer,
  children,
  rightIcon,
  leftIcon,
  path,
  active,
  handleClick,
}) => {
  const [isOpen, setState] = useState(true);

  const { pathname } = useLocation();

  const { state } = useContext(SidebarStateContext);
 
  
  return (
    <Box className="relative box-border ">
      <ListItemButton
        disableRipple
        disableTouchRipple
        onClick={handleClick}
        className={`${sxContainer} flex flex-col  w-full h-fit items-start  justify-start transition-all duration-300 ease-in-out`}
      >
        <Box
          className={`box-border w-full flex items-center ${
            state.status ? "justify-between" : "justify-center"
          } h-full`}
        >
          <TextContent
            sx="space-y-4"
            title={
             
         
              <Box className="box-border space-x-4 flex items-center justify-center ">
                {leftIcon}
               
                   <Typography
                    variant="subtitle2"
                    className={`  capitalize  ${sxText}  `}
                  >
                    {title}
                  </Typography>
                
                 
                
              </Box>
            }
          />

          {children ? (
            pathname === path ? (
              <TbChevronDown />
            ) : (
              <TbChevronRight />
            )
          ) : null}
        </Box>
      </ListItemButton>
      {children &&
        (!state.status ? 
          <Collapse
            in={isOpen}
            unmountOnExit
            className="w-fit z-50 absolute h-fit bg-white  -right-52 flex items-center justify-start  top-0 border-thin-box  p-2 rounded-lg"
          >
            {children}
          </Collapse>
         : 
         <Collapse in={isOpen} unmountOnExit className="w-full pl-10 ">
          {children}
         </Collapse>
        )}
    </Box>
  );
};

export default LinkBtn;
