import { useState,useRef,useContext } from "react";
import { Box } from "@mui/material";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import CodeSnippetComponent from "../components/CodeSnippetComponent";
import template from "../template/template";
import NavScrollContext from "../context/NavScrollContext";
import { useEffect } from "react";
const NormalListing = () => {
  const { inTheBoxMarkup, specsMarkup,descriptionSimple } = template();

  
  const {  setState: setScrollPos } =useContext(NavScrollContext);
  const scrollRef = useRef(null)

  useEffect(() => {
    const element = scrollRef.current;
    const handleScroll = () => {
      let x = element.scrollTop;
      setScrollPos(x);
    };
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
      setScrollPos(0)
    };
  }, []);
 
  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg pt-[4.5rem]   ">
      <Box ref={scrollRef} className="h-full overflow-auto w-full  box-border px-16  pt-12 pb-36 space-y-16">
        {/* page title */}
        <Box className="pb-16">
        <PageTitle
          category="general"
          title="normal listing"
          subTitle="Create and copy a normal listing template for digiDirect products. Copy the raw template or edit it in the customize tab."
        />
        </Box>
        {/* in the box */}
        <Box>
          <Box>
            <PageSubTitle
              title=" What's in the box"
              subtitle={`Displays the accesories included in the product package. Copy and paste the template in 'What\'s in the box' tab in Magento. `}
            />
          </Box>
          <Box className=" h-fit w-full box-border rounded-3xl py-2 mt-0 px-8  ">
            <CodeSnippetComponent code={inTheBoxMarkup}></CodeSnippetComponent>
          </Box>
        </Box>

        {/* sepcs */}
        <Box>
          <Box>
            <PageSubTitle
              title="Specification"
              subtitle={`Displays the specification of the product. Copy and paste it in 'Specification' tab in Magento. `}
            />
          </Box>
          <Box className=" h-fit w-full box-border rounded-3xl  mt-0 px-8  ">
            <CodeSnippetComponent code={specsMarkup}></CodeSnippetComponent>
          </Box>
        </Box>

        {/* description */}
        <Box>
          <Box>
            <PageSubTitle
              title="Description"
              subtitle={`Displays the description of the product. Copy and paste it in 'description' tab in Magento. `}
            />
          </Box>
          <Box className=" h-fit w-full box-border rounded-3xl  mt-0 px-8  ">
            <CodeSnippetComponent code={descriptionSimple} canEdit={true}></CodeSnippetComponent>
          </Box>
        </Box>
      </Box>
      <Box className="h-full w-72"></Box>

      {/* sidepage nav */}
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default NormalListing;