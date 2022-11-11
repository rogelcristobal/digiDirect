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
      <Box className="px-2  w-[22rem] z-30 h-full bg-[#ffffff] sticky top-0  box-border  flex flex-col justify-start pb-8 pt-12  items-center overflow-y-auto">
        <Box
          className="h-fit w-full  mt-14 box-border py-2   flex flex-col items-end justify-start   space-y-0

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
                  className={` text-[0.875rem] relative box-border   px-6 font-ukraine-regular py-1.5 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-start w-full  whitespace-nowrap 
                    ${childItem?.isInView ? "text-black " : "text-neutral-400/70 "}
                    `}
                >
                  {/* <div className={`${childItem?.isInView? 'bg-[#3b72ff]':'bg-gray-200/70'} h-full w-[0.275rem] absolute top-0 left-0 rounded-r-lg`}></div> */}

                  <span className="text-left box-border w-full overflow-x-hidden truncate">
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
