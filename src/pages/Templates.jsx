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
import PageTitle from "../components/PageTitle"
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
    seoMetaTitle,
    seoMetaKeyword,
    seoMetaDescription,
    shortDescription,
  } = template();

  const { handleScroll } =
    useContext(NavScrollContext);
  const scrollRef = useRef(null); // for navbar purposes
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

  // useEffect(() => {
  //   handleScroll(scrollRef)
  // }, []);

  const scrollView = (el) => {
    el.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "end",
    });
  };

  return (
    <Box className="h-full box-border  flex items-start gap-3 rounded-lg  bg-[#ffffff]  w-full ">
      <Box
        ref={scrollRef}
        className="h-full scroll-smooth overflow-auto w-full  flex pt-[4.2rem] items-start justify-center box-border"
      >
        <Box className="w-full  h-auto box-border px-12  pt-12 pb-36 space-y-20">


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
                <Typography
                  variant="subtitle1"
                  className="text-gray-700  "
                >
                  Create a Basic listing template for digiDirect . Copy the raw
                  template and paste in Magento
                </Typography>
              }
            />
          </Box>

          {/* in the box */}

          <Box ref={inTheBoxView} className="w-full box-border space-y-6">
            <Box className="" ref={inTheBoxTab}>
              <PageTitle
                category="What's in the box"
                title={
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-[1.3rem]  text-gray-800  "
                  >
                    Included in the box
                  </Typography>
                }
                subTitle={
                  <Typography
                    variant="subtitle1"
                    className="text-gray-700   text-[0.9rem]"
                  >
                    Displays the accesories included in the product package.
                   
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
          
          <Divider variant="middle" light></Divider>
          {/* specs */}
          <Box ref={specsView} className="space-y-20 box-border ">
            <Box ref={specsTab} className="w-full box-border space-y-6">
              <Box>
                <PageTitle
                  category="specifications"
                  title={
                    <Typography
                      variant="subtitle1"
                      className="font-medium text-[1.3rem]  text-gray-800  "
                    >
                      Specification simple
                    </Typography>
                  }
                  subTitle={
                    <Typography
                      variant="subtitle1"
                      className="text-gray-700 text-[0.9rem]"
                    >
                      Displays the specification of the product. Copy and paste
                      it in{" "}
                      'Specification'{" "}
                      tab in Magento.{" "}
                    </Typography>
                  }
                />
              </Box>
              <Box className=" h-fit w-full box-border rounded-3xl    ">
                <CodeSnippetComponent code={specsMarkup}></CodeSnippetComponent>
              </Box>
            </Box>

            <Box className="w-full box-border space-y-6">
              <Box>
                <PageTitle
                  title={
                    <Typography
                      variant="subtitle1"
                      className="font-medium text-[1.3rem]  text-gray-800  "
                    >
                      Specification categorized
                    </Typography>
                  }
                  subTitle={
                    <Typography
                      variant="subtitlsubtitle1"
                      className="text-gray-700 text-[0.9rem]"
                    >
                      Displays the specification of the product. Copy and paste
                      it in{" "}
                      'Specification'{" "}
                      tab in Magento.{" "}
                    </Typography>
                  }
                />
              </Box>
              <Box className=" h-fit w-full box-border rounded-3xl    ">
                <CodeSnippetComponent code={specsMarkup}></CodeSnippetComponent>
              </Box>
            </Box>
          </Box>

          <Divider variant="middle" light></Divider>
          {/* description */}
          <Box ref={descriptionView} className="space-y-20 box-border ">
            <Box ref={descriptionTab} className="w-full box-border space-y-6">
              <Box>
                <PageTitle
                  category="product Description"
                  title={
                    <Typography
                      variant="subtitle1"
                      className="font-medium text-[1.3rem]  text-gray-800  "
                    >
                      Description basic
                    </Typography>
                  }
                  subTitle={
                    <Typography
                      variant="subtitlsubtitle1"
                      className="text-gray-700 text-[0.9rem]"
                    >
                      Displays the description of the product. Copy and paste it
                      in 'Description'{" "}
                      and eBay Description{" "}
                      tab in Magento.
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
            <Box className="w-full box-border space-y-6">
              <Box>
                <PageTitle
                  title={
                    <Typography
                      variant="subtitle1"
                      className="font-medium text-[1.3rem]  text-gray-800  "
                    >
                      Description advanced
                    </Typography>
                  }
                  subTitle={
                    <Typography
                      variant="subtitlsubtitle1"
                      className="text-gray-700 text-[0.9rem]"
                    >
                      Displays the description of the product. applies when a
                      product's description has a additional features. Copy and
                      paste it in{" "}
                      'Description' and{" "}
                     eBay Description tab
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

            <Box className="w-full box-border space-y-6">
              <Box>
                <PageTitle
                  title={
                    <Typography
                      variant="subtitle1"
                      className="font-medium text-[1.3rem]  text-gray-800  "
                    >
                      Description kit
                    </Typography>
                  }
                  subTitle={
                    <Typography
                      variant="subtitlsubtitle1"
                      className="text-gray-700 text-[0.9rem]"
                    >
                      Displays the description of the product. Description kit
                      applies when a listing is a kit, consist of 3 product
                      bundled together, Copy and paste it in{" "}
                      'Description' and{" "}
                     eBay Description tab
                      in Magento.
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

          <Divider variant="middle" light></Divider>
          {/* short description */}
          <Box
            ref={shortDescriptionView}
            className="w-full box-border space-y-6"
          >
            <Box ref={shortDescriptionTab} className="">
              <PageTitle
                category="short description"
                title={
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-[1.3rem]  text-gray-800  "
                  >
                    Short Description
                  </Typography>
                }
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl py-2 mt-4  ">
              <CodeSnippetComponent
                code={shortDescription}
              ></CodeSnippetComponent>
            </Box>
          </Box>

          <Divider variant="middle" light></Divider>
          {/* seo */}
          <Box ref={seoView} className="w-full box-border space-y-6">
            <Box ref={seoTab}>
              <PageTitle
                category="SEO"
                title={
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-[1.3rem]  text-gray-800  "
                  >
                    Search engine optimization
                  </Typography>
                }
                subTitle={
                  <Typography
                    variant="subtitlsubtitle1"
                    className="text-gray-700 text-[0.9rem]"
                  >
                    We need to keep an eye on this for every product to clean
                    out incorrect Meta Titles. Use Default Value in digiDirect
                    AU also needs to be ticked for these fields.
                    
                      {" "}
                      Search Engine Optimization{" "}
                    
                    is crucial because it makes our products/website more
                    visible search engine results page.
                    <br />
                    
                  </Typography>
                }
              />
            </Box>
            {/* Meta Title */}
            <Box>
              <PageTitle
                title={
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-[1rem]  text-gray-800  mt-12"
                  >
                    Meta Title
                  </Typography>
                }
              />
              <Box className=" h-fit w-full box-border rounded-3xl    ">
                <CodeSnippetComponent
                  code={seoMetaTitle}
                  lang="text"
                ></CodeSnippetComponent>
              </Box>
            </Box>
            {/* Meta Keywords */}
            <Box>
              <PageTitle
                title={
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-[1rem]  text-gray-800  "
                  >
                    Meta Keywords
                  </Typography>
                }
              />
              <Box className=" h-fit w-full box-border rounded-3xl    ">
                <CodeSnippetComponent
                  code={seoMetaKeyword}
                  lang="text"
                ></CodeSnippetComponent>
              </Box>
            </Box>
            {/* Meta description */}
            <Box>
              <PageTitle
                title={
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-[1rem]  text-gray-800  "
                  >
                    Meta Description
                  </Typography>
                }
              />
              <Box className=" h-fit w-full box-border rounded-3xl    ">
                <CodeSnippetComponent
                  code={seoMetaDescription}
                  lang="text"
                ></CodeSnippetComponent>
              </Box>
            </Box>
          </Box>
        </Box>

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
              
            ].map((item, idx) => (
              <Link
                key={idx}
                underline="none"
                onClick={() => {
                  scrollView(item.reference.linkTo);
                }}
                className={`font-poppins text-[0.775rem] font-medium cursor-pointer 
                ${
                  item.reference.viewState ? "text-sky-600" : "text-gray-500"
                }
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
      </Box>

      {/* sidepage nav */}
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default Templates;
