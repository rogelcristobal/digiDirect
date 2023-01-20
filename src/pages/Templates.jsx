import { lazy, useContext, useRef, useEffect } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import PageScrollableContext from "../context/PageScrollableContext";
import { Box, Typography, Divider, Button } from "@mui/material";
import TextContent from "../components/TextContent";
import CodeBlock from "../components/CodeBlock";
import CodeMenuContext from "../context/CodeMenuContext";

import { TbArrowLeft } from "react-icons/tb";
import Scrollbar from "smooth-scrollbar";


const ArticleBlock = lazy(() => import("../components/ArticleBlock"));

const Templates = () => {
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

  const { dispatch } = useContext(CodeMenuContext);

  const handleEdit = () => {
    // const pos = event.currentTarget.getBoundingClientRect();
    dispatch({
      type: "TOGGLE_MENU_ON",
      // payload: {
      //   x: pos.left, // position on the clicked codeblock
      //   y: pos.top,
      //   height: pos.height, // height of clicked codeblock
      //   width: pos.width,
      // },
    });
  };

  const ref = useRef(null);

  const { setScrollEl, scrollEl } = useContext(PageScrollableContext);
  // scrollbar animation
  // const options = {
  //   damping: 0.04,
  //   renderByPixels: true,
  // };
  // useEffect(() => {
  //   if (ref.current) {
  //     setScrollEl(ref.current);
  //   }
  //   Scrollbar.init(ref.current, options);
  // }, []);

  return (
    <>

      <Box className="h-16 w-full box-border thin-bottom-divider "></Box>
      <Box className=" min-h-[150vh] h-auto box-border    w-full flex items-start justify-center gap-3 ">
        {/* side nav */}
        <Box className="box-border h-[90vh]  w-72 sticky top-4 flex mt-3 flex-col justify-start items-start p-3 space-y-3 medium-right-divider">
          {/* <Box className="h-8 cursor-pointer w-8 box-border text-black rounded-md text-xl grid place-content-center thin-box-divider">
           &#8592;
          </Box> */}

          <p></p>
          <Box className="h-fit  w-full  flex flex-col items-start justify-start py-2 h-8 px-2 box-border relative  ">
            
          </Box>
        </Box>
        <Box className=" w-full box-border h-full space-y-4 p-3 pb-40 pt-6">

          {/* title */}
          <Box className="px-10  py-4   w-full ">
            <TextContent title={
              <Typography variant="body1" className="text-3xl font-plus font-semibold capitalize">Product listing templates</Typography>
            }></TextContent>  

          </Box>
          
          {/* content */}
          {templateSections.map((item, id) => (
            <Box
              className="box-border  flex items-start justify-start   px-10 py-7 "
              key={id}
              ref={storeRef}
            >
              <ArticleBlock
                id={id}
                view={item.refView}
                article={item}
                titleStyle="text-[1.25rem] leading-[1.85rem] font-plus font-bold 
                 "
              ></ArticleBlock>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="h-80 w-full box-border thin-top-divider thin-box-divider mt-3"></Box>
      {/* <Box className="h-10 w-full box-border  bg-black"></Box> */}
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
