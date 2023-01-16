import { createContext, useState,useRef } from "react";
import { useInView } from "react-intersection-observer";
import template from "../template/template";

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
  const [shortDescriptionRef, shortDescriptionState] = useInView({threshold: 0.3,});
  const [seoRef, seoState] = useInView({ threshold: 0.4 });

  const templateSections=[
  
    {
      refView: inTheBoxRef,
      isInView: inTheBoxState,
      category: "What's in the box",
      title: "Included in the box",
      content: "Displays the accesories included in the product package. This will display the items in bullets.",
      child: [
        {
          title:'Basic Template',
          snippet:inTheBoxMarkup
        },
        {
          title: 'Bundled template',
          snippet: bundleInTheBox,
        },
      ],
    },
  
    {
      refView: specsRef,
      isInView: specsState,
      category: " Specifications",
      title: "Specifications",
      content:
        "The purpose of a specification template is to provide a description and statement of the requirements of a product, components of a product, the capability or performance of a product, and/or the service or work to be performed to create a product.",
        child: [
          {
             title:'Basic Template',
            snippet: specsMarkup,
            
        },
        {
           title:'Categorized Template',
          // content:
          //   "Applies when the product specification needed to be categorized, specification can hav multiple categories. In that instance you can just copy the tags and append it on the end.",
          snippet: specsMarkupCategorized,
        },
      ],
    },
    
    {
      refView: descriptionRef,
      isInView: descriptionState,
      category: " Descriptions",
      title: "Description",
      content:
        ` A product description in a product listing is a written summary of the key features and benefits of a product. It is designed to inform potential customers about the product and persuade them to make a purchase. The product description should include information such as the product's name, a brief overview of its features, and its key benefits. Additionally, the product description should also include information about the product's dimensions, weight, and any other relevant technical specifications. 
        \n
        The product description should be written in a clear, concise, and easy-to-understand manner, and should be presented in a way that is visually appealing and easy to read. The goal of the product description is to provide customers with all the information they need to make an informed decision about whether to purchase the product. This will help customers to understand the product and its capabilities. Additionally, it will also help customers to troubleshoot any issues they may have with the product, by providing information about common problems and solutions.`,
        
        child: [
          {
             title:'Basic Template',
            snippet: descriptionSimple,
        },
        {
           title:'Advanced Template',
          // content: " Displays the description of the product.",
          snippet: descriptionBest,
        },
        {
          title:'Bundled/Kit Template',
          // content: " Displays the description of the product.",
          snippet: descriptionKit,
        },
      ],
    },

    {
      refView: shortDescriptionRef,
      isInView: shortDescriptionState,
      category: "Short descriptions",
      title: "Short description",
      content:
        "A short description is text that briefly introduces and describes a topic. In DITA, short desciptions are tagged with",
        child: [
          {
            title:'Basic Template',
        snippet: shortDescription,
    },
        {
            title:'Bundled/Kit Template',
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
   
    },
  ]
  return (
    <TemplateSectionContext.Provider value={{templateSections,pageCategoryRef,storeRef}}>
      {children}
    </TemplateSectionContext.Provider>
  );
};

export default TemplateSectionContext;
