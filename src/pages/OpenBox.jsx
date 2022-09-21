import { useState } from "react";
import {  Box  } from "@mui/material";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import CodeSnippetComponent from "../components/CodeSnippetComponent";
import template from "../template/template";
const OpenBox = () => {
  const  {inTheBoxMarkup,specsMarkup} = template()
  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
      <Box className="h-full overflow-auto w-full  box-border px-14  pt-16 pb-36">
        {/* page title */}
        <PageTitle
          category="general"
          title="OpenBox listing"
          subTitle="Create and copy a normal listing template for digiDirect products. Copy the raw template or edit it in the customize tab."
        />
        {/* in the box */}
        <Box className="mt-36">
          <PageSubTitle
            title=" What's in the box"
            subtitle={`Displays the accesories included in the product package. Copy and paste the template in 'What\'s in the box' tab in Magento. `}
          />
        </Box>
        <CodeSnippetComponent code={inTheBoxMarkup}></CodeSnippetComponent>

          
        {/* sepcs */}
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
export default OpenBox;
