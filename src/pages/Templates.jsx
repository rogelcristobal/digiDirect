import { useRef, useCallback } from "react";
import { Box, Typography, Link } from "@mui/material";
import PageTitle from "../components/PageTitle";
import template from "../template/template";
import ArticleBlock from "../components/ArticleBlock";
import { useInView } from "react-intersection-observer";

const Templates = () => {
  const {
    inTheBoxMarkup,
    specsMarkup,
    descriptionSimple,
    specsMarkupCategorized,
    descriptionBest,
    descriptionKit,
    seoMetaTitle,
    seoMetaKeyword,
    seoMetaDescription,
    shortDescription,
    shortDescriptionKit,
    bundleInTheBox,
  } = template();

  const pageCategoryRef = useRef([]);
  pageCategoryRef.current = [];
  const storeRef = (element) => {
    if (element && !pageCategoryRef.current.includes(element)) {
      pageCategoryRef.current.push(element);
    }
  };

  // use inview
  const [seoRefView, seoViewState] = useInView();

  const articles = [
    {
      category: "what's in the box ",
      title: "Included in the box",
      content: "Displays the accesories included in the product package.",
      snippet: inTheBoxMarkup,
      child: [
        {
          title: "Included in the box (Bundle)",
          content: "Displays the specification of the product via. table.",
          snippet: bundleInTheBox,
        },
      ],
    },
    {
      category: "Basic specification",
      title: "Specifications ",
      content:
        "The purpose of a specification template is to provide a description and statement of the requirements of a product, components of a product, the capability or performance of a product, and/or the service or work to be performed to create a product.",
      snippet: specsMarkup,
      child: [
        {
          title: "Categorized specification",
          content:
            "Applies when the product specification needed to be categorized, specification can hav multiple categories. In that instance you can just copy the tags and append it on the end.",
          snippet: specsMarkupCategorized,
        },
      ],
    },

    {
      category: " Description",
      title: "Basic description ",
      content:
        " It Explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",
      snippet: descriptionSimple,

      child: [
        {
          title: "Advanced description ",
          content: " Displays the description of the product.",
          snippet: descriptionBest,
        },
        {
          title: "Bundled description ",
          content: " Displays the description of the product.",
          snippet: descriptionKit,
        },
      ],
    },

    {
      category: "short description",
      title: " Basic short description ",
      content: " Displays a short description of the product.",
      snippet: shortDescription,
      child: [
        {
          title: "Bundled Short Description",
          content:
            "Applies when a listing/product is a bundled,displays a short description of the product.",
          snippet: shortDescriptionKit,
        },
      ],
    },
    {
      category: "SEO",
      title: "Search engine optimization",
      content:
        "We need to keep an eye on this for every product to clean out incorrect Meta Titles. Use Default Value in digiDirect AU also needs to be ticked for these fields. Search Engine Optimization is crucial because it makes our products website more visible search engine results page.",
      child: [
        {
          title: " Meta Title",
          snippet: seoMetaTitle,
        },
        {
          title: "Meta Keywords",
          snippet: seoMetaKeyword,
        },
        {
          title: "Meta Description",
          snippet: seoMetaDescription,
        },
      ],
      viewState:seoRefView
    },
  ];


  //   const ref = useRef()
  
  // Use `useCallback` so we don't recreate the function on each render
  // const setRefs = useCallback(
  //   (param) =>(node) => {
  //     Ref's from useRef needs to have the node assigned to `current`
  //     storeRef(node);
      
  //     Callback refs, like the one from `useInView`, is a function that takes the node as an argument
  //     param(node);
  //   },
  //   [],
  // );
  return (
    <>
      <Box className="w-full h-auto box-border px-14  pt-12 pb-36 space-y-8">
        {" "}
        {/* space-y-12 between title and child */}
        {/* page title */}
        <Box className="pb-8  w-full ">
          <PageTitle
            category="general"
            title={
              <Typography
                variant="subtitle1"
                className="font-bold text-[2.2rem] text-gray-800  "
              >
                Templates
              </Typography>
            }
            subTitle={
              <Typography
                variant="subtitle1"
                className="text-gray-800  font-medium"
              >
                Create a Basic listing template for digiDirect . Copy the raw
                template and paste in Magento.
              </Typography>
            }
          />
        </Box>
        <Box className="space-y-32  box-border ">
          {/* space-y-12 between siblings */}
          {articles.map((item) => (
            // divided per category
            <Box
              className="box-border scrollMargin "
              // ref={setRefs(item?.viewState)}
              key={item.id}
              data-id={item.id}
             ref={storeRef}
            >
              <ArticleBlock article={item} titleFontSize="text-[1.6rem]">
                {item.child?.map((childNode) => (
                  <Box key={childNode.id} className="box-border my-20 ">
                    {/* my-12 between each child nodes */}
                    <ArticleBlock
                      article={childNode}
                      titleFontSize="text-[1.3rem]"
                    />
                  </Box>
                ))}
              </ArticleBlock>
            </Box>
          ))}
        </Box>
      
      </Box>

      {/* page navigation */}
      <Box
        className="h-fit mx-6 rounded-2xl w-80 box-border py-4 px-4 sticky top-10   flex flex-col items-start justify-start 
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
              reference: {},
            },
            {
              title: "Specifications",
              reference: {},
            },
            {
              title: `Descrptions `,
              reference: {},
            },
            {
              title: "Short description",
              reference: {},
            },
            {
              title: "Search Engine Optimization",
              reference: {},
            },
          ].map((item, id) => (
            <Link
              key={id}
              underline="none"
              onClick={() => {
                pageCategoryRef.current[id].scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`font-poppins text-[0.775rem] font-medium cursor-pointer 
               text-gray-500 hover:text-gray-800 transition-all duration-500 ease-in-out
                   flex items-center justify-center `}
            >
              {/* <BiChevronRight
                className={`text-xl  ${
                  item.reference.viewState
                    ? "text-sky-600 visible"
                    : "invisible"
                }`}
              ></BiChevronRight> */}
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
