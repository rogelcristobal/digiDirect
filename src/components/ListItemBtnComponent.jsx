import React, { useState } from "react";
import { Typography, ListItemButton, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const ListItemBtnComponent = ({ title, parentBtn, path }) => {
  const [state, setstate] = useState(false);
  return (
    <>
      <NavLink
        to={`${path}`}
        className="no-underline">
        {({ isActive }) => (
          <ListItemButton
            disableRipple
            className={`m-0 flex items-center box-border justify-start bg-inherit  capitalize relative ${
              parentBtn ? " py-2.5" : "pl-8 py-2.5 "
            } space-x-3 `}
          >
            <Typography
              variant="body2"
              className={` font-normal text-[0.9rem] " ${
                isActive ? "text-white"  : "text-gray-500"
              }`}
            >
              {title}
            </Typography>


          
          </ListItemButton>


        )}
      </NavLink>
    </>
  );
};

ListItemBtnComponent.defaultProps = {
  hoverColor: "hover:text-purple-500",
};

export default ListItemBtnComponent;
