import React from "react";
import { Typography } from "@mui/material";
const DigiLogoInJs = ({dark,size,color}) => {
  return (
    <>
    {/* [#ff3c00] */}
      <Typography variant="h6" className={` ${color} ${size}     `}>
        digi
        <span className={`font-medium  relative ${dark ? 'text-black':'text-gray-50'}`}>
          Direct
          {/* <span className={`font-medium text-xs absolute top-1 -right-3.5 ${dark ? 'text-black':'text-neutral-300'}`}>
            &#8482;
          </span> */}
        </span>
      </Typography>
    </>
  );
};

DigiLogoInJs.defaultProps={
    dark:false,
    color: 'text-gray-50'
}

export default DigiLogoInJs;
