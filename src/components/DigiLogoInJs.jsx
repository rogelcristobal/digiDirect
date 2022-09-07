import React from "react";
import { Typography } from "@mui/material";
const DigiLogoInJs = ({dark,size}) => {
  return (
    <>
      <Typography variant="h6" className={` ${size} text-[#ff3c00] px-2 box-border font-semibold `}>
        digi
        <span className={`  relative ${dark ? 'text-black':'text-neutral-300'}`}>
          Direct
          <span className={`font-thin text-xs absolute top-1 -right-2.5 ${dark ? 'text-black':'text-neutral-300'}`}>
            &#8482;
          </span>
        </span>
      </Typography>
    </>
  );
};

DigiLogoInJs.defaultProps={
    dark:false
}

export default DigiLogoInJs;
