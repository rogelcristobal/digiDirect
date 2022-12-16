import { lazy, useContext, useRef, useEffect } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import PageScrollableContext from "../context/PageScrollableContext";
import { Box, Typography, Divider, Button } from "@mui/material";
import TextContent from "../components/TextContent";
import CodeBlock from "../components/CodeBlock";
import Scrollbar from "smooth-scrollbar";
import CodeMenuContext from "../context/CodeMenuContext";
import { RxArrowLeft } from "react-icons/rx";
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
      <Box
        // ref={ref}
        className="block w-full  h-full  box-border pt-0  relative "
      >
        {/* header */}
        {/* content */}
        <Box className="flex h-full w-full  box-border">
          <Box className="h-screen sticky top-0 w-[30rem] flex justify-end">
            <Box className=" h-full flex items-start justify-end w-full  cursor-default  pt-6 box-border">
              {/* wrapper */}
              {/* <Box className="h-full mt-8 ml-4 mr-2 grid place-content-center text-[1.6rem] ">
                 <RxArrowLeft></RxArrowLeft>
              </Box> */}
              <Box className="h-full w-full flex flex-col items-start justify-start p-4  box-border relative">
                {/* title */}
                <TextContent
                  category="Documentation"
                  sx=" w-full h-fit py-2 px-4 "
                  title={
                    <Typography
                      variant="body2"
                      className="normal-case tracking-tight text-[1.6em] font-ukraine-regular  leading-8"
                    >
                      Product listing
                      <br /> templates
                    </Typography>
                  }
                ></TextContent>
              </Box>
            </Box>
            <Divider
              variant="middle"
              textAlign="center"
              orientation="vertical"
              className="absolute h-[95%]  top-1/2 -translate-y-1/2"
            >
              {/* <Typography variant="subtitle2" className="font-ukraine-regular text-[1.4rem]" light>01</Typography> */}
            </Divider>
          </Box>

          {/* articles */}
          <Box ref={ref} className="h-screen w-full  py-60 box-border">
            {templateSections.map((item, id) => (
              <Box
                className="box-border  flex items-start justify-start gap-12  px-16 pb-72  "
                key={id}
                ref={storeRef}
              >
                <ArticleBlock
                  view={item.refView}
                  article={item}
                  titleStyle="text-[1.3rem]  font-ukraine-regular"
                >
                  {item.child.map((child, idx) => (
                    // child renders here
                    <Box className="w-full pt-8 box-border  pl-0" key={idx}>
                      <ArticleBlock
                        article={child}
                        titleStyle="text-[1rem]  font-ukraine-regular"
                      ></ArticleBlock>

                      {/* code snippet and btn group */}
                      {/* <Box className="box-border  flex flex-col w-full pt-4 px-4 items-start justify-start">
                        {child?.snippet && (
                          <Box className="w-full  px-0 mt-2 max-w-[40rem] relative space-y-2.5 ">
                            <CodeBlock content={child}></CodeBlock>

                          
                            <Box className="h-fit w-full flex items-center justify-end  box-border gap-3">
                              <Button
                                startIcon={<TbClipboard className="text-sm" />}
                                onClick={() => handleCopy(child)}
                                variant="contained"
                                size="small"
                                className=" rounded bg-[#2a85ff] p-2 px-4 shadow-none  flex items-center"
                              >
                                <Typography
                                  variant="body1"
                                  className="text-[0.7rem] font-ukraine-medium normal-case "
                                >
                                  Copy
                                </Typography>
                              </Button>
                            </Box>
                          </Box>
                        )}
                      </Box> */}
                    </Box>
                  ))}
                </ArticleBlock>
              </Box>
            ))}
          </Box>
        </Box>
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
