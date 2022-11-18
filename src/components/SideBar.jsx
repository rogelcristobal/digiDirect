  import React,{useContext} from "react";
  import MouseStateContext from "../context/MouseStateContext";
  import { Box, Typography } from "@mui/material";
  
  import TemplateSectionContext from "../context/TemplateSectionContext";
  import Link from "@mui/material/Link";
  import LinkBtn from "./LinkBtn";
  
  // components
  // icon

  const SideBar = () => {
    const {setMouseHoverState,mouseHoverState} = useContext(MouseStateContext)
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
      <Box className="px-4  w-[29rem] z-20 h-fit bg-inherit sticky top-16 box-border  flex flex-col justify-start pb-8 py-2  items-center ">
        <Box
          className="h-fit w-full  box-border py-1.5 px-2  flex flex-col items-end justify-start   space-y-0
          " onMouseEnter={()=>setMouseHoverState(true)}
        >
          {[
            {
              title: "On this page",
              path: "/templates",
              child: { node: templateSections, state: true },
            },
          ].map((item, idx) => (
            <LinkBtn
              sxContainer=" "
              sxText="font-ukraine-thin tracking-tight text-[0.9rem] text-gray-400 "
              navigationBtn
              key={idx}
              // title={item.title}
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
                  className={` text-[0.9rem] relative box-border cursor-none    font-ukraine-light py-1.5  transition-all duration-500 ease-in-out flex items-center justify-start w-full  whitespace-nowrap 
                    ${childItem?.isInView ? "text-black " : "text-neutral-400/80 "}
                    `}
                >
               
                  <span className="text-left box-border w-full overflow-x-hidden truncate ">
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
