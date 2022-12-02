import React, { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { ListItemButton, Typography, Collapse, List, Box } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import PageScrollableContext from "../context/PageScrollableContext";
const LinkBtn = ({ title, sxText, sxContainer, children ,icon,path}) => {
  const [isOpen, setState] = useState(true);

  // const { scrollRefState } = useContext(PageScrollableContext);
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const handleClick = () => {
    navigate(path)
    // scrollRefState?.current.scrollTo(0, 0);
  };
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
        className={`${sxContainer} flex flex-col ${pathname === path&&'bg-[#2b2b2b]/40'}  w-full h-fit items-start  justify-start`}
      >
        <Box className="box-border w-full flex items-center justify-between">

          <Typography variant="body1" className={sxText}>
            {title}
          </Typography>

          {icon}
        </Box>
      </ListItemButton>
      {children && (
        <Collapse in={isOpen} unmountOnExit className="w-full">
          {children}
        </Collapse>
      )}
    </>
  );
};

export default LinkBtn;
