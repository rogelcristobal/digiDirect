import React, { useContext } from "react";
import { Box } from "@mui/material";

import TemplateSectionContext from "../context/TemplateSectionContext";
import {HiArrowUpRight} from 'react-icons/hi2'
import LinkBtn from "./LinkBtn";

// components
// icon

const SideBar = () => {
 
  const { templateSections,  } = useContext(
    TemplateSectionContext
  );

  return (
    <Box className=" w-[20rem] h-full  pt-[3.5rem] box-border flex items-start justify-center ">
      {/* links */}
      <Box className="border-thin-right w-full h-full box-border p-2 space-y-1 ">
        {[{path:'/templates',title:'templates',nodes:templateSections},{path:'/converter',title:'converters',icon:<HiArrowUpRight/>}].map((item,id)=>(
          <LinkBtn  key={id} title={item.title}  path={item.path} icon={item?.icon}
          sxText="text-[0.785rem] px-1 font-medium font-general tracking-wide capitalize  w-full " 
          sxContainer="py-2.5  border-thin-box rounded-md transition-all ease-in-out duration-300">
            {item?.nodes ?
              item.nodes.map((child,id)=>(

                
                <LinkBtn title={child.title} key={id} 
                sxText="text-[0.785rem] px-1 transition-all ease-in-out duration-300 font-medium font-general capitalize text-neutral-600 hover:text-neutral-400 tracking-wide w-full" 
                sxContainer="py-2.5 rounded-md"></LinkBtn>
              ))
            :null}
          </LinkBtn>
        ))}
      </Box>
    </Box>
  );
};

export default SideBar;
