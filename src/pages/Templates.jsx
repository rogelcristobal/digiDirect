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
import { BiChevronRight } from "react-icons/bi";

const Templates = () => {
  const {
    inTheBoxMarkup,
    specsMarkup,
    descriptionSimple,
    descriptionBest,
    descriptionKit,
  } = template();

  const { setState: setScrollPos, setTransparency } =
    useContext(NavScrollContext);
  const scrollRef = useRef(null); // for navbar purposes
  const inTheBoxTab = useRef(null);
  const descriptionTab = useRef(null);
  
  const specsTab = useRef(null);

  const [inTheBoxView, inTheBoxState] = useInView({
    threshold: 0.9,
  });
  const [specsView, specsState] = useInView({ threshold: 0.2 ,rootMargin: '0px 0px 0px'});
  const [descriptionView, descriptionState] = useInView({ threshold: 0.2 });

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
    <Box className="h-full box-border  flex items-start gap-3 rounded-lg pt-[4.5rem] bg-[#ffffff]  w-full ">
      <Box
        ref={scrollRef}
        className="h-full  overflow-auto w-full  flex  items-start justify-center box-border"
      >
        <Box className="w-full  h-auto box-border px-14  pt-10 pb-36 space-y-16">
          {/* page title */}
          <Box className="pb-8  w-full ">
            <PageTitle
              category="general"
              title={
                <Typography
                  variant="h6"
                  className="font-semibold text-[1.7rem] text-gray-700 capitalize "
                >
                  templates
                </Typography>
              }
              subTitle={
                <Typography
                  variant="body1"
                  className="text-gray-700  text-sm font-normal leading-5 "
                >
                  Create a Basic listing template for digiDirect . Copy the raw
                  template and paste in Magento
                </Typography>
              }
            />
          </Box>

          {/* in the box */}

          <Box ref={inTheBoxView} className="w-full box-border space-y-6 ">
            <Box ref={inTheBoxTab} className="">
              <PageTitle
                // category="general"
                title={
                  <Typography
                    variant="h6"
                    className="font-[500] text-[1.2rem]  text-gray-700 capitalize "
                  >
                    What's in the box
                  </Typography>
                }
                subTitle={
                  <Typography
                    variant="body1"
                    className="text-gray-700  text-sm font-normal leading-5 "
                  >
                    Displays the accesories included in the product package.
                    Copy and paste the template in{" "}
                    <span className="font-medium ">'What's in the box'</span>{" "}
                    tab in Magento.
                  </Typography>
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
          <Box ref={specsView} className="space-y-6 box-border ">
            <Box className="w-full box-border space-y-6 ">
              <Box ref={specsTab}>
                <PageTitle
                  category="specifications"
                  title={
                    <Typography
                      variant="h6"
                      className="font-medium text-[1.2rem]  text-gray-700 capitalize "
                    >
                      Specification Simple
                    </Typography>
                  }
                  subTitle={
                    <Typography
                      variant="body1"
                      className="text-gray-700  text-sm font-normal leading-5 "
                    >
                      Displays the specification of the product. Copy and paste
                      it in{" "}
                      <span className="font-medium ">'Specification'</span> tab
                      in Magento.{" "}
                    </Typography>
                  }
                />
              </Box>
              <Box className=" h-fit w-full box-border rounded-3xl    ">
                <CodeSnippetComponent code={specsMarkup}></CodeSnippetComponent>
              </Box>
            </Box>

            <Box className="w-full box-border space-y-6 ">
              <Box>
                <PageTitle
                  title={
                    <Typography
                      variant="h6"
                      className="font-medium text-[1.2rem]  text-gray-700 capitalize "
                    >
                      Specification Categorized
                    </Typography>
                  }
                  subTitle={
                    <Typography
                      variant="body1"
                      className="text-gray-700  text-sm font-normal leading-5 "
                    >
                      Displays the specification of the product. Copy and paste
                      it in{" "}
                      <span className="font-medium ">'Specification'</span> tab
                      in Magento.{" "}
                    </Typography>
                  }
                />
              </Box>
              <Box className=" h-fit w-full box-border rounded-3xl    ">
                <CodeSnippetComponent code={specsMarkup}></CodeSnippetComponent>
              </Box>
            </Box>
          </Box>

          {/* description */}
          <Box ref={descriptionView} className="space-y-6 box-border ">
            <Box className="w-full box-border space-y-6 ">
              <Box ref={descriptionTab}>
                <PageTitle
                  category="Descriptions"
                  title={
                    <Typography
                      variant="h6"
                      className="font-medium text-[1.2rem]  text-gray-700 capitalize "
                    >
                      Description Simple
                    </Typography>
                  }
                  subTitle={
                    <Typography
                      variant="body1"
                      className="text-gray-700  text-sm font-normal leading-5 "
                    >
                      Displays the description of the product. Copy and paste it
                      in <span className="font-medium ">'Description'</span> and{" "}
                      <span className="font-medium">eBay Description</span> tab
                      in Magento.
                    </Typography>
                  }
                />
              </Box>
              <Box className=" h-fit w-full box-border rounded-3xl    ">
                <CodeSnippetComponent
                  code={descriptionSimple}
                ></CodeSnippetComponent>
              </Box>
            </Box>

            {/* description v2 */}
            <Box className="w-full box-border space-y-6 ">
              <Box>
                <PageTitle
                  title={
                    <Typography
                      variant="h6"
                      className="font-mmedium text-[1.2rem]  text-gray-700 capitalize "
                    >
                      Description Advanced
                    </Typography>
                  }
                  subTitle={
                    <Typography
                      variant="body1"
                      className="text-gray-700  text-sm font-normal leading-5 "
                    >
                      Displays the description of the product. Copy and paste it
                      in <span className="font-medium ">'Description'</span> and{" "}
                      <span className="font-medium">eBay Description</span> tab
                      in Magento.
                    </Typography>
                  }
                />
              </Box>
              <Box className=" h-fit w-full box-border rounded-3xl    ">
                <CodeSnippetComponent
                  code={descriptionBest}
                ></CodeSnippetComponent>
              </Box>
            </Box>

            <Box className="w-full box-border space-y-6 ">
              <Box>
                <PageSubTitle
                  title="Description kit "
                  subtitle={
                    <Typography
                      variant="body1"
                      className="text-gray-700  text-[0.90rem] font-normal"
                    >
                      Displays the description of the product. Copy and paste it
                      in <span className="font-medium ">'Description'</span> and{" "}
                      <span className="font-semibold">eBay Description</span>{" "}
                      tab in Magento.
                    </Typography>
                  }
                />
              </Box>
              <Box className=" h-fit w-full box-border rounded-3xl    ">
                <CodeSnippetComponent
                  code={descriptionKit}
                ></CodeSnippetComponent>
              </Box>
            </Box>
          </Box>

          <Box className="w-full box-border space-y-6 ">
            <Box>
              <PageSubTitle
                title="Search Engine Optimization"
                subtitle={
                  <Typography
                    variant="body1"
                    className="text-gray-700  text-[0.90rem] font-normal"
                  >
                    We need to keep an eye on this for every product to clean
                    out incorrect Meta Titles. Use Default Value in digiDirect
                    AU also needs to be ticked for these fields.
                    <span className="font-semibold">
                      {" "}
                      Search Engine Optimization{" "}
                    </span>
                    is crucial because it makes our products/website more
                    visible search engine results page.
                    <br />
                    Paste this in Search Engine Optimization's tab in Magento.
                  </Typography>
                }
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl    ">
              <CodeSnippetComponent
                code={descriptionKit}
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

          <Box className="flex flex-col box-border pl-4 items-start justify-start h-full mt-6 w-full space-y-3 relative">
            {[
              {
                title: "what's in the box",
                reference: {
                  viewState: inTheBoxState,
                  linkTo: inTheBoxTab
                },
              },
              {
                title: "Specifications",
                reference: {
                  viewState: specsState,
                   linkTo: specsTab
                },
              },
               {
                title: "Descriptions",
                reference: {
                  viewState: descriptionState,
                   linkTo: inTheBoxTab
                },
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                underline="none"
                onClick={() => {
                  // let elementPosition =
                  //   item.reference.linkTo.current.getBoundingClientRect().top;
                  // let offsetPosition =
                  //   elementPosition + window.pageYOffset + 50;
                  // alert(elementPosition)

                  scrollRef.current.scrollTo({
                    top: item.reference.linkTo.current.getBoundingClientRect().top
                    // behavior: "smooth",
                  });

                  // item.reference.tab.current.scrollIntoView({
                  //   behavior: "smooth",
                  //   block: "start",
                  //   inline: "end"
                  // })
                }}
                className={`font-poppins text-[0.775rem] font-medium cursor-pointer 
                ${
                  item.reference.viewState
                    ? "text-blue-500"
                    : "text-neutral-600"
                }
                capitalize   flex items-center justify-center`}
              >
                {/* <BiChevronRight
                  className={`text-xl  ${
                    item.reference.viewState
                      ? "text-blue-500"
                      : "text-neutral-300"
                  }`}
                ></BiChevronRight> */}
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
export default Templates;
