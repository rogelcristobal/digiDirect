import { lazy } from "react";
import { Box } from "@mui/material";

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

  // const addZeroToSingleDigit = (input) => {
  //   const number = (input += 1);
  //   if (number < 9) return "0" + number;
  //   else return number;
  // };

  return (
    <Box className="flex flex-col items-start justify-start w-full  h-full  box-border p-3">
     <Box className="h-full w-full   ">

     </Box>
      
    </Box>
  );
};

export default Templates;
// https://wemakefab.com/journal/gs-project-crm
//https://www.awwwards.com/sites/plastic
//https://wearemotto.com/
