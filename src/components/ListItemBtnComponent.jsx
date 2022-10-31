import React from "react";
import { Typography, ListItemButton,Box } from "@mui/material";
import { NavLink,useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const ListItemBtnComponent = ({
  title,
  parentBtn,
  path,
}) => {
 const {pathname} = useLocation()

 return (
    <>
      <NavLink
        to={`${path}`}
        className={ 
          ({ isActive }) =>
            isActive
              ? // active
                parentBtn
                ? "text-white no-underline "
                : " text-white no-underline"
              :  // inactive
              parentBtn
              ? "text-white no-underline"
              : "text-gray-400  no-underline"
          
        }
      >
        <ListItemButton
          disableRipple
          className={`m-0 flex items-center box-border  justify-start bg-inherit  capitalize relative ${
            parentBtn ? " py-2.5" : "pl-8 py-2.5 "
          } space-x-3 `}
        >
          <Typography
            variant="body2"
            className={` font-normal   ${
              parentBtn ? "text-[0.9rem]" : "text-[0.80rem] "
            }`}
          >
            {title}
          </Typography>
        {/* <motion.div variants={linkAnimation} initial="initial" animate="animate" className={`absolute bottom-0 -left-3 box-border w-full h-2 bg-blue-400`}>

        </motion.div> */}
        </ListItemButton>
      </NavLink>
    </>
  );
};

ListItemBtnComponent.defaultProps = {
  hoverColor: "hover:text-purple-500",
};

export default ListItemBtnComponent;
