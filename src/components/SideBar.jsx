import React, { useContext ,useState} from "react";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import { TbLayersSubtract, TbRepeat,TbChevronLeft,TbChevronRight } from "react-icons/tb";
import{FiFileText, FiRefreshCcw} from'react-icons/fi'
import TemplateSectionContext from "../context/TemplateSectionContext";
import LinkBtn from "./LinkBtn";
import { useNavigate } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import SidebarStateContext from '../context/SidebarStateContext'

import PageScrollableContext from "../context/PageScrollableContext";
import LinkBtnChild from "./LinkBtnChild";

const SideBar = () => {
  const { scrollEl } = useContext(PageScrollableContext);
  const { templateSections, pageCategoryRef } = useContext(
    TemplateSectionContext
  );
  const navigate = useNavigate();
  const handleLinkClick = (item) => {
    const scrollbar = Scrollbar.init(scrollEl);
    navigate(item.path);
    
  };

 
 
  return (
    <Box className={`w-[24rem] h-full z-30 bg-inherit   pt-[3rem] box-border flex items-start justify-right border-thin-right relative `}>
      {/* links */}
      <Box
        // data-scrollbar
        className=" w-full max-w-[24rem] h-full box-border pt-12 px-2.5  relative  "
      >
        <Box className="box-border space-y-1.5">
          {[
            {
              path: "/templates",
              title: "listing templates",
              category:'Documentation',
              nodes: templateSections,
              leftIcon: <Box className=" border-thin-box p-1.5 grid place-content-center rounded-md"><TbLayersSubtract className="text-[1.1rem] " /></Box>,
              rightIcon: templateSections.length,
            },
            {
              path: "/converter",
              title: "converters",
              leftIcon:<Box className=" border-thin-box p-1.5 grid place-content-center rounded-md"> <TbRepeat className="text-[1.1rem]" /></Box>,
            },
          ].map((item, id) => (
            <div className="box-border" key={id}>
              {item.category&&
                <Box className=" px-3">
                  <Typography variant="body1" className="text-[0.7rem] tracking-wide font-plus text-gray-500/60 font-bold mb-2">{item.category}</Typography>
                </Box>
              }
              <LinkBtn
                handleClick={() => handleLinkClick(item)}
                title={item.title}
                path={item.path}
                leftIcon={item?.leftIcon} 
                sxText="   font-semibold font-plus capitalize  w-full text-[0.850rem] "
                sxContainer="py-2.5  px-3.5  transition-all ease-in-out duration-300 rounded-md relative"
              >
                {item?.nodes
                  ? item.nodes.map((child, id) => (
                     <LinkBtnChild 
                     key={id}
                     id={id}
                     scrollreference={pageCategoryRef}
                     sxText={` font-semibold  font-plus capitalize   w-full text-[0.825rem]`}
                     sxContainer={`py-2  relative   hover:bg-inherit  ${
                           child.isInView ? "text-[#101626] " : "text-gray-500/70"
                      }`}
                     title={child.title}>
                     </LinkBtnChild>
                     
                    ))
                  : null}
              </LinkBtn>
            </div>
          ))}
        </Box>
        
      </Box>

     {/* <IconButton aria-label="sidebar-toggler" size="small" onClick={handleSidebarBtn} className="absolute top-[3.25rem] -right-3 border-thin-box bg-inherit text-inherit">
       {
        state.status? <TbChevronLeft />: <TbChevronRight />
       }
      </IconButton> */}
    </Box>
  );
};

export default SideBar;
