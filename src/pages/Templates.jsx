import { useRef, lazy ,useEffect} from "react";
import { Box, Typography, Link } from "@mui/material";
import PageTitle from "../components/PageTitle";
import template from "../template/template";
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
  // const { ref: descriptionRef, inView: descriptionViewState } = useInView();
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
          title: "Included in the box ",
          content: "Displays the specification of the product via. table.",
          snippet: bundleInTheBox,
        },
      ],
    },
    {
      // viewRef: descriptionRef,
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
      <Box className="w-[24rem]   h-full  sticky top-0 px-0 box-border  flex flex-col justify-start pb-8 pt-4 items-start ">
       
        <Box
          className="h-fit     w-full box-border py-2 pr-14  flex flex-col items-end justify-start 
        "
        >
          {/* <Typography
            variant="subtitle1"
            className="text-sm text-[#131918] font-semibold "
          >
            On this page
          </Typography> */}

          <Box className="flex mt-10 flex-col box-border pl-2 items-end justify-start h-full  w-fit space-y-3.5 relative">
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
                title: `Descriptions `,
                reference: {},
              },
              {
                title: "Short description",
                reference: {},
              },
              {
                title: "SEO",
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
            
                className={`font-poppins text-sm   cursor-pointer 
                text-white  transition-all duration-500 ease-in-out 
                flex items-center justify-center `}
                >
               
                {item.title}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      {/* main content */}
      <Box className="w-full h-auto box-border px-14  pt-16 pb-36 space-y-40">
         <Box className=" w-full box-border  overflow-hidden cursor-default  flex flex-col  space-y-5 justify-start items-start  ">
          <PageTitle
            category="product listing"
            
            title={
              <Typography
                variant="subtitle1"
                className=" font-medium  truncate  text-[2.4rem] text-neutral-100 leading-10 "
              >
               Templates
              </Typography>
            }
          />
        </Box>
        {" "}
        {/* space-y-12 between title and child */}
        <Box className="space-y-32 w-full  box-border ">
          {/* space-y-12 between siblings */}
          {articles.map((item, id) => (
            // divided per category
            <Box
              className="box-border w-full scrollMargin flex items-center justify-start"
              // ref={setRefs(item?.viewState)}
              key={id}
              data-id={id}
              ref={storeRef}
            >
              <ArticleBlock article={item} titleFontSize="text-[1.6rem]">
                {item.child?.map((childNode, idx) => (
                  <Box key={idx} className="box-border my-24 w-full ">
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
    </>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
// https://www.cdnfonts.com/lota-grotesque-alt-1.font
export default Templates;
