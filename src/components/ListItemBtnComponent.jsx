import React from "react";
import { Typography, ListItemButton} from "@mui/material";
const ListItemBtnComponent = ({icon,title,handleClick,hoverColor}) => {
   

  return (
    <>
     {/* <ListItemButton
       
       className={`pl-8 text-neutral-600 py-4 rounded-lg hover:bg-[rgba(34,34,34,255)]/50 hover:text-neutral-300 transition-all duration-300 ease-int-out capitalize`}
     > */}
      <ListItemButton
       
        className={` text-neutral-600 ${hoverColor} py-3.5 rounded-2xl  bg-inherit transition-all duration-300 ease-int-out capitalize`}
      >
        <Typography variant="body1" className=" text-xs font-medium">
          {title}
        </Typography>
        {/* icon conditional render */}
        {icon}
      </ListItemButton>
    </>
  );
};

ListItemBtnComponent.defaultProps={
  hoverColor:'hover:text-purple-500'
}

export default ListItemBtnComponent;
