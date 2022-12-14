import React, { useContext, useState } from "react";
import { Box, Divider, Typography, Button } from "@mui/material";
import {
  TbLayersSubtract,
  TbRepeat,
  TbChevronLeft,
  TbChevronRight,
} from "react-icons/tb";
import { FiFileText, FiRefreshCcw } from "react-icons/fi";
import TemplateSectionContext from "../context/TemplateSectionContext";
import LinkBtn from "./LinkBtn";
import { useNavigate } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import SidebarStateContext from "../context/SidebarStateContext";

import PageScrollableContext from "../context/PageScrollableContext";
import LinkBtnChild from "./LinkBtnChild";

const SideBar = () => {
  const { scrollEl } = useContext(PageScrollableContext);
  const { templateSections, pageCategoryRef } = useContext(
    TemplateSectionContext
  );
  const navigate = useNavigate();
  const handleLinkClick = (item) => {
    // const scrollbar = Scrollbar.init(scrollEl);
    navigate(item.path);
  };

  return (
    <Box
      className={`w-[24rem] h-full z-30 bg-inherit   pt-[3rem] box-border flex items-start justify-right border-thin-right relative `}
    >
      {/* links */}
      <Box
        // data-scrollbar
        className=" w-full max-w-[22rem] h-full box-border pt-8 px-2.5  relative  "
      >
        <Box className="box-border space-y-1">
          
          {[
            {
              path: "/templates",
              title: "listing templates",
              category: "Documentation",
              nodes: templateSections,
              leftIcon: (
                <Box className=" border-thin-box p-1.5 text-md grid place-content-center rounded-lg">
                  <TbLayersSubtract/>
                </Box>
              ),
              rightIcon: templateSections.length,
            },
            {
              path: "/converter",
              title: "converters",
              category: "API & Tools",
              leftIcon: (
                <Box className="border-thin-box p-1.5 text-md grid place-content-center rounded-lg">
                  
                  <TbRepeat/>
                </Box>
              ),
            },
          ].map((item, id) => (
            <div className="box-border" key={id}>
              {item.category && (
                <Box className=" px-4">
                  <Typography
                    variant="subtitle2"
                    className="text-[0.725rem] tracking-wide font-plus text-gray-500/60 font-semibold mb-2"
                  >
                    {item.category}
                  </Typography>
                </Box>
              )}
              <LinkBtn
                handleClick={() => handleLinkClick(item)}
                title={item.title}
                path={item.path}
                leftIcon={item?.leftIcon}
                sxText="   font-semibold font-plus capitalize  w-full text-[0.825rem] "
                sxContainer="py-2  px-2  transition-all ease-in-out duration-300 rounded-md relative"
              >
                {item?.nodes
                  ? item.nodes.map((child, id) => (
                      <LinkBtnChild
                        key={id}
                        id={id}
                        scrollreference={pageCategoryRef}
                        sxText={` font-semibold  font-plus capitalize   w-full text-[0.825rem]`}
                        sxContainer={`py-2  relative   hover:bg-inherit  ${
                          child.isInView
                            ? "text-[#101626] "
                            : "text-gray-500/70"
                        }`}
                        title={child.title}
                      ></LinkBtnChild>
                    ))
                  : null}
              </LinkBtn>


              {/* {item.category&&<Divider variant="middle" className="mt-2" light></Divider>} */}
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
