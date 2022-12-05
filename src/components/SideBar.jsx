import React, { useContext } from "react";
import { Box ,Divider} from "@mui/material";

import TemplateSectionContext from "../context/TemplateSectionContext";
import {HiArrowUpRight} from 'react-icons/hi2'
import LinkBtn from "./LinkBtn";

// components
// icon

const SideBar = () => {
 
  const { templateSections,  } = useContext(
    TemplateSectionContext
  );
// [#0099ff]
  return (
    <Box className=" w-[20rem] h-full  pt-[3.5rem] box-border flex items-start justify-center ">
      {/* links */}
      <Box className="border-thin-right w-full h-full box-border pt-4 px-3 space-y-1.5 ">
        {[{path:'/templates',title:'templates',nodes:templateSections},{path:'/converter',title:'converters',}].map((item,id)=>(
         <div className="box-border">
        
          <LinkBtn  key={id} title={item.title}  path={item.path} icon={item?.icon}
          active=" text-[#0099ff]"
          sxText=" font-medium  font-inter capitalize tracking-wide w-full text-[0.785rem] " 
          sxContainer="py-2.5 px-4 hover:bg-inherit rounded-xl transition-all ease-in-out duration-300  border-thin-box">
            {item?.nodes ?
              item.nodes.map((child,id)=>(

                
                <LinkBtn title={child.title} key={id} 
                sxText=" font-medium  font-inter capitalize tracking-wide  w-full text-[0.785rem]" 
                sxContainer="py-2 px-4 pl-6 rounded-md hover:bg-inherit text-gray-500/80 "></LinkBtn>
              ))
            :null}
          </LinkBtn>
        
          
         </div>
        ))}
        
      </Box>
    </Box>
  );
};

export default SideBar;
