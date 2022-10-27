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
const ListItemBtnExpandable = ({
  children,
  initialState,
  enableIcon,
  disableIcon,
  title,
  textColor,
  bgColor,
 
}) => {
  const [isOpen, setState] = useState(initialState);
  const handleClick = () => {
    setState(!isOpen);
  };
  return (
    <>
      <ListItemButton
        disableGutters
        dense
        disableRipple
        disableTouchRipple
        onClick={handleClick}
        className={`flex  bg-transparent justify-between  ${isOpen?`${textColor}`:'text-gray-900'} items-center  box-border py-3 pl-7 transition-all duration-300 ease-in-out `}
      >
        <Box className="flex h-full w-full space-x-3 ">
          <Typography
            variant="body2"
            className=" text-[0.875] font-semibold capitalize"
          >
            {title}
          </Typography>
        </Box>
        <Box className="box-border  h-fit grid place-content-center  mr-4">

          {isOpen ?
            enableIcon : disableIcon
          }
          </Box>
       
      </ListItemButton>

      {/* children */}
      <Collapse in={isOpen} timeout="auto" unmountOnExit className="">
        <List component="div" className="pl-2 ">
          {children}
        </List>
      </Collapse>
    </>
  );
};

ListItemBtnExpandable.defaultProps = {
  bgColor: "bg-purple-50",
  textColor: "text-gray-900",
};

export default ListItemBtnExpandable;

{
  /* {icon && (
  <Paper
    variant="contained"
    className={`   p-1.5 flex items-center  rounded-lg justify-center  border-thiner transition-all ease-in-out duration-300   cursor-pointer gap-2 text-inherit bg-inherit`}
  >
    {icon}
  </Paper>
)} */
}
{
  /* </div> */
}
{
  /* icon conditional render */
}
