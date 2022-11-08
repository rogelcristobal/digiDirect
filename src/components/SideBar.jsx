import React from "react";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import Link from "@mui/material/Link";
import ExpandingBtn from "./ExpandingBtn";
import Templates from "../pages/Templates";

// components
// icon

const SideBar = () => {
  const { templateSections, pageCategoryRef } = useContext(
    TemplateSectionContext
  );
  // f7f8fa
  return (
    <Box className="w-[23rem] z-10 h-full bg-inherit sticky top-0 px-6 box-border  flex flex-col justify-start pb-8 pt-8  items-center overflow-y-auto">
      <Box
        className="h-fit w-full  mt-6  box-border py-2  space-y-1 flex flex-col items-end justify-start  max-w-[17rem] 

        "
      >
        {templateSections.map((item, id) => (
          <Link
            key={id}
            underline="none"
            onClick={() => {
              pageCategoryRef?.current[id].scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className={` text-[0.9rem] relative  font-medium py-1.5 cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-start w-full  whitespace-nowrap 
                  ${item?.isInView ? "text-white" : "text-gray-700 "}
                  `}
          >
            <span className="text-right  w-full overflow-x-hidden truncate">
              {item.category}
            </span>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default SideBar;
