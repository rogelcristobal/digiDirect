import React from "react";
import { Typography, ListItemButton, Paper, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
const ListItemBtnComponent = ({
  icon,
  title,
  handleClick,
  hoverColor,
  parentBtn,
  activeStyle,
  path,
}) => {
  return (
    <>
      <NavLink
        to={`${path}`}
        className={({ isActive }) =>
          isActive ? `${activeStyle}` : "bg-inherit text-gray-500 no-underline "
        }
      >
        <ListItemButton
          disableRipple
          className={`m-0 flex items-center font-sans justify-start bg-inherit transition-all duration-300 ease-int-out capitalize relative ${
            parentBtn ? "px-3 py-3 " : "pl-6 py-3"
          } space-x-3 `}
        >
          {icon && (
            <Paper
              variant="contained"
              className={`p-1.5   flex items-center  rounded-lg justify-center  transition-all ease-in-out duration-300   cursor-pointer gap-2 `}
            >
              {icon}
            </Paper>
          )}
          <Typography
            variant="body2"
            className={`font-medium   ${
              parentBtn ? "text-[0.875]" : "text-[0.80rem]"
            }`}
          >
            {title}
          </Typography>
        
          
         
        </ListItemButton>
      </NavLink>
    </>
  );
};

ListItemBtnComponent.defaultProps = {
  hoverColor: "hover:text-purple-500",
};

export default ListItemBtnComponent;
