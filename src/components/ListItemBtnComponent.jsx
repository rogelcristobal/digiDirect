import React from "react";
import { Typography, ListItemButton,Box } from "@mui/material";
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
      isActive ? `${activeStyle}`: 'bg-inherit text-neutral-700 no-underline'
      }
      
      >
        <ListItemButton
          className={`   py-4 rounded-2xl  flex items-center justify-start bg-inherit transition-all duration-300 ease-int-out capitalize  ${parentBtn?'px-4':'px-10'} space-x-4 `}
          
        >
          {icon&&
          <Box className="px-2 py-1.5 text-neutral-100 bg-blue-500 rounded-lg grid place-content-center">

            {icon}
          </Box>
          }
          <Typography
            variant="body2"
            className={`  font-medium ${parentBtn ? "text-[0.875]" : "text-xs"}`}
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
