import { useState, useRef, useContext, useEffect } from "react";
import {
  Box,
  Typography,
  Link,
  Divider,
  Stepper,
  Step,
  StepLabel,
  StepIcon,
} from "@mui/material";
import { AiOutlineCheckCircle } from "react-icons/ai";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import CodeSnippetComponent from "../components/CodeSnippetComponent";
import template from "../template/template";
import NavScrollContext from "../context/NavScrollContext";
import { useInView } from "react-intersection-observer";
const BasicListing = () => {
  const { inTheBoxMarkup, specsMarkup, descriptionSimple, descriptionBest } =
    template();

  const { setState: setScrollPos } = useContext(NavScrollContext);
  const scrollRef = useRef(null);
  
  // const [activeStep, setStep] = useState(0);
  // const { inView, ref, entry } = useInView();

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
        <Box className="w-full max-w-4xl h-auto box-border px-16  pt-12 pb-36 space-y-28">
          {/* page title */}
          <Box className="pb-16  w-full">
            <PageTitle
              category="general"
              title="Basic listing"
              subTitle="Create and copy a Basic listing template for digiDirect products. Copy the raw template or edit it in the customize tab."
            />
          </Box>
          {/* in the box */}
          <Box className=" w-full" >
            <Box>
              <PageSubTitle
                id="gab"
                title=" What's in the box"
                subtitle={`Displays the accesories included in the product package. Copy and paste the template in 'What\'s in the box' tab in Magento. `}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl py-2 mt-4 px-8  ">
              <CodeSnippetComponent
                code={inTheBoxMarkup}
              ></CodeSnippetComponent>
            </Box>
          </Box>

          {/* sepcs */}
          <Box className=" w-fulln">
            <Box>
              <PageSubTitle
                // ref={ref}
                title="Specification"
                subtitle={`Displays the specification of the product. Copy and paste it in 'Specification' tab in Magento. `}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl  mt-4 px-8  ">
              <CodeSnippetComponent code={specsMarkup}></CodeSnippetComponent>
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
            <Box className=" h-fit w-full box-border rounded-3xl  mt-4 px-8  ">
              <CodeSnippetComponent
                code={descriptionSimple}
              ></CodeSnippetComponent>
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
            <Box className=" h-fit w-full box-border rounded-3xl  mt-4 px-8  ">
              <CodeSnippetComponent
                code={descriptionBest}
                canEdit={true}
              ></CodeSnippetComponent>
            </Box>
          </Box>
        </Box>

        {/* page navigation */}
        <Box
          className="h-72 w-72 box-border  p-4 sticky top-0  mt-16 flex flex-col items-start justify-start
        "
        >
          <Typography
            variant="body1"
            className="text-sm text-blue-500 capitalize font-medium"
          >
            {" "}
            on this page
          </Typography>

          <Box className="flex flex-col box-border pl-6 items-start justify-start h-full mt-6 w-full space-y-4 relative">
            {/* <Stepper  activeStep={activeStep} orientation="vertical">
              <Step>
                <StepIcon>
                <AiOutlineCheckCircle></AiOutlineCheckCircle>
                </StepIcon>
                <StepLabel>what's in the box</StepLabel>
              </Step>
            </Stepper> */}

            <Divider
              orientation="vertical"
              variant="fullWidth"
              className="absolute left-0 top-0"
            ></Divider>
            {[
              { title: "what's in the box", path: "#" },
              { title: "specification", path: "#" },
              { title: "description", path: "#" },
              { title: "description ver.2", path: "#" },
            ].map((item, idx) => (
              <Link
                key={idx}
                underline="none"
                href={item.path}
                className="font-poppins text-[0.775rem] font-medium text-neutral-600 capitalize"
              >
                {item.title}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      {/* sidepage nav */}
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default BasicListing;
