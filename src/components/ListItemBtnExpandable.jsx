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
  icon,
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
        onClick={handleClick}
        className={`flex  justify-between   items-center   py-3 px-3 transition-all duration-300 ease-in-out ${
          isOpen
            ? `${bgColor} ${textColor}`
            : `bg-inherit text-gray-600 hover:${textColor}`
        }  `}
      >
        <Box className="flex h-full w-full space-x-3 ">
          {icon && (
            <Paper
              variant="contained"
              className={`   p-1.5 flex items-center  rounded-lg justify-center   transition-all ease-in-out duration-300   cursor-pointer gap-2  `}
            >
              {icon}
            </Paper>
          )}

          <Typography
            variant="body2"
            className=" text-[0.875] font-medium capitalize"
          >
            {title}
          </Typography>
        </Box>
        <ListItemIcon>
          {isOpen ?
            enableIcon : disableIcon
          }
        </ListItemIcon>
      </ListItemButton>

      {/* children */}
      <Collapse in={isOpen} timeout="auto" unmountOnExit className="">
        <List component="div" className="pl-8 ">
          {children}
        </List>
      </Collapse>
    </>
  );
};

ListItemBtnExpandable.defaultProps = {
  bgColor: "bg-purple-50",
  textColor: "text-purple-500",
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
