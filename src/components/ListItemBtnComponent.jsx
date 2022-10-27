import React from "react";
import { Typography, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";
const ListItemBtnComponent = ({
  title,
  parentBtn,
  path,
}) => {
  return (
    <>
      <NavLink
        to={`${path}`}
        className={
          ({ isActive }) =>
            isActive
              ? // active
                parentBtn
                ? "text-blue-500 no-underline"
                : " text-blue-500 no-underline"
              : // inactive
              parentBtn
              ? "text-gray-900 no-underline"
              : "text-gray-400  no-underline"
          // isActive ? `text-green-400  no-underline` : " bg-inherit text-neutral-50 no-underline "
        }
      >
        <ListItemButton
          disableRipple
          className={`m-0 flex items-center font-sans justify-start bg-inherit  capitalize relative ${
            parentBtn ? "pl-7 py-3 " : "pl-8 py-3"
          } space-x-3 `}
        >
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
