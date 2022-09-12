import React from "react";
import { Typography, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";
const ListItemBtnComponent = ({
  icon,
  title,
  handleClick,
  hoverColor,
  parentBtn,
  activeStyle,
  path
}) => {
  return (
    <>
    
      <NavLink to={`${path}`}
      className={({ isActive }) =>
      isActive ? `${activeStyle}`: 'bg-inherit text-neutral-500 no-underline'
      }
      
      >
        <ListItemButton
          className={`  ${hoverColor} py-4 rounded-2xl  flex items-center justify-start bg-inherit transition-all duration-300 ease-int-out capitalize  ${parentBtn?'px-6':'px-10'} space-x-4`}
        >
          {icon}
          <Typography
            variant="body1"
            className={` font-medium ${parentBtn ? "text-sm" : "text-xs"}`}
          >
            {title}
          </Typography>
          {/* icon conditional render */}
        </ListItemButton>
      </NavLink>
    </>
  );
};

ListItemBtnComponent.defaultProps = {
  hoverColor: "hover:text-purple-500",
};

export default ListItemBtnComponent;
