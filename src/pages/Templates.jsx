import { lazy, useContext, useRef, useEffect ,createRef} from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import PageScrollableContext from "../context/PageScrollableContext";
import { Box, Typography, Divider, Button } from "@mui/material";
import TextContent from "../components/TextContent";
import CodeBlock from "../components/CodeBlock";
import CodeMenuContext from "../context/CodeMenuContext";
import template from "../template/template";
import { TbArrowLeft } from "react-icons/tb";
import Scrollbar from "smooth-scrollbar";
import SampleContext from "../context/SampleContext";
const ArticleBlock = lazy(() => import("../components/ArticleBlock"));

const Templates = () => {
  const ref = useRef([]);
  const { templateSections, storeRef, pageCategoryRef } = useContext(
    TemplateSectionContext
  );
  const mergeTagsAndStyles = ({ tags, styles }) => {
    if (!styles) {
      return tags;
    } else {
      return `<style>${styles}</style>` + tags;
    }
  };
  const handleCopy = (data) => {
    navigator.clipboard.writeText(mergeTagsAndStyles(data.snippet));
  };
 
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

  
  const content = [
    {
      title: "What's in the box",
      text: (
        <Box  className="box-border space-y-12">
          <TextContent>
            Refers to the items that are included with a product when it is
            purchased. This information is often listed in the product
            description or specifications on a website or in a catalog. It is
            important to provide accurate and detailed information about what is
            included with the product in order to avoid confusion and customer
            dissatisfaction.
            <br />
            <br />
            This information can include items such as accessories, manuals, and
            any other components that are necessary for the product to function
            properly.
            <Box className="py-6">
              <CodeBlock text="Usage" content={inTheBoxMarkup} />
            </Box>
            This template will display the included items in bullets.
          </TextContent>
          <TextContent  title="What's in the box (kit/bundle)">
            This template can be utilized when the product listing pertains to a
            kit or bundle, which includes two or more products within the
            package.
            <Box className="py-6">
              <CodeBlock content={bundleInTheBox}></CodeBlock>
            </Box>
          </TextContent>
        </Box>
      ),
    },
    {
      title: "Specifications",
      text: (
        <Box className="box-border space-y-8">
          <TextContent>
            Product specifications, also known as product specs, are a set of
            details that describe the technical characteristics and features of
            a product. They are typically listed in the product description or
            specifications section of a website or catalog. Product
            specifications can include information such as dimensions, weight,
            materials, power requirements, and any other technical details that
            are relevant to the product.
            <br /> <br />
            They can also include information about the product's performance,
            such as its capacity, speed, or efficiency. Providing accurate and
            detailed product specifications is important in order to help
            customers make informed purchasing decisions and to ensure that the
            product meets their needs and expectations.
            <Box className="py-6">
              <CodeBlock text="Usage" content={specsMarkup} />
            </Box>
          </TextContent>
          <TextContent title="Specifications (kit/bundle)">
            This template can be utilized when the product listing pertains to a
            kit or bundle, which includes two or more products within the
            package.
            <Box className="py-6">
              <CodeBlock content={specsMarkupCategorized}></CodeBlock>
            </Box>
          </TextContent>
        </Box>
      ),
    },
    {
      title: "Descriptions",
      text: (
        <Box className="box-border space-y-12">
          <TextContent>
            A product description in a product listing is a written summary of
            the key features and benefits of a product. It is designed to inform
            potential customers about the product and persuade them to make a
            purchase. The product description should include information such as
            the product's name, a brief overview of its features, and its key
            benefits. Additionally, the product description should also include
            information about the product's dimensions, weight, and any other
            relevant technical specifications.
            <Box className="py-6">
              <CodeBlock text="Usage" content={descriptionSimple} />
            </Box>
            As demonstrated by the examples provided, the product description
            includes the product name, its key features, the Global Trade Item
            Number (GTIN) and the Manufacturer Part Number (MPIN).
            <br />
            <br />
            The product description should be written in a clear, concise, and
            easy-to-understand manner, and should be presented in a way that is
            visually appealing and easy to read. The goal of the product
            description is to provide customers with all the information they
            need to make an informed decision about whether to purchase the
            product. This will help customers to understand the product and its
            capabilities. Additionally, it will also help customers to
            troubleshoot any issues they may have with the product, by providing
            information about common problems and solutions.
          </TextContent>
          <TextContent title="Descriptions (kit/bundle)">
            This template can be utilized when the product listing pertains to a
            kit or bundle, which includes two or more products within the
            package.
            <Box className="py-6">
              <CodeBlock content={descriptionBest}></CodeBlock>
            </Box>
          </TextContent>
          <TextContent title="Descriptions (kit/bundle)">
            This template can be utilized when the product listing pertains to a
            kit or bundle, which includes two or more products within the
            package.
            <Box className="py-6">
              <CodeBlock content={descriptionKit}></CodeBlock>
            </Box>
          </TextContent>
        </Box>
      ),
    },
    {
      title: "Short description",
      text: (
        <Box className="box-border space-y-6">
          <TextContent>
            Short description shows key information about a product in a concise
            and easy-to-read manner. It typically includes a list of the most
            important features and benefits of a product, presented in bullet
            point form.
            <Box className="py-6">
              <CodeBlock text="Usage" content={shortDescription} />
            </Box>
            This format allows for quick and easy scanning of the information,
            making it easy for potential customers to understand the product's
            key selling points. It is an efficient way to present information on
            a product listing or documentation website, as it provides a clear
            and organized overview of the product's features and benefits.
          </TextContent>
        </Box>
      ),
    },
    {
      title: "Search engine optimization",
      text: (
        <Box  className="box-border space-y-12">
          <TextContent  title="Meta title">
            A meta title is a short text that appears at the top of a web page,
            typically in the browser tab. It is used to describe the content of
            the page and it helps search engines understand what the page is
            about. In the context of a product listing, the meta title is the
            title that is used to represent the product in search engine results
            pages, when people search for products similar to the one you are
            selling. It is an important element of search engine optimization
            (SEO) as it helps to increase the visibility and click-through rate
            of the product listing.
            <Box className="py-6">
              <CodeBlock text="Usage" content={seoMetaTitle} />
            </Box>
            It's important to make sure that the meta title is unique to each
            product page and avoid duplication across different pages on the
            website.
          </TextContent>
          <TextContent title="Meta keywords">
            Meta keywords are a type of meta tag that can be included in the
            HTML code of a webpage. When creating a product listing, these
            keywords can be used to provide a list of words or phrases that
            describe the product.
            <Box className="py-6">
              <CodeBlock text="Usage" content={seoMetaKeyword} />
            </Box>
            These keywords can help search engines determine the relevance of
            the product listing to a user's search query. In a Content
            Management System (CMS), meta keywords can typically be added to a
            product page by editing the HTML code or by using a plugin or
            module. It is important to choose relevant and specific keywords
            that accurately describe the product.
          </TextContent>
          <TextContent title="Meta description">
            A meta description is a summary of a webpage's content that appears
            in search results. In a product listing, it should provide key
            features, benefits, and relevant information about the product. Keep
            it under 155 characters.
            <br />
            <Box className="py-6">
              <CodeBlock
                text="Sample meta description"
                content={seoMetaDescription}
              />
            </Box>
            <br />
            <TextContent title="Meta description guidelines">
              <ul>
                <li>ProductTitle should always be present, </li>
                <li>digiDirect should always be present, </li>
                <li>
                  it is preferable that the wording "buy" or "purchase" is
                  present (this is primary ecommerce Call to Action CTA).
                </li>
                <li>
                  Gaming and tech should be more simplified for a less
                  "tech-savy" audience and focused more on urgency (today,
                  available)
                </li>
                <li>
                  For cameras and other traditional photo categories, features
                  tend to be more important and these customers are more
                  tech-savy
                </li>
                <li>
                  Targeting the Meta Description for a use-case the product is
                  particularly suited for is a good excuse to mention a key
                  feature (or three) about the product that you believe searches
                  may look for (Google auto-suggestions commonly tell you this
                  if you enter the Product Title into search){" "}
                </li>
                <li>
                  A way of thinking about which features to include is "what
                  would the customer be searching for" ie. do they wonder how
                  many megapixel X camera has?
                </li>
                <li>
                  Meta Descriptions should not be too long. What is considered
                  long is relative but 150 characters is long and 170 would be
                  too long. Less is more!
                </li>
              </ul>
            </TextContent>
          </TextContent>
        </Box>
      ),
    },
  ];
  
  return (
    <>
      <Box className="h-16 w-full box-border thin-bottom-divider "></Box>
      <Box className=" min-h-[150vh] h-auto box-border    w-full flex items-start justify-center gap-3 ">
        {/* side nav */}
        <Box className="box-border h-[90vh]  w-72 sticky top-4 flex mt-3 flex-col justify-start items-start p-3 space-y-3 thin-right-divider">
          <Box className="  w-full  flex flex-col items-start justify-start py-2 h-8 px-2 box-border relative"></Box>
        </Box>
        <Box className=" w-full box-border h-full space-y-4 p-3 pb-40 pt-12">
          {/* title */}
          <Box className="px-10  w-full ">
            <TextContent
              title={
                <Typography
                  variant="body1"
                  className="text-3xl font-plus  font-semibold capitalize"
                >
                  Product listing templates
                </Typography>
              }
            ></TextContent>
          </Box>

          {/* content */}
          <Box className="box-border  flex flex-col items-start justify-start    ">
            {content.map((item, id) => (
              <ArticleBlock
                id={id}
                title={item.title}
                titleStyle="text-[1.40rem] leading-[1.85rem] font-plus font-semibold"
              >
                {item.text}
              </ArticleBlock>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="h-80 w-full box-border thin-top-divider thin-box-divider mt-3"></Box>
    </>
  );
};

export default Templates;
// https://beta.openai.com/docs/guides/code/editing-code

// https://wemakefab.com/journal/gs-project-crm
//https://www.awwwards.com/sites/plastic
//https://wearemotto.com/
// https://framer.com/projects/The-Framer-book-Example-animations-copy--ec9MIc5L6HHUsnjJ4yf3-1i8sK?node=jJgfM9Jjy-page
// https://dribbble.com/UI8
// https://cdn.dribbble.com/users/1723105/screenshots/17358687/media/9d9146fb5dd679b892cecf8fdb0c9f1a.png
// https://www.pinterest.ph/search/pins/?q=twitter%20ui&rs=typed

// https://coolors.co/696d7d-6f9283-8d9f87-cdc6a5-f0dcca
// 000000-2f4550-586f7c-b8dbd9-f4f4f9

// twitter like 071013-23b5d3-75abbc-a2aebb-dfe0e2

// <Box className="flex   mx-auto container pb-52 h-screen box-border pt-12  relative ">
//         {/* header */}
//         <Box className=" h-full w-80 thin-box-divider flex flex-col   box-border">
//           {/* wrapper */}
//           <Box className="h-full w-full  flex flex-col items-start justify-center py-4  px-10 box-border relative ">
//             {/* title */}
//             <TextContent
//               // category="Documentation"
//               sx=" w-fit h-fit py-2 px-2 "
//               title={
//                 <Typography
//                   variant="h2"
//                   className="capitalize  text-[38px] leading-[40px]  font-ukraineHead-regular  "
//                 >
//                   product listing <br /> templates
//                 </Typography>
//               }
//             ></TextContent>
//           </Box>
//           {/* <Divider variant="fullWidth" light></Divider> */}
//         </Box>

//         {/* content */}
//         <Box className="bg-blue-100 h-full w-full flex items-start justify-center px-16 box-border gap-8  pt-12">

//           {/* articles */}
//           <Box className="h-full thin-box-divider w-full space-y-6  pt-6 box-border">

// //           </Box>
// //           <Box className=" w-[30rem] pt-6 box-border h-full sticky top-0">a</Box>
//          </Box>
//       </Box>
