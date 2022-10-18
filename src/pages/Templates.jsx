import { useRef } from "react";
import { Box, Typography, Link } from "@mui/material";
import PageTitle from "../components/PageTitle";
import template from "../template/template";
import { BiChevronRight } from "react-icons/bi";
import ArticleBlock from "../components/ArticleBlock";
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

  const pageRef = useRef([]);
  pageRef.current = [];
  const storeRef = (element) => {
    if (element && !pageRef.current.includes(element)) {
      pageRef.current.push(element);
    }
  };
  const articles = [
    {
      category: "What's in the box",
      title: "Included in the box",
      content: "Displays the accesories included in the product package.",
      snippet: inTheBoxMarkup,
    },
    // {
    //   category: "specifications",
    //   title: "Specification simple",
    //   content:
    //     "The purpose of a specification is to provide a description and statement of the requirements of a product, components of a product, the capability or performance of a product, and/or the service or work to be performed to create a product.",
    //   child: [
    //     {
    //       title: "Specification basic",
    //       content: " Displays the specification of the product.",
    //       snippet: specsMarkup,
    //     },
    //     {
    //       title: "Specification categorized",
    //       content: " Displays the specification of the product.",
    //       snippet: specsMarkup,
    //     },
    //   ],
    // },

    // {
    //   category: "product Description",
    //   title: " Descriptions",
    //   content:
    //     " It Explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.",

    //   child: [
    //     {
    //       title: " Description advanced",
    //       content: " Displays the description of the product.",
    //       snippet: descriptionBest,
    //     },
    //     {
    //       title: " Description kit",
    //       content: " Displays the description of the product.",
    //       snippet: descriptionKit,
    //     },
    //   ],
    // },

    // {
    //   category: "short description",
    //   title: " Short Description",
    //   content: " Displays a short description of the product.",
    //   snippet: shortDescription,
    // },
    // {
    //   category: "SEO",
    //   title: "  Search engine optimization",
    //   content:
    //     "We need to keep an eye on this for every product to clean out incorrect Meta Titles. Use Default Value in digiDirect AU also needs to be ticked for these fields. Search Engine Optimization is crucial because it makes our products website more visible search engine results page.",
    //   child: [
    //     {
    //       title: " Meta Title",
    //       snippet: seoMetaTitle,
    //     },
    //     {
    //       title: "Meta Keywords",
    //       snippet: seoMetaKeyword,
    //     },
    //     {
    //       title: "Meta Description",
    //       snippet: seoMetaDescription,
    //     },
    //   ],
    // },
  ];

  return (
    <>

      <Box className="w-full h-auto box-border px-14  pt-12 pb-36 space-y-6">
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
              <Typography variant="subtitle1" className="text-gray-700  ">
                Create a Basic listing template for digiDirect . Copy the raw
                template and paste in Magento.
              </Typography>
            }
          />
        </Box>

     
        {articles.map((item) => {
          
          return (
            <ArticleBlock
              refStore={storeRef}
              article={item}
              key={item.id}
              pageRef={pageRef}
            >
              {item.child?.map((childNode) => (
                <ArticleBlock
                  refStore={storeRef}
                  article={childNode}
                  pageRef={pageRef}
                  key={childNode.id}
                />
              ))}
            </ArticleBlock>
          );
        })}
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
              title: "1",
              reference: {},
            },
            {
              title: "2",
              reference: {},
            },
            {
              title: "3",
              reference: {},
            },
            {
              title: "4",
              reference: {},
            },
            {
              title: "5",
              reference: {},
            },
            {
              title: "6",
              reference: {},
            },
          ].map((item, id) => (
            <Link
              key={id}
              underline="none"
              onClick={() => {
                pageRef.current[id].scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
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
