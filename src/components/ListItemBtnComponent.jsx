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
                ? "text-sky-500 no-underline"
                : " text-sky-500 no-underline"
              : // inactive
              parentBtn
              ? "text-gray-700 no-underline"
              : "text-gray-400  no-underline"
          // isActive ? `text-green-400  no-underline` : " bg-inherit text-neutral-50 no-underline "
        }
      >
        <ListItemButton
          disableRipple
          className={`m-0 flex items-center  justify-start bg-inherit  capitalize relative ${
            parentBtn ? "pl-7 py-2.5" : "pl-8 py-2.5"
          } space-x-3 `}
        >
          <Typography
            variant="body2"
            className={`font-medium   ${
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
