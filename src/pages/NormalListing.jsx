import { useState } from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const NormalListing = () => {
  const [tabState, setTabState] = useState(0);
  const codeString = `
<ul>
<li> item 1 </li>
<li> item 2 </li>
<li> item 3 </li>
</ul>
  `;
  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
      <Box className="h-full overflow-auto w-full  box-border px-20  py-32">
        <PageTitle
          category="general"
          title="normal listing"
          subTitle="Create and copy a normal listing template for digiDirect products. Copy the raw template or edit it in the customize tab."
        />
        <Box className="mt-28">
          <PageSubTitle
            title=" What's in the box"
            subtitle=" What's in the box template info"
          />

          <Tabs
            value={tabState}
            onChange={(e, newValue) => setTabState(newValue)}
            className="border-thin mt-6"
            sx={{
              "& .MuiTabs-indicator": { backgroundColor: "rgb(59 130 246)" },
              "& .Mui-selected": { color: "rgb(59 130 246)" },
            }}
          >
            <Tab label="raw" className="text-sm capitalize font-medium"></Tab>
            <Tab
              label="customize"
              className="text-sm capitalize font-medium"
              disabled
            ></Tab>
          </Tabs>
        </Box>

        {/* content per tab*/}
        <Box className="border-thin h-fit w-full mt-4 p-4">
          <Box className=" w-full flex flex-col items-center">
            <Box className="w-[80%] text-sm">
              <SyntaxHighlighter  wrapLines={true} language="javascript" style={nightOwl}
              customStyle={{
                paddingY: '0.5rem',
                paddingLeft:'2rem',
                borderRadius:'15px'
              }}
              >
                {codeString}
              </SyntaxHighlighter>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="h-full w-72">

      </Box>
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default NormalListing;
