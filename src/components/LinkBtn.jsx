import React, { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { ListItemButton, Typography, Collapse, List, Box } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import PageScrollableContext from "../context/PageScrollableContext";
import TextContent from "./TextContent";
const LinkBtn = ({ title, sxText, sxContainer, children ,rightIcon,leftIcon,path,active,handleClick}) => {
  const [isOpen, setState] = useState(true);

  // const { scrollRefState } = useContext(PageScrollableContext);
 
  const {pathname} = useLocation()
  // const handleClick = () => {
  //   navigate(path)
  //   scrollRefState?.current.scrollTo(0, 0);
  // };
  useEffect(() => {
    if(pathname !== path){
      setState(false);
    }else{
      setState(true);
    }
  }, [pathname]);

  return (
    <>
      <ListItemButton
        disableRipple
        disableTouchRipple
        onClick={handleClick}
        className={`${sxContainer} flex flex-col ${pathname === path&& active}  w-full h-fit items-start  justify-start transition-all duration-300 ease-in-out`}
      >
        <Box className="box-border w-full flex items-center justify-between h-full">
          <TextContent
            // category={article?.category}
            sx="space-y-4"
            title={
              <Box className="box-border space-x-3 flex items-center justify-center ">
              {leftIcon}
              <Typography
                variant="subtitle1"
                className={` font-inter capitalize  ${sxText}  `}
                >
                {title}
              </Typography>
              </Box>
            }
            />
         

          {rightIcon}
        </Box>
      </ListItemButton>
      {children && (
        <Collapse in={isOpen} unmountOnExit className="w-full  relative ">
         
          {children}
        </Collapse>
      )}
    </>
  );
};

export default LinkBtn;
