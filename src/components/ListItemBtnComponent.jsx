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
            : "bg-white text-neutral-700 no-underline "
        }
      >
        <ListItemButton
          className={`   py-4 rounded-2xl  flex items-center justify-start bg-inherit transition-all duration-300 ease-int-out capitalize  ${
            parentBtn ? "px-4 " : "px-10"
          } space-x-4 `}
        >
          {icon && (
            <Paper
              variant="contained"
              className={`p-2    flex items-center  rounded-lg justify-center   transition-all ease-in-out duration-300   cursor-pointergap-2 text-blue-500 bg-blue-100`}
            >
              {icon}
            </Paper>
          )}
          <Typography
            variant="body2"
            className={`font-medium   ${
              parentBtn ? "text-[0.875]" : "text-xs"
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
