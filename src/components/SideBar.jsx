import React, { useContext, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { FiFile } from "react-icons/fi";
import { FiLayout } from "react-icons/fi";
import TemplateSectionContext from "../context/TemplateSectionContext";
import { HiArrowUpRight } from "react-icons/hi2";
import LinkBtn from "./LinkBtn";
import {AiOutlineExperiment} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";

import PageScrollableContext from "../context/PageScrollableContext";
// components
// icon

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
    offsetTop: 30,
  };
  const handleScrollTo = (id) => {
    const scrollbar = Scrollbar.init(scrollEl);
    scrollbar.scrollIntoView(pageCategoryRef.current[id], scrollingOptions);
  };

  return (
    <Box  className=" w-[22rem] h-full z-10  pt-[3rem] box-border flex items-start justify-center border-thin-right">
      {/* links */}
      <Box data-scrollbar className=" w-full h-full box-border pt-8 px-0  overflow-y-auto">
        
        <Box className=" box-border ">
         
          {[
            {
              path: "/templates",
              title: " templates",
              nodes: templateSections,
              leftIcon: <FiLayout className="text-xl " />,
              rightIcon: templateSections.length,
            },
            // {
            //   path: "/converter",
            //   title: "converters",
            //   leftIcon: <FiFile className="text-xl " />,
            // },
          ].map((item, id) => (
            <div className="box-border" key={id}>
              <LinkBtn
                handleClick={() => handleLinkClick(item)}
                title={item.title}
                path={item.path}
                leftIcon={item?.leftIcon}
                rightIcon={
                  item?.rightIcon ? (
                    <Typography
                      variant="body1"
                      className=" h-5 w-5 rounded-full  text-[0.7rem] font-medium font-plus text-center text-gray-400 bg-gray-100"
                    >
                      {item?.rightIcon}
                    </Typography>
                  ) : null
                }
                active=" text-black"
                sxText="   font-semibold font-plus capitalize  w-full text-[0.925rem] "
                sxContainer="py-2  px-6 hover:bg-inherit transition-all ease-in-out duration-300 "
              >
                {item?.nodes
                  ? item.nodes.map((child, id) => (
                      <LinkBtn
                        handleClick={() => handleScrollTo(id)}
                        title={child.title}
                        key={id}
                        sxText={` font-semibold  font-plus capitalize   w-full text-[0.825rem]`}
                        sxContainer={`py-2 pl-12 relative   hover:bg-inherit  ${
                          child.isInView ? "text-black " : "text-gray-500/70"
                        }`}
                      ></LinkBtn>
                    ))
                  : null}
              </LinkBtn>
            </div>
          ))}
        </Box>
       
         <Box className=" box-border">
          {/* <Typography
            variant="body1"
            className="text-xs px-4 text-gray-500/70 font-semibold font-general"
          >
            Api & Tools
          </Typography> */}
          {[
            {
              path: "/converter",
              title: "converters",
              leftIcon: <FiFile className="text-xl " />,
            },
            
            
          ].map((item, id) => (
            <div className="box-border" key={id}>
              <LinkBtn
                handleClick={() => handleLinkClick(item)}
                title={item.title}
                path={item.path}
                leftIcon={item?.leftIcon}
                rightIcon={
                  item?.rightIcon ? (
                    <Typography
                      variant="body1"
                      className=" h-5 w-5 rounded-md  text-[0.755rem] font-semibold font-plus text-center text-gray-600/60"
                    >
                      {item?.rightIcon}
                    </Typography>
                  ) : null
                }
                active=" text-black"
                sxText="   font-semibold font-plus capitalize  w-full text-[0.850rem] "
                sxContainer="py-2 px-6 hover:bg-inherit rounded-lg transition-all ease-in-out duration-300 "
              >
                {/* {item?.nodes
                  ? item.nodes.map((child, id) => (
                      <LinkBtn
                        handleClick={() => handleScrollTo(id)}
                        title={child.title}
                        key={id}
                        sxText={` font-semibold  font-plus capitalize   w-full text-[0.8rem]`}
                        sxContainer={`py-2 pl-0 relative   hover:bg-inherit  ${
                          child.isInView ? "text-black " : "text-gray-500/60"
                        }`}
                      ></LinkBtn>
                    ))
                  : null} */}
              </LinkBtn>
            </div>
          ))}
        
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
