import React,{useEffect} from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import {
  ListItemButton,
  Typography,
  Collapse,
  List,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
const LinkBtn = ({ children, initialState, title,path ,scrollRef}) => {
  const [isOpen, setState] = useState(initialState);
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const handleClick = () => {
    setState(true);
    navigate(path)
    scrollRef?.current.scrollTo(0,0)
  };
  useEffect(() => {
    if(pathname !== path){
      setState(false);
    }
  }, [pathname]);
  
  return (
    // [#f5f4f5]
    <>
      <ListItemButton
        disableGutters
        disableTouchRipple
        onClick={handleClick}
        className={`flex  justify-between  
          ${pathname === path? 'text-black': 'text-black'} 
            items-center  box-border  py-2 bg-inherit rounded-lg w-full px-5 transition-all duration-300 ease-in-out space-x-2 `}
      >
       

        {/* title */}
        <Box className="flex h-full w-full ">
          <Typography
            variant="body2"
            className=" text-[1rem] font-bold capitalize"
          >
            {title}
          </Typography>
        </Box>
       {/* {children ? (
          <Box className=" flex items-center p-0.5    justify-center box-border">
            {isOpen ? (
              <BiCaretDown className="text-inherit" />
            ) : (
              <BiCaretRight className="text-inherit" />
            )}
          </Box>
        ) : null} */}
      </ListItemButton>



      {/* children */}
      {children ? (
        <Collapse in={isOpen} timeout="auto" unmountOnExit className="w-full ">
          <List component="div" className=" py-0  pl-4 ">
            {children}
          </List>
        </Collapse>
      ) : null}
    </>
  );
};


LinkBtn.propTypes={
  children: PropTypes.node,
  path: PropTypes.string.isRequired 

}
export default LinkBtn;
