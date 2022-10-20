import { useState, useRef, useContext } from "react";
import { Box } from "@mui/material";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import template from "../template/template";
import NavScrollContext from "../context/NavScrollContext";
import { useEffect } from "react";
const OpenBox = () => {
  const { inTheBoxMarkup, specsMarkup, descriptionSimple,descriptionBest } = template();

  const { setState: setScrollPos } = useContext(NavScrollContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    const handleScroll = () => {
      let x = element.scrollTop;
      setScrollPos(x);
    };
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
      setScrollPos(0);
    };
  }, []);

  return (
    <Box className="h-full box-border flex items-start gap-3 rounded-lg pt-[4.5rem]   w-full ">
      <Box
        ref={scrollRef}
        className="h-full  overflow-auto w-full  flex  items-start justify-start box-border"
      >
        <Box className="w-full max-w-4xl h-auto box-border px-20  pt-12 pb-36 space-y-20">
          {/* page title */}
          <Box className="pb-16  w-full">
            <PageTitle
              category="general"
              title="OpenBox listing"
              subTitle="Create and copy a OpenBox listing template for digiDirect products. Copy the raw template or edit it in the customize tab."
            />
          </Box>
          {/* in the box */}
          <Box className=" w-full">
            <Box>
              <PageSubTitle
                title=" What's in the box"
                subtitle={`Displays the accesories included in the product package. Copy and paste the template in 'What\'s in the box' tab in Magento. `}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl py-2 mt-0 px-8  ">
             
            </Box>
          </Box>

          {/* sepcs */}
          <Box className=" w-full">
            <Box>
              <PageSubTitle
                title="Specification"
                subtitle={`Displays the specification of the product. Copy and paste it in 'Specification' tab in Magento. `}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl  mt-0 px-8  ">
             
            </Box>
          </Box>

          {/* description */}
          <Box className=" w-full">
            <Box>
              <PageSubTitle
                title="Description"
                subtitle={`Displays the description of the product. Copy and paste it in 'description' tab in Magento. `}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl  mt-0 px-8  ">
              
            </Box>
          </Box>
          {/* description v2 */}
          <Box className=" w-full">
            <Box>
              <PageSubTitle
                title="Description ver.2 "
                subtitle={`Displays the description of the product. Copy and paste it in 'description' tab in Magento. `}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl  mt-0 px-8  ">
             
            </Box>
          </Box>
        </Box>
        <Box
          className="h-72 w-72  border-thin sticky top-0 mt-16 flex flex-col items-start justify-start
        "
        ></Box>
      </Box>

      {/* sidepage nav */}
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default OpenBox;
