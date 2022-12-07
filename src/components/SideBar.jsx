import React, { useContext } from "react";
import { Box, Divider, Typography, Button } from "@mui/material";
import { TbLayoutBoard,TbFileImport } from "react-icons/tb";
import TemplateSectionContext from "../context/TemplateSectionContext";
import LinkBtn from "./LinkBtn";
import { useNavigate } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";

import PageScrollableContext from "../context/PageScrollableContext";


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
    <Box  className=" w-[22rem] h-full z-20 bg-inherit   pt-[3rem] box-border flex items-start justify-right border-thin-right">
      {/* links */}
      <Box data-scrollbar className=" w-full max-w-[22rem] h-full box-border pt-12 px-2.5  overflow-y-auto ">
          <Box className="box-border ">
          {[
            {
              path: "/templates",
              title: " templates",
              nodes: templateSections,
              leftIcon: <TbLayoutBoard className="text-[1.6rem] " />,
              rightIcon: templateSections.length,
            },
            {
              path: "/converter",
              title: "converters",
              leftIcon: <TbFileImport className="text-[1.6rem]" />,
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
                      className="box-border  h-5 w-5 bg-neutral-100  text-[0.7rem] font-semibold font-plus flex items-center rounded-[0.325rem] justify-center text-gray-400/70 "
                    >
                      {item?.rightIcon}
                    </Typography>
                  ) : null
                }
                active=" text-gray-800"
                sxText="   font-semibold font-plus capitalize  w-full text-[0.850rem] "
                sxContainer="py-2  px-5 hover:bg-inherit transition-all ease-in-out duration-300 rounded-md "
              >
                {item?.nodes
                  ? item.nodes.map((child, id) => (
                      <LinkBtn
                        handleClick={() => handleScrollTo(id)}
                        title={child.title}
                        key={id}
                        sxText={` font-semibold  font-plus capitalize   w-full text-[0.8rem]`}
                        sxContainer={`py-2 pl-14 relative   hover:bg-inherit  ${
                          child.isInView ? "text-gray-800 " : "text-gray-500/70"
                        }`}
                      ></LinkBtn>
                    ))
                  : null}
                 
                  
              </LinkBtn>
            </div>
          ))}
          </Box>
          <Divider variant="middle" light className="my-2"></Divider>

      </Box>
    </Box>
  );
};

export default SideBar;
