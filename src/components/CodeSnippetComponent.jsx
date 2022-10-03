import React from "react";
import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { Box, Tabs, Tab, Tooltip } from "@mui/material";
import { BiPencil } from "react-icons/bi";
import { Zoom } from "@mui/material";
const CodeSnippetComponent = ({ code, canEdit }) => {
  const [tabValue, setTabValue] = useState(0);
  return (
   
    <Box  className="relative h-fit w-full  px-2 rounded-lg box-border ">
    
      <Box className=" h-fit w-full  py-0  box-border">
        <Box className=" w-full flex flex-col items-center box-border ">
          <Box className="max-w-[100%] w-full text-[.83rem] box-border     rounded-xl">
            <CodeBlock code={code} canEdit={canEdit}></CodeBlock>
          </Box>
        </Box>
      </Box>
    
  </Box>
  );
};

export default CodeSnippetComponent;
