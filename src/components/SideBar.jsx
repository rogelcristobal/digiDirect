import React, { useContext ,useState} from "react";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import { TbLayoutBoard, TbFileImport,TbChevronLeft,TbChevronRight } from "react-icons/tb";
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
    navigate(item.path);
  };
  const scrollingOptions = {
    alignToTop: true,
    offsetTop: 100,
  };
  const handleScrollTo = (id) => {
    const scrollbar = Scrollbar.init(scrollEl);
    scrollbar.scrollIntoView(pageCategoryRef.current[id], scrollingOptions);
  };

 
  const{dispatch,state}=useContext(SidebarStateContext)
  const handleSidebarBtn=()=>{
    dispatch({type:'TOGGLE_SIDEBAR'})
  }
  return (
    <Box className={`${state.status?' w-[22rem]':'w-[4rem]'} h-full z-30 bg-inherit   pt-[3rem] box-border flex items-start justify-right border-thin-right relative `}>
      {/* links */}
      <Box
        // data-scrollbar
        className=" w-full max-w-[22rem] h-full box-border pt-12 px-2.5  relative  "
      >
        <Box className="box-border space-y-1.5">
          {[
            {
              path: "/templates",
              title: " templates",
              nodes: templateSections,
              leftIcon:<Box className="border-thin-box box-border p-1 grid place-content-center rounded-md text-sky-600"> <TbLayoutBoard className="text-[1.1rem] " /></Box>,
              rightIcon: templateSections.length,
            },
            {
              path: "/converter",
              title: "converters",
              leftIcon:<Box className="border-thin-box box-border p-1 grid place-content-center rounded-md"> <TbFileImport className="text-[1.1rem]" /></Box>,
            },
          ].map((item, id) => (
            <div className="box-border" key={id}>
              <LinkBtn
                handleClick={() => handleLinkClick(item)}
                title={item.title}
                path={item.path}
                leftIcon={item?.leftIcon}
             
                
                sxText="   font-semibold font-plus capitalize  w-full text-[0.850rem] "
                sxContainer="py-2.5  px-4  hover:bg-slate-100/40 transition-all ease-in-out duration-300 rounded-md relative"
              >
                {item?.nodes
                  ? item.nodes.map((child, id) => (
                     <LinkBtnChild 
                     key={id}
                     id={id}
                     scrollreference={pageCategoryRef}
                     sxText={` font-semibold  font-plus capitalize   w-full text-[0.8rem]`}
                     sxContainer={`py-2  relative   hover:bg-inherit  ${
                           child.isInView ? " " : "text-gray-500/70"
                      }`}
                     title={child.title}>
                     </LinkBtnChild>
                     
                    ))
                  : null}
              </LinkBtn>
            </div>
          ))}
        </Box>
        <Divider variant="middle" light className="my-2"></Divider>
      </Box>

     <IconButton aria-label="sidebar-toggler" size="small" onClick={handleSidebarBtn} className="absolute top-[3.25rem] -right-3 border-thin-box bg-inherit text-inherit">
       {
        state.status? <TbChevronLeft />: <TbChevronRight />
       }
      </IconButton>
    </Box>
  );
};

export default SideBar;
