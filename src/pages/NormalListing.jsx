import { useState } from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import CodeBlock from "../components/CodeBlock";
import CodeSnippetComponent from "../components/CodeSnippetComponent";
import Texthighlight from "../components/Texthighlight";
import template from "../template/template";
const NormalListing = () => {
  const [tabState, setTabState] = useState(0);
  const  {inTheBoxMarkup,specsMarkup} = template()
  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
      <Box className="h-full overflow-auto w-full  box-border px-16  pt-16 pb-36">
        <PageTitle
          category="general"
          title="normal listing"
          subTitle="Create and copy a normal listing template for digiDirect products. Copy the raw template or edit it in the customize tab."
        />
        <Box className="mt-36">
          <PageSubTitle
            title=" What's in the box"
            subtitle={`Displays the accesories included in the product package. Copy and paste it in 'What\'s in the box' tab in Magento. `}
          />

          <Tabs
            centered
            value={tabState}
            onChange={(e, newValue) => setTabState(newValue)}
            className=" mt-2 "
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
        </Box>

        {/* content per tab*/}
        <Box className="border-thin h-fit w-full  p-4 box-border">
          <Box className=" w-full flex flex-col items-center box-border">
            <Box className="w-[85%] text-sm box-border">
              <CodeBlock code={inTheBoxMarkup}></CodeBlock>
            </Box>
          </Box>
        </Box>

        <Box className="mt-16">
          <PageSubTitle
            title="Specification"
            subtitle={`Displays the specification of the product. Copy and paste it in 'Specification' tab in Magento. `}
          />
        </Box>

        <CodeSnippetComponent code={specsMarkup}></CodeSnippetComponent>
       
      </Box>

      {/* sidepage nav */}
      <Box className="h-full w-72"></Box>
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default NormalListing;
