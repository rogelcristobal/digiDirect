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
      <Box className="px-2  w-[26rem] z-20 h-fit bg-inherit sticky top-0 box-border  flex flex-col justify-start pb-8 pt-12  items-center ">
        <Box
          className="h-fit w-full  mt-14 box-border py-2 px-2  flex flex-col items-end justify-start   space-y-0

          " onMouseEnter={()=>setMouseHoverState(true)}
          
        >
          {[
            {
              title: "on this page",
              path: "/templates",
              child: { node: templateSections, state: true },
            },
            // { title: "converters", path: "/converters" },
            // { title: "tools", path: "/tools" },
          ].map((item, idx) => (
            <LinkBtn
             sx="capitalize"
              navigationBtn
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
                  className={` text-[0.9rem] relative box-border    font-ukraine-light py-1.5  transition-all duration-500 ease-in-out flex items-center justify-start w-full  whitespace-nowrap 
                    ${childItem?.isInView ? "text-[#1c1c1d] " : "text-neutral-400/80 "}
                    `}
                >
                  {/* <div className={`${childItem?.isInView? 'bg-[#3b72ff]':'bg-gray-200/70'} h-full w-[0.275rem] absolute top-0 left-0 rounded-r-lg`}></div> */}

                  <span className="text-right box-border w-full overflow-x-hidden truncate ">
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
