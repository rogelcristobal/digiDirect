import React from "react";
import { Typography, ListItemButton, Paper } from "@mui/material";
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
          isActive
            ? `${activeStyle}`
            : "bg-inherit text-gray-500 no-underline "
        }
      >
        <ListItemButton
          className={`  flex items-center font-sans justify-start bg-inherit transition-all duration-300 ease-int-out capitalize  ${
            parentBtn ? "px-4 py-3 " : "px-6 py-3"
          } space-x-3 `}
        >
          {icon && (
            <Paper
              variant="contained"
              className={`border-thiner p-2   flex items-center  rounded-lg justify-center   transition-all ease-in-out duration-300   cursor-pointergap-2 text-inherit bg-inherit`}
            >
              {icon}
            </Paper>
          )}
          <Typography
            variant="body2"
            className={`font-medium   ${
              parentBtn ? "text-[0.875]" : "text-sm"
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
