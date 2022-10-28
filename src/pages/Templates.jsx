import { useRef, lazy } from "react";
import { Box, Typography, Link } from "@mui/material";
import PageTitle from "../components/PageTitle";
import template from "../template/template";
import {BiLeftArrowAlt} from 'react-icons/bi'
import { useInView } from "react-intersection-observer";
const ArticleBlock = lazy(()=>import("../components/ArticleBlock"))

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
  const { ref: descriptionRef, inView: descriptionViewState } = useInView();
  const storeRef = (element) => {
    if (element && !pageCategoryRef.current.includes(element)) {
      pageCategoryRef.current.push(element);
      // console.log(element)
    }
  };

  // use inview

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
      viewRef: descriptionRef,
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
      content:
        "A short description is text that briefly introduces and describes a topic. In DITA, short desciptions are tagged with",
      snippet: shortDescription,
      child: [
        {
          title: "Bundled Short Description",
          content:
            "Applies when a listing/product is a bundled, displays a short description of the product.",
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
      // viewState:seoRefView
    },
  ];

  return (
    <>
      <Box className="w-[24rem]   h-full  sticky top-2 px-0 box-border  flex flex-col justify-between pb-8 items-center">
        
        <Box className="space-x-4 w-full box-border px-8  flex  justify-start items-center ">
           
          <PageTitle
            category="product listing"
            bottomCategory
            title={
              <Typography
                variant="subtitle1"
                className="font-semibold text-[1.7rem] text-[#00203e] leading-10 "
              >
                Templates
              </Typography>
            }
          />
          {/* <Box className="text-[1.5rem]  grid place-content-center h-fit">
            <BiLeftArrowAlt />
          </Box> */}
          
        </Box>
        {/* on the page */}
        <Box
          className="h-fit       w-full box-border py-2 pl-8  flex flex-col items-start justify-start 
        "
        >
          <Typography
            variant="subtitle1"
            className="text-sm text-gray-800  font-semibold "
          >
            On this page
          </Typography>

          <Box className="flex mt-4 flex-col box-border  pl-2 items-start justify-start h-full  w-fit space-y-3 relative">
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
                hover:text-gray-800 transition-all duration-500 ease-in-out

              //  ${
                id === 3 && descriptionViewState
                  ? "text-blue-500"
                  : "text-gray-500"
              }
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
      </Box>
      <Box className="w-full h-auto box-border px-14  pt-8 pb-36 space-y-12">
        {" "}
        {/* space-y-12 between title and child */}
        {/* <Box className="box-border w-full flex justify-start">
          <Card></Card>
        </Box> */}
        <Box className="space-y-32  box-border ">
          {/* space-y-12 between siblings */}
          {articles.map((item, id) => (
            // divided per category
            <Box
              className="box-border scrollMargin "
              // ref={setRefs(item?.viewState)}
              key={id}
              data-id={id}
              ref={storeRef}
            >
              <ArticleBlock article={item} titleFontSize="text-[1.4rem]">
                {item.child?.map((childNode, idx) => (
                  <Box key={idx} className="box-border my-24 ">
                    {/* my-12 between each child nodes */}
                    <ArticleBlock
                      article={childNode}
                      titleFontSize="text-[1.2rem]"
                    />
                  </Box>
                ))}
              </ArticleBlock>
            </Box>
          ))}
        </Box>
      </Box>

      {/* page navigation */}
    </>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default Templates;
