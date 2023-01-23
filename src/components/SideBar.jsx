import React, { useContext } from "react";
import { Box } from "@mui/material";
import SampleContext from "../context/SampleContext";
const SideBar = ({handleClickScroll}) => {
  const { refState } = useContext(SampleContext);
  const x = [...refState].map((item) => item.getAttribute("data-scroll"));

  return (
    <Box className="box-border h-[90vh]  w-80 sticky top-4 flex mt-3 flex-col justify-start items-start p-3 space-y-0 thin-right-Boxider">
      {x.map((item, id) => {
        // console.log(item)
        return (
          <Box
            key={id}
            onClick={() => handleClickScroll(item)}
            className=" w-full  flex flex-col items-start justify-start py-2 h-8 px-2 box-border relative cursor-pointer font-ukraine-regular"
          >
            {String(item)}
          </Box>
        );
      })}
    </Box>
  );
};

export default SideBar;
