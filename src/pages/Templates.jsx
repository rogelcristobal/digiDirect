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
import PageTitle from "../components/PageTitle";
import CodeSnippetComponent from "../components/CodeSnippetComponent";
import template from "../template/template";
import NavScrollContext from "../context/NavScrollContext";
import { useInView, InView } from "react-intersection-observer";
import { BiChevronRight } from "react-icons/bi";

const Templates = () => {
  const {
    inTheBoxMarkup,
    specsMarkup,
    descriptionSimple,
    descriptionBest,
    descriptionKit,
    seoMetaTitle,
    seoMetaKeyword,
    seoMetaDescription,
    shortDescription,
  } = template();

  // for navbar purposes
  const inTheBoxTab = useRef(null);
  const descriptionTab = useRef(null);
  const seoTab = useRef(null);
  const shortDescriptionTab = useRef(null);
  const specsTab = useRef(null);

  const [inTheBoxView, inTheBoxState] = useInView({
    threshold: 0.9,
  });
  const [specsView, specsState] = useInView({
    threshold: 0.3,
    rootMargin: "0px 0px 0px",
  });
  const [descriptionView, descriptionState] = useInView({ threshold: 0.2 });
  const [seoView, seoState] = useInView({ threshold: 0.5 });
  const [shortDescriptionView, shortDescriptionState] = useInView({
    threshold: 0.9,
  });

  const pageRef = useRef([]);
  pageRef.current = [];
  const storeRef = (element) => {
    if (element && !pageRef.current.includes(element)) {
      pageRef.current.push(element);
    }
  };

  return (
    <>
      <Box className="w-full  h-auto box-border px-14  pt-12 pb-36 space-y-6">
        {/* page title */}
        <Box className="pb-8  w-full ">
          <PageTitle
            category="general"
            title={
              <Typography
                variant="subtitle1"
                className="font-semibold text-[1.9rem] text-gray-800  "
              >
                Templates
              </Typography>
            }
            subTitle={
              <Typography variant="subtitle1" className="text-gray-500  ">
                Create a Basic listing template for digiDirect . Copy the raw
                template and paste in Magento
              </Typography>
            }
          />
        </Box>

        {/* in the box */}
        {[
          {
            category: "What's in the box",
            title: "Included in the box",
            content: "Displays the accesories included in the product package.",
            snippet: inTheBoxMarkup,
          },
          {
            category: "specifications",
            title: "Specification simple",
            content: " Displays the specification of the product.",
            snippet: specsMarkup,
          },
          {
            title: "Specification categorized",
            content: " Displays the specification of the product.",
            snippet: specsMarkup,
          },
          {
            category: "product Description",
            title: " Description basic",
            content: " Displays the description of the product.",
            snippet: descriptionSimple,
          },
          {
            category: "product Description",
            title: " Description basic",
            content: " Displays the description of the product.",
            snippet: descriptionSimple,
          },
          {
            title: " Description advanced",
            content: " Displays the description of the product.",
            snippet: descriptionBest,
          },
          {
            title: " Description kit",
            content: " Displays the description of the product.",
            snippet: descriptionKit,
          },
          {
            category: "short description",
            title: " Short Description",
            content: " Displays a short description of the product.",
            snippet: shortDescription,
          },
          {
            category: "SEO",
            title: "  Search engine optimization",
            content:
              "We need to keep an eye on this for every product to clean out incorrect Meta Titles. Use Default Value in digiDirect AU also needs to be ticked for these fields. Search Engine Optimization is crucial because it makes our products website more visible search engine results page.",
          },
          {
            title: " Meta Title",
            content: " Displays the description of the product.",
            snippet: seoMetaTitle,
          },
          {
            title: "Meta Keywords",
            content: " Displays the description of the product.",
            snippet: seoMetaKeyword,
          },
          {
            title: "Meta Description",
            content: " Displays the description of the product.",
            snippet: seoMetaDescription,
          },
        ].map((item, idx) => (
          <Box key={idx} ref={storeRef} className="bg-red-400">
            <Box className="w-full box-border space-y-6 ">
              <PageTitle
                category={item?.category}
                title={
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-[1.3rem]  text-gray-800  "
                  >
                    {item.title}
                  </Typography>
                }
                subTitle={
                  <Typography
                    variant="subtitle1"
                    className="text-gray-700   text-[0.9rem]"
                  >
                    {item.content}
                  </Typography>
                }
              />
              {item.snippet && (
                <Box className=" h-fit w-full box-border rounded-xl  mt-4">
                  <CodeSnippetComponent
                    code={item?.snippet}
                  ></CodeSnippetComponent>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Meta Title */}

      {/* page navigation */}
      <Box
        className="h-72 mx-6 rounded-2xl w-80 box-border py-4 px-4 sticky top-10   flex flex-col items-start justify-start 
        "
      >
        <Typography
          variant="subtitle1"
          className="text-sm text-gray-800  font-medium"
        >
          On this page
        </Typography>

        <Box className="flex flex-col box-border pl-2 items-start justify-start h-full mt-6 w-full space-y-3 relative">
          {[
            {
              title: "What's in the box",
              reference: {
                viewState: inTheBoxState,
                linkTo: inTheBoxTab,
              },
            },
            {
              title: "Specifications",
              reference: {
                viewState: specsState,
                linkTo: specsTab,
              },
            },
            {
              title: "Product Description",
              reference: {
                viewState: descriptionState,
                linkTo: descriptionTab,
              },
            },
            {
              title: "Short Description",
              reference: {
                viewState: shortDescriptionState,
                linkTo: shortDescriptionTab,
              },
            },
            {
              title: "SEO",
              reference: {
                viewState: seoState,
                linkTo: seoTab,
              },
            },
            {
              title: "SEO",
              reference: {
                viewState: seoState,
                linkTo: seoTab,
              },
            },
            {
              title: "SEO",
              reference: {
                viewState: seoState,
                linkTo: seoTab,
              },
            },
            {
              title: "SEO",
              reference: {
                viewState: seoState,
                linkTo: seoTab,
              },
            },
            {
              title: "SEO",
              reference: {
                viewState: seoState,
                linkTo: seoTab,
              },
            },
            {
              title: "SEO",
              reference: {
                viewState: seoState,
                linkTo: seoTab,
              },
            },
            {
              title: "SEO",
              reference: {
                viewState: seoState,
                linkTo: seoTab,
              },
            },
          ].map((item, id) => (
            <Link
              key={id}
              underline="none"
              onClick={() =>
                pageRef.current[id].scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  // inline: "end",
                })
              }
              className={`font-poppins text-[0.775rem] font-medium cursor-pointer 
                ${item.reference.viewState ? "text-sky-600" : "text-gray-500"}
                   flex items-center justify-center`}
            >
              <BiChevronRight
                className={`text-xl  ${
                  item.reference.viewState
                    ? "text-sky-600 visible"
                    : "invisible"
                }`}
              ></BiChevronRight>
              {item.title}
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default Templates;
