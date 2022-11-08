import { useRef, lazy } from "react";
import { Box, Typography, Link } from "@mui/material";
import TextContent from "../components/TextContent";
import template from "../template/template";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Card from "../components/Card";
const ArticleBlock = lazy(() => import("../components/ArticleBlock"));

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
  // useinview
  const [inTheBoxRef, inTheBoxState] = useInView({ threshold: 0.3 });
  const [specsRef, specsState] = useInView({ threshold: 0.2 });
  const [descriptionRef, descriptionState] = useInView({ threshold: 0.1 });
  const [shortDescriptionRef, shortDescriptionState] = useInView({threshold: 0.3,});
  const [seoRef, seoState] = useInView({ threshold: 0.3 });

  // string parser

  const parseString = (str) => {
    const res = new DOMParser().parseFromString(str, "text/html").body
      .textContent;
    return res;
  };
  const articles = [
    // inTheBox
    {
      refView: inTheBoxRef,
      isInView: inTheBoxState,
      category: "What's in the box ",
      title: "Included in the box",
      content: "Displays the accesories included in the product package.",
      snippet: inTheBoxMarkup,
      child: [
        {
          title: parseString("Included in the box&#x2015;bundle"),
          content: "Displays the specification of the product via. table.",
          snippet: bundleInTheBox,
        },
      ],
    },
    // specs
    {
      refView: specsRef,
      isInView: specsState,
      category: " Specification",
      title: "Basic specifications ",
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
    // description
    {
      refView: descriptionRef,
      isInView: descriptionState,
      category: " Descriptions",
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
    // short description
    {
      refView: shortDescriptionRef,
      isInView: shortDescriptionState,
      category: "Short descriptions",
      title: " Basic short description ",
      content:
        "A short description is text that briefly introduces and describes a topic. In DITA, short desciptions are tagged with",
      snippet: shortDescription,
      child: [
        {
          title: parseString("Short Description&#x2015;bundle"),
          content:
            "Applies when a listing/product is a bundled, displays a short description of the product.",
          snippet: shortDescriptionKit,
        },
      ],
    },
    // SEO
    {
      refView: seoRef,
      isInView: seoState,
      category: "Search engine optimizations",
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
      <Box className="w-[24rem]   h-full  sticky top-0 px-0 box-border  flex flex-col justify-start pb-8 pt-4 items-center ">
        <Box
          className="h-fit   mt-10   w-full box-border py-2 px-8  flex flex-col items-end justify-start 
        "
        >
          <Box className="flex  flex-col  max-w-[calc(24rem-10rem)] box-border   px-4 items-center justify-start h-full  w-full space-y-4 relative ">
            <Box className=" w-full flex items-center justify-end py-2  box-border">
              <TextContent
                title={
                  <Typography className="text-white">On this page</Typography>
                }
              ></TextContent>
            </Box>
            {articles.map((item, id) => (
              <Link
                key={id}
                underline="none"
                onClick={() => {
                  pageCategoryRef.current[id].scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={` text-[0.9rem] relative  text-right w-full cursor-pointer ${
                  item?.isInView ? "text-white" : "text-gray-600"
                }
                 hover:text-gray-400 transition-all duration-500 ease-in-out 
                flex items-center justify-center `}
              >
                <span className="text-right w-full overflow-x-hidden ">
                  {" "}
                  {item.category}
                </span>

                {/* <motion.div animate={{
                  width: item?.isInView ? 5: 0,
                  height: item?.isInView ? 5: 0
                }} className="absolute bottom-1.5 -right-2.5 h-1 w-[3px]  bg-blue-500"></motion.div> */}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      {/* main content */}
      <Box className="w-full h-auto box-border px-14  pt-12 pb-36 space-y-32">
        <Box className=" w-full max-w-xl box-border  overflow-hidden cursor-default  flex flex-col  space-y-10 justify-between items-start   ">
          <TextContent
            category="product listing"
            title={
              <Typography
                variant="subtitle1"
                className=" font-medium  truncate  text-[2.2rem] text-neutral-100 leading-10 "
              >
                Templates
              </Typography>
            }
          />
        </Box>

        {/* space-y-12 between title and child */}
        <Box className="space-y-32 w-full  box-border ">
          {/* space-y-12 between siblings */}
          {articles.map((item, id) => (
            // divided per category
            <Box
              className="box-border w-full scrollMargin flex items-center justify-start "
              key={id}
              data-id={id}
              ref={storeRef}
            >
              <ArticleBlock
                article={item}
                titleFontSize="text-[1.4rem]"
                view={item?.refView}
              >
                {item.child?.map((childNode, idx) => (
                  <Box key={idx} className="box-border my-16 w-full ">
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
// https://www.cdnfonts.com/lota-grotesque-alt-1.font
export default Templates;
