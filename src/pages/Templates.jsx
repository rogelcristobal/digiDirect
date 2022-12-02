import { lazy, useContext } from "react";
import TemplateSectionContext from "../context/TemplateSectionContext";
import { Box, Typography } from "@mui/material";
import TextContent from "../components/TextContent";
import CodeBlock from "../components/CodeBlock";

const ArticleBlock = lazy(() => import("../components/ArticleBlock"));

const Templates = () => {
  // const ref = useRef(null);
  // const { scrollEl } = useContext(PageScrollableContext);
  // const scrollbar = Scrollbar.init(scrollEl);
  // const [hoverState, setHoverState] = useState(false);

  // const mouseEnterHover = () => {
  //   setHoverState((prev) => (prev = !hoverState));
  // };
  // const underlineAnimation = {
  //   animate: {
  //     ...(hoverState ? { width: "100%" } : { width: "0%" }),
  //   },
  // };
  const { templateSections } = useContext(TemplateSectionContext);
  return (
    <Box className="flex flex-col items-start justify-start w-full  h-full overflow-y-scroll box-border px-12 pt-8 space-y-24">
      <TextContent
        sx=" w-fit h-fit py-2  px-2"
        title={
          <Typography
            variant="body1"
            className="capitalize font-general text-[1.8rem] font-medium text-neutral-100"
          >
            templates
          </Typography>
        }
      ></TextContent>
      <Box className="h-full w-full   box-border">
        <Box className="h-full w-full space-y-12 px-2">
          {templateSections.map((item, id) => (
            <ArticleBlock key={id} article={item} titleStyle="text-[1.3rem] font-medium">
              {/* {item.child.map((child,idx) => (
                <ArticleBlock
                  key={idx}
                  article={child}
                  titleStyle="text-[1rem] font-medium"
                >
                 
                  
                </ArticleBlock>
              ))} */}
            </ArticleBlock>
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
