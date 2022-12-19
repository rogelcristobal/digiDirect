import { lazy, useContext, useRef, useEffect } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import PageScrollableContext from "../context/PageScrollableContext";
import { Box, Typography, Divider, Button } from "@mui/material";
import TextContent from "../components/TextContent";
import CodeBlock from "../components/CodeBlock";
import Scrollbar from "smooth-scrollbar";
import CodeMenuContext from "../context/CodeMenuContext";
import { RxArrowLeft } from "react-icons/rx";
import { motion } from "framer-motion";
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
        className="block w-full  h-full  box-border pt-0  relative "
      >
        {/* header */}
        {/* content */}
        <Box className="flex h-full w-full  box-border ">
         
          {/* articles */}
          <Box ref={ref} className="h-screen w-full  pb-32 box-border">
            <Box className="h-96  w-full box-border mb-0"></Box>
            {templateSections.map((item, id) => (
              <Box
                className="box-border  py-6 flex items-start justify-start gap-12  px-16 pb-0  overflow-y-hidden"
                key={id}
                ref={storeRef}
              >
                <ArticleBlock
                  view={item.refView}
                  article={item}
                  id={id}
                  titleStyle="text-2xl  font-ukraine-regular"
                >
                
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
