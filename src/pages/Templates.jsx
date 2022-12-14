import { lazy, useContext, useRef, useEffect } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import PageScrollableContext from "../context/PageScrollableContext";
import { Box, Typography, Divider, IconButton, Button } from "@mui/material";
import TextContent from "../components/TextContent";
import CodeBlock from "../components/CodeBlock";
import Scrollbar from "smooth-scrollbar";
import CodeMenuContext from "../context/CodeMenuContext";
import {TbClipboard,TbPencil} from 'react-icons/tb'
const ArticleBlock = lazy(() => import("../components/ArticleBlock"));


const Templates = () => {
  const ref = useRef(null);
  const { templateSections, storeRef, pageCategoryRef } = useContext(
    TemplateSectionContext
  ); 
  const { setScrollEl, scrollEl } = useContext(PageScrollableContext);
  const options = {
    damping: 0.03,
    renderByPixels: true,
  };
  useEffect(() => {
    if (ref.current) {
      setScrollEl(ref.current);
    }
    Scrollbar.init(ref.current, options);
  }, []);


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

  const handleEdit = (event,child) => {
    const pos = event.currentTarget.getBoundingClientRect();
    dispatch({
      type: "TOGGLE_MENU_ON",
      payload: { 
        x: pos.left, // position on the clicked codeblock
        y: pos.top, 
        height: pos.height, // height of clicked codeblock
        width: pos.width, 
      },
    });
   
  };
  
  return (
    <Box
      ref={ref}
      className="block w-full pb-52 h-full box-border pt-14  relative "
    >
      {/* header */}
      <Box className=" h-40 w-full    pt-6 box-border">
        {/* wrapper */}
        <Box className="h-full w-full flex flex-col items-start justify-start py-4 px-10 box-border relative">
          {/* title */}
          <TextContent
          category="Documentation"
            sx=" w-fit h-fit py-2 px-2 "
            title={
              <Typography
                variant="body2"
                className="capitalize  text-[1.6rem] font-semibold font-plus  "
              >
                listing templates
              </Typography>
            }
          ></TextContent>
          
        </Box>
        <Divider variant="fullWidth" light></Divider>
      </Box>

      {/* content */}
      <Box className="h-auto w-full  px-10 box-border  pt-12">
        <Box className="h-full w-full space-y-20  px-2 box-border">
          {templateSections.map((item, id) => (
            <Box className="box-border flex flex-col " key={id} ref={storeRef}>
              <ArticleBlock
                view={item.refView}
                article={item}
                titleStyle="text-[1.2rem] font-semibold font-plus"
              >
                {item.child.map((child, idx) => (
                  // child renders here
                  <Box className="w-full pt-8 box-border  pl-0" key={idx}>
                    <ArticleBlock
                      article={child}
                      titleStyle="text-[1rem] font-semibold font-plus"
                    ></ArticleBlock>
                    <Box className="box-border  flex flex-col w-full   items-start justify-start">
                      {child?.snippet && (
                        <Box className="w-full max-w-[40rem] px-4 mt-2 relative space-y-2.5 ">                          
                          <CodeBlock content={child}></CodeBlock>

                          {/* group btn container */}
                          <Box className="h-fit w-full flex items-center justify-end  box-border gap-3">
                             <Button disableElevation  startIcon={<TbPencil className="text-sm"/>} onClick={event=>handleEdit(event,child)} variant="contained" size="small" className=" rounded-md  p-2 px-4 text-[#101626]/80 border-medium-box hover:border-medium-box bg-inherit flex items-center hover:text-[#101626]">
                              <Typography variant="body1" className="text-[0.7rem] font-plus normal-case font-bold tracking-wide">
                                Edit
                              </Typography>
                            </Button>
                            <Button startIcon={<TbClipboard className="text-sm"/>} onClick={()=>handleCopy(child)} variant="contained" size="small" className=" rounded-md bg-[#101626] p-2 px-4 shadow-none  flex items-center">
                              <Typography variant="body1" className="text-[0.7rem] font-plus normal-case tracking-wide">
                                Copy
                              </Typography>
                            </Button>
                           
                          </Box>

                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </ArticleBlock>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
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