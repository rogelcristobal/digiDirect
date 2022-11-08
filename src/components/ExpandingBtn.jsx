import React from "react";
import {
  ListItemButton,
  Typography,
  Collapse,
  List,
  Paper,
  ListItemIcon,
  Box,
} from "@mui/material";
import { useState } from "react";
const ExpandingBtn = ({
  children,
  initialState,
  title,
}) => {
  const [isOpen, setState] = useState(initialState);
  const handleClick = () => {
    setState(!isOpen);
  };
  return (
    <>
      <ListItemButton
        disableGutters
        disableRipple
        disableTouchRipple
        onClick={handleClick}
        className={`flex  justify-between  
          text-black items-center hover:bg-inherit box-border py-2 w-full px-4 transition-all duration-300 ease-in-out `}
      >
        {/* title */}
        <Box className="flex h-full w-full space-x-3 ">
          <Typography
            variant="body2"
            className=" text-[1rem] font-medium capitalize"
          >
            {title}
          </Typography>
        </Box>
      </ListItemButton>

      {/* children */}
      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        className="w-full "
      >
        <List component="div" className=" py-0 px-4 pl-6">
          {children}
        </List>
      </Collapse>
    </>
  );
};



export default ExpandingBtn;
