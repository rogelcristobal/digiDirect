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
import { HiChevronRight, HiChevronDown } from "react-icons/hi";
const CustomBtn = ({ children, initialState, title,path }) => {
  const [isOpen, setState] = useState(initialState);
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const handleClick = () => {
    setState(true);
    navigate(path)
  };
  useEffect(() => {
    if(pathname !== path){
      setState(false);
    }
  }, [pathname]);
  
  return (
    <>
      <ListItemButton
        disableGutters
        disableTouchRipple
        onClick={handleClick}
        className={`flex  justify-between  
          ${pathname === path? 'text-gray-800': 'text-gray-400'} items-center hover:bg-inherit box-border  py-2 w-full px-4 transition-all duration-300 ease-in-out `}
      >
        {/* title */}
        <Box className="flex h-full w-full space-x-3 ">
          <Typography
            variant="body2"
            className=" text-[0.9rem] font-semibold capitalize"
          >
            {title}
          </Typography>
        </Box>
        {children ? (
          <Box className=" flex items-center p-0.5 rounded-md  justify-center box-border">
            {isOpen ? (
              <HiChevronDown className="text-inherit" />
            ) : (
              <HiChevronRight className="text-inherit" />
            )}
          </Box>
        ) : null}
      </ListItemButton>



      {/* children */}
      {children ? (
        <Collapse in={isOpen} timeout="auto" unmountOnExit className="w-full ">
          <List component="div" className=" py-0  ">
            {children}
          </List>
        </Collapse>
      ) : null}
    </>
  );
};


CustomBtn.propTypes={
  children: PropTypes.node,
  path: PropTypes.string.isRequired 

}
export default CustomBtn;
