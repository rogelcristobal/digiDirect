import React from "react";
import { Typography, ListItemButton} from "@mui/material";
const ListItemBtnComponent = ({icon,title,handleClick}) => {
   

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        className={`pl-8 text-neutral-600 py-4 rounded-xl hover:bg-[rgba(34,34,34,255)]/50 hover:text-neutral-300 transition-all duration-300 ease-int-out capitalize`}
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

export default ListItemBtnComponent;
