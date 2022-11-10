import React from "react";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import Link from "@mui/material/Link";
import LinkBtn from "./LinkBtn";
import Templates from "../pages/Templates";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineFileSync } from "react-icons/ai";
// components
// icon

const SideBar = ({scrollRef}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { templateSections, pageCategoryRef } = useContext(
    TemplateSectionContext
  );

  const handleViewSection = async (id) => {
    await pageCategoryRef?.current[id].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box className="w-[22rem] z-10 h-full bg-[#ffffff] sticky top-0 px-4 box-border  flex flex-col justify-start pb-8 pt-8 border-thiner items-center overflow-y-auto">
      <Box
        className="h-fit w-full border-thiner  mt-16 box-border py-1 px-2  flex flex-col items-end justify-start  max-w-[17rem] 

        "
      >
        {[
          {
            title: "templates",
            path: "/templates",
            child: { node: templateSections, state: true },
          },
          { title: "converters", path: "/converters" },
          { title: "tools", path: "/tools" },
        ].map((item, idx) => (
          <LinkBtn
            scrollRef={scrollRef}
            key={idx}
            title={item.title}
            initialState={item?.child?.state}
            path={item.path}
          >
            {item?.child?.node.map((childItem, id) => (
              <Link
                key={id}
                underline="none"
                onClick={() => {
                  handleViewSection(id);
                }}
                className={` text-[0.85rem] relative box-border   pl-6 font-semibold py-1 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-start w-full  whitespace-nowrap 
                  ${childItem?.isInView ? "text-[#3180e2]" : "text-gray-400 "}
                  `}
              >
                <span className="text-left  w-full overflow-x-hidden truncate">
                  {childItem.category}
                </span>
              </Link>
            ))}
          </LinkBtn>
        ))}
      </Box>
    </Box>
  );
};

export default SideBar;
