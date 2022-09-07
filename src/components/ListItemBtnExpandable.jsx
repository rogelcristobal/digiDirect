import React from "react";
import { ListItemButton, Typography, Collapse, List } from "@mui/material";
import { useState } from "react";
const ListItemBtnExpandable = ({
  children,
  initialState,
  enableIcon,
  disableIcon,
  title,
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
        onClick={handleClick}
        className={`flex justify-between   rounded-xl py-4 px-4 transition-all duration-300 ease-int-out ${
          isOpen ? "bg-blue-50 text-blue-500": 'bg-inherit text-neutral-500'
        }  `}
      >
        <Typography variant="body2" className=" text-[0.775rem] font-medium capitalize">
          {title}
        </Typography>
        {/* icon conditional render */}
        {isOpen ? <>{enableIcon}</> : <>{disableIcon}</>}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto">
        <List
          component="div"
          className=" py-2 pl-2 hover:text-neutral-300 text-neutral-300 transition-all duration-300 ease-int-out "
        >
          {children}
        </List>
      </Collapse>
    </>
  );
};

export default ListItemBtnExpandable;
