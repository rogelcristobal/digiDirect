import { lazy, useContext, useRef, useEffect } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import PageScrollableContext from "../context/PageScrollableContext";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import TextContent from "../components/TextContent";
import CodeBlock from "../components/CodeBlock";
import Scrollbar from "smooth-scrollbar";
import CodeMenuContext from "../context/CodeMenuContext";
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








  const { dispatch } = useContext(CodeMenuContext);
  const handleclick = (e) => {
    const pos = e.currentTarget.getBoundingClientRect();
    dispatch({
      type: "TOGGLE_MENU_ON",
      payload: { 
        x: pos.x, // position on the clicked codeblock
        y: pos.y, 
        height: pos.height // height of clicked codeblock
      },
    });
  };

  return (
    <Box
      ref={ref}
      className="block w-full pb-52 h-full box-border  relative "
    >
      {/* header */}
      <Box className=" h-52 w-full    pt-6 box-border">
        {/* wrapper */}
        <Box className="h-52 w-full flex flex-col items-start justify-start py-4 px-10 box-border relative">
          {/* title */}
          <TextContent
            sx=" w-fit h-fit py-2 px-2  border-thin-box"
            title={
              <Typography
                variant="body1"
                className="capitalize  text-[1.7rem] font-semibold font-plus  "
              >
                listing templates
              </Typography>
            }
          ></TextContent>
          
        </Box>
        <Divider variant="fullWidth" light></Divider>
      </Box>

      {/* content */}
      <Box className="h-auto w-full  px-10 box-border  pt-20">
        <Box className="h-full w-full space-y-28 px-2 box-border">
          {templateSections.map((item, id) => (
            <Box className="box-border flex flex-col " key={id} ref={storeRef}>
              <ArticleBlock
                view={item.refView}
                article={item}
                titleStyle="text-[1.3rem] font-semibold font-plus"
              >
                {item.child.map((child, idx) => (
                  // child renders here
                  <Box className="w-full pt-12 box-border  pl-0" key={idx}>
                    <ArticleBlock
                      article={child}
                      titleStyle="text-[1rem] font-semibold font-plus"
                    ></ArticleBlock>
                    <Box className="box-border  flex flex-col w-full   items-start justify-start">
                      {child?.snippet && (
                        <Box onClick={handleclick} className="w-full max-w-[40rem]  h-full  p-4  relative rounded-xl">
                          
                          
                          <CodeBlock content={child}></CodeBlock>
                          
                          
                          {/* <div className="absolute bottom-2.5 border-thin-box box-border right-4 h-11  w-52 flex items-center rounded-lg justify-start p-2  ">
                            <IconButton  variant="contained" size="small" className=" rounded-md text-gray-500/70   ">
                              <TbClipboard></TbClipboard> 
                            </IconButton>
                          </div> */}
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