import React from "react";
import { ListItemButton, Typography, Collapse, List ,Box} from "@mui/material";
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
        onClick={handleClick}
        className={`flex justify-between   rounded-2xl py-4 px-4 transition-all duration-300 ease-int-out ${
          isOpen
            ? `${bgColor} ${textColor}`
            : `bg-inherit text-neutral-700 hover:${textColor}`
        }  `}
      >
        <div className="flex items-center justify-center space-x-3">
        {icon&&
          <Box className="px-2 py-1.5 text-neutral-100 bg-blue-500 rounded-lg grid place-content-center">

            {icon}
          </Box>
          }

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
