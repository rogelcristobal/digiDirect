import React from "react";
import { Typography } from "@mui/material";
const DigiLogoInJs = ({dark}) => {
  return (
    <>
      <Typography variant="h6" className="text-[#ff3c00] px-2 ">
        digi
        <span className={`font-semibold text-neutral-300 relative ${dark && 'text-black'}`}>
          Direct
          <span className={`font-thin text-xs absolute top-1 -right-2.5 ${dark && 'text-black'}`}>
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
