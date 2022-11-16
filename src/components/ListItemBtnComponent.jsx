import React, { useState } from "react";
import { Typography, ListItemButton, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const ListItemBtnComponent = ({ title, parentBtn, path }) => {
  const [state, setstate] = useState(false);
  return (
    <>
      <NavLink to={`${path}`} className="no-underline">
        {({ isActive }) => (
          <ListItemButton
            disableRipple
            className={`m-0 rounded-lg flex items-center  box-border justify-start   capitalize relative ${
              parentBtn ? " py-2.5" : "pl-8 py-2 "
            } 
          
            
            `}
          >
            <Typography
              variant="body2"
              className={` font-semibold text-[0.9rem] " ${
                isActive ? "text-gray-600 " : "text-gray-400"
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

export default ListItemBtnComponent;
