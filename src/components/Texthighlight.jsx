import React from "react";
import { Typography } from "@mui/material";
const Texthighlight = ({ text,variant,sx }) => {
  return (
    <Typography variant={variant} className={`${sx} `}>
      {[...text].map((item, id) => {
        if(id < 4){
            return <span className="text-blue-500">{item}</span>
        }else{
            return item
        }     
        
      })}
    </Typography>
  );
};

export default Texthighlight;
