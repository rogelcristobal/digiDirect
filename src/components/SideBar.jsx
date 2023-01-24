import React, { useContext } from "react";
import { Box } from "@mui/material";
import SampleContext from "../context/SampleContext";
const SideBar = ({handleClickScroll}) => {
  const { refState } = useContext(SampleContext);

const value = [...refState].map((item)=>(item.id))
  // const value = [...refState].map((item)=>{
  //   return {
  //     label:item.getAttribute('data-label'),
  //     anchor:item.current
  //   }  
  // })

  console.log(value)
  return (
    <Box className="box-border thin-box-divider h-[90vh]  w-[24rem] sticky top-16 flex mt-3 flex-col justify-start items-start p-3 space-y-0 thin-right-Boxider">
      {value.map((item, id) => {
        // console.log(item)
        return (
          <Box
            key={id}
            onClick={() => handleClickScroll(item)}
            className=" w-full  flex flex-col items-start justify-start py-2 h-8 px-2 box-border relative cursor-pointer font-ukraine-regular thin-box-divider"
          >
            
          </Box>
        );
      })}
    </Box>
  );
};

export default SideBar;
