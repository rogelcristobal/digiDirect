import React from "react";
import { Typography } from "@mui/material";
const DigiLogoInJs = ({dark,size}) => {
  return (
    <>
    {/* [#ff3c00] */}
      <Typography variant="h6" className={` text-blue-500  px-2 box-border`}>
        digi
        <span className={`font-semibold  relative ${dark ? 'text-black':'text-neutral-300'}`}>
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
