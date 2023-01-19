import { createContext, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import template from "../template/template";
import CodeBlock from "../components/CodeBlock";
import { Box, Typography } from "@mui/material";
import TextContent from "../components/TextContent";

const TemplateSectionContext = createContext();

export const TemplateSectionProvider = ({ children }) => {
  const pageCategoryRef = useRef([]);
  pageCategoryRef.current = [];
  const storeRef = (element) => {
    if (element && !pageCategoryRef.current.includes(element)) {
      pageCategoryRef.current.push(element);
      // console.log(element)
    }
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

  const [inTheBoxRef, inTheBoxState] = useInView({ threshold: 0.2 });
  const [specsRef, specsState] = useInView({ threshold: 0.3 });
  const [descriptionRef, descriptionState] = useInView({ threshold: 0.1 });
  const [shortDescriptionRef, shortDescriptionState] = useInView({
    threshold: 0.3,
  });
  const [seoRef, seoState] = useInView({ threshold: 0.4 });

  const templateSections = [
    {
      refView: inTheBoxRef,
      isInView: inTheBoxState,
      title: `What's in the box`,
      content: (
        <Box className="box-border space-y-12">
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
          <TextContent title="What's in the box (kit/bundle)">
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
      refView: specsRef,
      isInView: specsState,
      category: " Specifications",
      title: "Specifications",
      content: (
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
      refView: descriptionRef,
      isInView: descriptionState,
      category: " Descriptions",
      title: "Description",
      content: (
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
            <Box className="py-6">
              <CodeBlock text="Usage" content={descriptionSimple} />
            </Box>
            As demonstrated by the examples provided, the product description
            includes the product name, its key features, the Global Trade Item
            Number (GTIN) and the Manufacturer Part Number (MPIN).
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
      refView: shortDescriptionRef,
      isInView: shortDescriptionState,
      category: "Short descriptions",
      title: "Short description",
      content: (
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
          making it easy for potential customers to understand the product's key
          selling points. It is an efficient way to present information on a
          product listing or documentation website, as it provides a clear and
          organized overview of the product's features and benefits.
        </TextContent>
        </Box>
      ),
      child: [
        {
          title: "Basic Template",
          snippet: shortDescription,
        },
        {
          title: "Bundled/Kit Template",
          // content:
          //   "Applies when a listing/product is a bundled, displays a short description of the product.",
          snippet: shortDescriptionKit,
        },
      ],
    },

    {
      refView: seoRef,
      isInView: seoState,
      category: "Search engine optimizations",
      title: "Search engine optimization",
      content: (
        <Box className="box-border space-y-6">
          <TextContent title="Meta title">
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
            <Box class8ame="py-6">
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
    <TemplateSectionContext.Provider
      value={{ templateSections, pageCategoryRef, storeRef }}
    >
      {children}
    </TemplateSectionContext.Provider>
  );
};

export default TemplateSectionContext;
