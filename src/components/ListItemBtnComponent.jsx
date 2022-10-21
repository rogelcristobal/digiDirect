import React from "react";
import { Typography, ListItemButton, Paper, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
const ListItemBtnComponent = ({
  icon,
  title,
  iconStyle,
  parentBtn,
 
  path,
}) => {
  return (
    <>
      <NavLink
        to={`${path}`}
        className={({ isActive }) =>
        isActive ? 
        // active
        (parentBtn?'text-gray-700 no-underline':' text-blue-500 no-underline') : 
        // inactive
        (parentBtn?'text-gray-700 no-underline':'text-gray-400  no-underline')
          // isActive ? `text-green-400  no-underline` : " bg-inherit text-neutral-50 no-underline "
        }
      >
        <ListItemButton
          disableRipple
          
          className={`m-0 flex items-center font-sans justify-start bg-inherit  capitalize relative ${
            parentBtn ? "px-3 py-3 " : "pl-3 py-3"
          } space-x-3 `}
        >
          {/* {icon && (
            <Paper
              variant="contained"
              className={`p-1.5   flex items-center border-thin rounded-lg justify-center  transition-all ease-in-out duration-300 text-sky-500 text-sm  cursor-pointer gap-2 `}
            >
              {icon}
            </Paper>
          )} */}
          <Typography
            variant="body2"
            className={`font-semibold   ${
              parentBtn ? "text-[0.875]" : "text-[0.80rem] "
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
