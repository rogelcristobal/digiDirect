import { lazy, useContext  } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import PageScrollableContext from "../context/PageScrollableContext";
import { Box, Typography, Divider, Button } from "@mui/material";
import TextContent from "../components/TextContent";
import CodeBlock from "../components/CodeBlock";
import CodeMenuContext from "../context/CodeMenuContext";
import { TbClipboard, TbPlus } from "react-icons/tb";
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

  return (
    <>
    <Box className=" h-[300vh] box-border  pt-20 container mx-auto flex items-start justify-center">
      <Box className="border-thin-box  box-border h-screen w-80 sticky top-20 flex flex-col justify-start items-center">a</Box>
      <Box className="w-full box-border h-full ">
        <Box className="w-full h-full border-thin-box">b</Box>
      </Box>
    
    </Box>
    <Box className="h-80 w-full box-border border-thin-box">
      f
    </Box>  
    </>
    
  );
};

export default Templates;
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
//         <Box className=" h-full w-80 border-medium-box flex flex-col   box-border">
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
//           <Box className="h-full border-medium-box w-full space-y-6  pt-6 box-border">
//             {/* {templateSections.map((item, id) => (
//               <Box
//                 className="box-border border-thin-box  flex items-start justify-start gap-12  px-7 py-7"
//                 key={id}
//                 ref={storeRef}
//               >
//                 <ArticleBlock
//                  id={id}
//                   view={item.refView}
//                   article={item}
//                   titleStyle="text-[1.1rem]  font-ukraine-light text-[#aa9f98]"
//                 >
//                   {item.child.map((child, idx) => (
             
//                     <Box className="w-full pt-8 box-border  pl-0" key={idx}>
//                       <ArticleBlock
//                         article={child}
//                         titleStyle="text-[1rem] font-medium font-inter"
//                       ></ArticleBlock>

                  
//                       <Box className="box-border  flex flex-col w-full pt-4 px-4 items-start justify-start">
//                         {child?.snippet && (
//                           <Box className="w-full  px-0 mt-2 max-w-[40rem] relative space-y-2.5 ">
//                             <CodeBlock content={child}></CodeBlock>

                           
//                             <Box className="h-fit w-full flex items-center justify-end  box-border gap-3">
//                               <Button
//                                 startIcon={<TbClipboard className="text-sm" />}
//                                 onClick={() => handleCopy(child)}
//                                 variant="contained"
//                                 size="small"
//                                 className=" rounded-lg hover:bg-[#0066ff] bg-[#3454D1] py-2 px-4 shadow-none  flex items-center"
//                               >
                                
//                                 <Typography
//                                   variant="body1"
//                                   className="text-[0.775rem] font-inter normal-case "
//                                 >
//                                   Copy
//                                 </Typography>
//                               </Button>
//                             </Box>
//                           </Box>
//                         )}
//                       </Box>
//                     </Box>
//                   ))} 
//                 </ArticleBlock>
//               </Box>
//             ))} */}
//           </Box>
//           <Box className="border-thin-box w-[30rem] pt-6 box-border h-full sticky top-0">a</Box>
//         </Box>
//       </Box>
