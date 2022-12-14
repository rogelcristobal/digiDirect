import React, { useContext ,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ListItemButton, Typography, Collapse, Box } from "@mui/material";
import { useState } from "react";
import { TbChevronDown, TbChevronRight } from "react-icons/tb";
import TextContent from "./TextContent";
import SidebarStateContext from "../context/SidebarStateContext";
const LinkBtn = ({
  title,
  sxText,
  sxContainer,
  children,
  leftIcon,
  path,
  active,
}) => {
  const [dropDownState, setDropDownState] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { state } = useContext(SidebarStateContext);
  const handleClick = () => {
    navigate(path);
    setDropDownState((prev) => !prev);
  };
  useEffect(() => {
    if(pathname === path){
      setDropDownState(true)
      // navigate(path)
    }else{
      setDropDownState(false)
    }
  }, [pathname]);

  return (
    <Box className="relative box-border px-1 rounded-lg">
      <ListItemButton
        disableRipple
        disableTouchRipple
        onClick={handleClick}
        // ${pathname === path&&'bg-[#f3f5f7]'}
        className={`${sxContainer}flex flex-col   w-full h-fit items-start  justify-start transition-all duration-300 ease-in-out hover:bg-[#f3f5f7]`}
      >
        <Box
          className={`box-border w-full flex items-center justify-between h-full `}
        >
          <TextContent
            title={
              <Box className="box-border space-x-3 flex items-center justify-center ">
                {leftIcon}
                {state.status && (
                  <Typography
                    variant="h6"
                    className={`  capitalize  ${sxText}  `}
                  >
                    {title}
                  </Typography>
                )}
              </Box>
            }
          />

          {children && state.status ? (
            pathname === path ? (
              <TbChevronDown className="text-gray-500"/>
            ) : (
              <TbChevronRight className="text-gray-500"/>
            )
          ) : null}
        </Box>
      </ListItemButton>
      {children && (
        <Collapse in={dropDownState} unmountOnExit className="w-full  ">
          {children}
        </Collapse>
      )}
    </Box>
  );
};

export default LinkBtn;
