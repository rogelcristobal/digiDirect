import React from "react";
import {
  ListItemButton,
  Typography,
  Collapse,
  List,
  Paper,
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
    setState((prev) => (prev = !isOpen));
  };
  return (
    <>
      {/* <ListItemButton
        onClick={handleClick}
        className={`flex justify-between  rounded-lg py-4  transition-all duration-300 ease-int-out ${
          isOpen && "bg-[rgba(34,34,34,255)]/30"
        } text-neutral-500 hover:text-neutral-300`}
      > */}

      <ListItemButton
        disableGutters
        dense
        onClick={handleClick}
        className={`flex justify-between font-sans  py-3 px-4 transition-all duration-300 ease-int-out ${
          isOpen
            ? `${bgColor} ${textColor}`
            : `bg-inherit text-gray-500 hover:${textColor}`
        }  `}
      >
        <div className="flex items-center justify-center space-x-3">
          {/* bg-[#f7f7f9] */}
          {icon && (
            <Paper
              variant="contained"
              className={`  border-thiner p-2 flex items-center  rounded-lg justify-center   transition-all ease-in-out duration-300   cursor-pointer gap-2 text-inherit bg-inherit`}
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
        </div>
        {/* icon conditional render */}
        {isOpen ? <>{enableIcon}</> : <>{disableIcon}</>}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto">
        <List
          component="div"
          className=" py-2 pl-0  transition-all duration-300 ease-int-out "
        >
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
