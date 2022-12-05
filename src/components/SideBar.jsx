import React, { useContext } from "react";
import { Box, Divider } from "@mui/material";

import TemplateSectionContext from "../context/TemplateSectionContext";
import { HiArrowUpRight } from "react-icons/hi2";
import LinkBtn from "./LinkBtn";

// components
// icon

const SideBar = () => {
  const { templateSections } = useContext(TemplateSectionContext);
  // [#0099ff]
  return (
    <Box className=" w-[20rem] h-full z-10  pt-[3.5rem] box-border flex items-start justify-center border-thin-right">
      {/* links */}
      <Box className=" w-full h-full box-border pt-6 px-4 space-y-1.5 ">
        <Box className="py-2 space-y-2">
          {/* <Divider variant="fullWidth" light></Divider> */}
          {[
            { path: "/templates", title: "listing templates", nodes: templateSections },
            { path: "/converter", title: "converters" },
          ].map((item, id) => (
            <div className="box-border" key={id}>
              <LinkBtn
                title={item.title}
                path={item.path}
                icon={item?.icon}
                active=" text-[#1d2128]"
                sxText=" font-medium  font-plus capitalize tracking-wide w-full text-[0.875rem] "
                sxContainer="py-3 px-4 hover:bg-inherit rounded-lg transition-all ease-in-out duration-300"
              >
                {item?.nodes
                  ? item.nodes.map((child, id) => (
                      <LinkBtn
                        title={child.title}
                        key={id}
                        sxText={` font-medium  font-plus capitalize tracking-wide  w-full text-[0.8rem]`}
                        sxContainer={`py-2 px-4 pl-7 rounded-md hover:bg-inherit  ${child.isInView?'text-blue-500':'text-gray-500/80' }`}
                      ></LinkBtn>
                    ))
                  : null}
              </LinkBtn>
            </div>
          ))}
           <Divider variant="fullWidth" light></Divider>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
