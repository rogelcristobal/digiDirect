import { useState } from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import CodeBlock from "../components/CodeBlock";
const NormalListing = () => {
  const [tabState, setTabState] = useState(0);
  const inTheBoxMarkup = `
<ul>
  <li> item 1 </li>
  <li> item 2 </li>
  <li> item 3 </li>
</ul>
  `;

  const specs=()=>{
    return (
  `<style>
      table.specTable {margin: 0 auto;}
      table.specTable tr {vertical-align: top;}
      table.specTable th, table.specTable td {width: 50%; padding-top: 1rem;}
      table.specTable th {text-align: right; padding-right: 1rem;}
      table.specTable td {padding-left:1rem;}
      .item.spec h2 {font-weight: 500; text-align: center; border-bottom: solid 0.05rem black; padding-bottom: 0.5rem; color: #ff6600;}
      .item.spec h3 {font-size: 2.5rem; margin: 2rem auto 0; width: fit-content; padding: 0 5rem 0.3rem 5rem; border-bottom: solid 0.05rem;}
      .item.spec h4 {font-size: 1.6rem;font-weight: 500; text-align: center; text-transform: uppercase; margin-bottom: -0.5rem; text-decoration-line: underline;}
  </style>
  <table class="specTable">
    <tbody>
      <tr>
        <th></th>
        <td></td>
      </tr>
  
      <tr>
        <th></th>
        <td></td>
      </tr>
  
      <tr>
        <th></th>
        <td></td>
      </tr>
    </tbody>
  </table>`
    )
  }

  const specsMarkup=`
<style>
  table.specTable {margin: 0 auto;}
  table.specTable tr {vertical-align: top;}
  table.specTable th, table.specTable td {width: 50%; padding-top: 1rem;}
  table.specTable th {text-align: right; padding-right: 1rem;}
  table.specTable td {padding-left:1rem;}
  .item.spec h2 {font-weight: 500; text-align: center; border-bottom: solid 0.05rem black; padding-bottom: 0.5rem; color: #ff6600;}
  .item.spec h3 {font-size: 2.5rem; margin: 2rem auto 0; width: fit-content; padding: 0 5rem 0.3rem 5rem; border-bottom: solid 0.05rem;}
  .item.spec h4 {font-size: 1.6rem;font-weight: 500; text-align: center; text-transform: uppercase; margin-bottom: -0.5rem; text-decoration-line: underline;}
</style>
<table class="specTable">
  <tbody>
    <tr>
      <th></th>
      <td></td>
    </tr>

    <tr>
      <th></th>
      <td></td>
    </tr>

    <tr>
      <th></th>
      <td></td>
    </tr>
  </tbody>
</table>
  `
  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
      <Box className="h-full overflow-auto w-full  box-border px-20  pt-8 pb-32">
        <PageTitle
          category="general"
          title="normal listing"
          subTitle="Create and copy a normal listing template for digiDirect products. Copy the raw template or edit it in the customize tab."
        />
        <Box className="mt-36">
          <PageSubTitle
            title=" What's in the box"
            subtitle=" What's in the box template info"
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

        <Box className="mt-28">
          <PageSubTitle
            title="Specification"
            subtitle="Specifications template info"
          />
        </Box>
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

          <Box className="border-thin h-fit w-full  p-4 box-border">
          <Box className=" w-full flex flex-col items-center box-border">
            <Box className="w-[85%] text-sm box-border">
              <CodeBlock code={specs()}></CodeBlock>
            </Box>
          </Box>
        </Box>
          
      </Box>



      {/* sidepage nav */}
      <Box className="h-full w-72">

      </Box>
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default NormalListing;
