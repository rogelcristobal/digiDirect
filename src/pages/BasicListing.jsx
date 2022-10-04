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
import { InView, useInView } from "react-intersection-observer";
import { BiChevronRight } from "react-icons/bi";
const BasicListing = () => {
  const { inTheBoxMarkup, specsMarkup, descriptionSimple, descriptionBest } =
    template();

  const { setState: setScrollPos, setTransparency } =
    useContext(NavScrollContext);
  const scrollRef = useRef(null); // for navbar purposes
  const inViewOptions = {
    threshold: 0.7,
  
  };
  const inTheBoxTab = useRef(null);
  const specsTab = useRef(null);
  const descriptionTab = useRef(null);
  const descriptionVer2Tab = useRef(null);

 

  const [inTheBoxView, inTheBoxState] = useInView(inViewOptions);
  const [specsView, specsState] = useInView(inViewOptions);
  const [descriptionView, descriptionState] = useInView(inViewOptions);
  const [descriptionVer2View, descriptionVer2State] = useInView(inViewOptions);


  useEffect(() => {
    const element = scrollRef.current;

    const handleScroll = () => {
      let x = element.scrollTop;
      setScrollPos(x);
      setTransparency(true);
    };
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
      setScrollPos(0);
      setTransparency(false);
    };
  }, []);

  return (
    <Box className="h-full box-border flex items-start gap-3 rounded-lg pt-[4.5rem]  w-full ">
      <Box
        ref={scrollRef}
        className="h-full  overflow-auto w-full  flex  items-start justify-center box-border"
      >
        <Box className="w-full  h-auto box-border px-16  pt-12 pb-36 space-y-28">
          {/* page title */}
          <Box className="pb-16  w-full ">
            <PageTitle
              category="general"
              title="Basic listing"
              subTitle={
                <Typography variant="body1" className="text-gray-700 leading-6 text-base font-normal">Create and copy a Basic listing template for digiDirect products. Copy the raw template or edit it in the customize tab.</Typography>
              }
            />
          </Box>

          {/* in the box */}

          <Box ref={inTheBoxView} className="w-full box-border space-y-8 ">
            <Box  ref={inTheBoxTab}>
              <PageSubTitle
                id="gab"
                title=" What's in the box"
                subtitle={
                  <Typography variant="body2" className="text-gray-700 leading-6 text-[0.95rem] font-normal">Displays the accesories included in the product package. Copy and paste the template in <span className="font-semibold ">'What's in the box'</span> tab in Magento.  </Typography>
                  }
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl py-2 mt-4  ">
              <CodeSnippetComponent
                code={inTheBoxMarkup}
              ></CodeSnippetComponent>
            </Box>
          </Box>

          {/* sepcs */}

          <Box  ref={specsView} className="w-full box-border space-y-8 ">
            <Box  ref={specsTab}>
              <PageSubTitle
                title="Specification"
                subtitle={
                  <Typography variant="body2" className="text-gray-700 leading-6 text-[0.95rem] font-normal">Displays the specification of the product. Copy and paste it in <span className="font-semibold ">'Specification'</span> tab in Magento. </Typography>
                  }
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl    ">
              <CodeSnippetComponent code={specsMarkup}></CodeSnippetComponent>
            </Box>
          </Box>

          {/* description */}

          <Box   ref={descriptionView} className="w-full box-border space-y-8 ">
            <Box ref={descriptionTab} >
              <PageSubTitle
                title="Description"
                subtitle={ <Typography variant="body1" className="text-gray-700 leading-6 text-[0.95rem] font-normal">Displays the description of the product. Copy and paste it in <span className="font-semibold ">'Description'</span> and <span className="font-semibold">eBay Description</span> tab in Magento.</Typography>}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl    ">
              <CodeSnippetComponent
                code={descriptionSimple}
              ></CodeSnippetComponent>
            </Box>
          </Box>

          {/* description v2 */}
          <Box ref={descriptionVer2View}  className="w-full box-border space-y-8 ">
            <Box ref={descriptionVer2Tab}>
              <PageSubTitle
                title="Description ver.2 "
                subtitle={<Typography variant="body1" className="text-gray-700 leading-6 text-[0.95rem] font-normal">Displays the description of the product. Copy and paste it in <span className="font-semibold ">'Description'</span> and <span className="font-semibold">eBay Description</span> tab in Magento.</Typography>}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl    ">
              <CodeSnippetComponent
                code={descriptionBest}
                canEdit={true}
              ></CodeSnippetComponent>
            </Box>
          </Box>
        </Box>

        {/* page navigation */}
        <Box
          className="h-72 mx-8 rounded-2xl w-80 box-border  p-6 sticky top-8  mt-20 flex flex-col items-start justify-start 
        "
        >
          <Typography
            variant="body1"
            className="text-sm text-gray-800 capitalize font-medium"
          >
            on this page
          </Typography>

          <Box className="flex flex-col box-border pl-2 items-start justify-start h-full mt-6 w-full space-y-3 relative">
            {[
              {
                title: "what's in the box",
                reference: {
                  tab: inTheBoxTab,
                  viewRef: inTheBoxView,
                  viewState: inTheBoxState,
                },
              },
              {
                title: "specification",
                reference: {
                  tab: specsTab,
                  viewRef: specsView,
                  viewState: specsState,
                },
              },
              {
                title: "description",
                reference: {
                  tab: descriptionTab,
                  viewRef: descriptionView,
                  viewState: descriptionState,
                },
              },
              {
                title: "description ver.2",
                reference: {
                  tab: descriptionVer2Tab,
                  viewRef: descriptionVer2View,
                  viewState: descriptionVer2State,
                },
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                underline="none"
                onClick={() =>
                  item.reference.tab.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                className={`font-poppins text-[0.775rem] font-medium cursor-pointer 
                ${item.reference.viewState ? "text-blue-500" : "text-neutral-600"}
                capitalize   flex items-center justify-center`}
              >
                
                <BiChevronRight className={`text-xl  ${item.reference.viewState ? "text-blue-500" : "text-neutral-300"}`}></BiChevronRight>
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
