import React from "react";
import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { Box, Tabs, Tab } from "@mui/material";
const CodeSnippetComponent = ({ code }) => {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Box className="relative h-fit w-full ">
      <Tabs
        centered
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        
        sx={{
          "& .MuiTabs-indicator": { backgroundColor: "rgb(59 130 246)" },
          "& .Mui-selected": { color: "rgb(59 130 246)" },
        }}
      >
        <Tab label="raw" className="text-sm capitalize  font-medium"></Tab>
        <Tab
          label="customize"
          className="text-sm capitalize font-medium"
          disabled
        ></Tab>
      </Tabs>
      {tabValue === 0 ? (
        <Box className="border-thin h-fit w-full  py-4  box-border">
          <Box className=" w-full flex flex-col items-center box-border">
            <Box className="max-w-[85%] w-full text-[.8rem] box-border">
              <CodeBlock code={code}></CodeBlock>
            </Box>
          </Box>
        </Box>
      ) : null}
      
    </Box>
  );
};

export default CodeSnippetComponent;
