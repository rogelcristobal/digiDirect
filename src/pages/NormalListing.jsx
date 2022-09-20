import { useState } from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
const NormalListing = () => {
  const [tabState, setTabState] = useState(0);
  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
      <Box className="h-full overflow-auto w-full  box-border px-20  py-32">
       
        <PageTitle category="general" title="normal listing" subTitle="Create and copy a normal listing template for digiDirect products. Copy the raw template or edit it in the customize tab."/>

        <Tabs
          value={tabState}
          onChange={(e, newValue) => setTabState(newValue)}
          className="border-thin m-0"
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "rgb(59 130 246)", },
            "& .Mui-selected": { color: "rgb(59 130 246)" },
          }}
        >
          <Tab label="raw" className="text-sm capitalize font-medium"></Tab>
          <Tab
            label="customize"
            className="text-sm capitalize font-medium"
          ></Tab>
        </Tabs>

        {/* content per tab*/}
        <Box className="border-thin h-96 w-full mt-4">



        </Box>
        
      </Box>
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default NormalListing;
