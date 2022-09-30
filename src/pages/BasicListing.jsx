import { useState, useRef, useContext, useEffect } from "react";
import {
  Box,
  Typography,
  Link,
  Divider,
  Stepper,
  Step,
  StepLabel,
  StepIcon,
} from "@mui/material";
import { AiOutlineCheckCircle } from "react-icons/ai";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import CodeSnippetComponent from "../components/CodeSnippetComponent";
import template from "../template/template";
import NavScrollContext from "../context/NavScrollContext";
import { InView, useInView } from "react-intersection-observer";
import { BiChevronRight } from "react-icons/bi";
const BasicListing = () => {
  const { inTheBoxMarkup, specsMarkup, descriptionSimple, descriptionBest } =
    template();

  const { setState: setScrollPos, setTransparency } =
    useContext(NavScrollContext);
  const scrollRef = useRef(null); // for navbar purposes
  const inViewOptions = {
    threshold: 0.6,
    delay: 200,
    rootMargin: "60px 0px",
  };
  const inTheBoxTab = useRef(null);
  const specsTab = useRef(null);
  const descriptionTab = useRef(null);
  const descriptionVerTwoTab = useRef(null);

  const [tabInViewState,setTabInViewState] = useState({
    inTheBox:false,
    spec:false,
  })

 
  

  useEffect(() => {
    const element = scrollRef.current;

    const handleScroll = () => {
      let x = element.scrollTop;
      setScrollPos(x);
      setTransparency(true);
    };
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
      setScrollPos(0);
      setTransparency(false);
    };
  }, []);

  return (
    <Box className="h-full box-border flex items-start gap-3 rounded-lg   w-full ">
      <Box
        ref={scrollRef}
        className="h-full  overflow-auto w-full  flex  items-start justify-start box-border"
      >
        <Box className="w-full max-w-4xl h-auto box-border px-20  pt-24 pb-36 space-y-28">
          {/* page title */}
          <Box className="pb-16  w-full ">
            <PageTitle
              category="general"
              title="Basic listing"
              subTitle="Create and copy a Basic listing template for digiDirect products. Copy the raw template or edit it in the customize tab."
            />
          </Box>

          {/* in the box */}

          <Box  ref={inTheBoxTab} className="w-full box-border space-y-8 ">
            <Box>
              <PageSubTitle
                id="gab"
                title=" What's in the box"
                subtitle={`Displays the accesories included in the product package. Copy and paste the template in 'What\'s in the box' tab in Magento. `}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl py-2 mt-4  ">
              <CodeSnippetComponent
                code={inTheBoxMarkup}
              ></CodeSnippetComponent>
            </Box>
          </Box>

          {/* sepcs */}

          <Box  ref={specsTab} className="w-full box-border space-y-8">
            <Box>
              <PageSubTitle
                
                title="Specification"
                subtitle={`Displays the specification of the product. Copy and paste it in 'Specification' tab in Magento. `}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl  mt-4  ">
              <CodeSnippetComponent code={specsMarkup}></CodeSnippetComponent>
            </Box>
          </Box>

          {/* description */}

          <Box  ref={descriptionTab} className="w-full box-border space-y-8">
            <Box>
              <PageSubTitle
                title="Description"
                subtitle={`Displays the description of the product. Copy and paste it in 'description' tab in Magento. `}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl  mt-4  ">
              <CodeSnippetComponent
                code={descriptionSimple}
              ></CodeSnippetComponent>
            </Box>
          </Box>

          {/* description v2 */}
          <Box ref={descriptionVerTwoTab} className="w-full box-border space-y-8">
            <Box>
              <PageSubTitle
                title="Description ver.2 "
                subtitle={`Displays the description of the product. Copy and paste it in 'description' tab in Magento. `}
              />
            </Box>
            <Box className=" h-fit w-full box-border rounded-3xl  mt-4  ">
              <CodeSnippetComponent
                code={descriptionBest}
                canEdit={true}
              ></CodeSnippetComponent>
            </Box>
          </Box>
        </Box>

        {/* page navigation */}
        <Box
          className="h-72 mx-8 rounded-2xl w-72 box-border  p-6 sticky top-20  mt-28 flex flex-col items-start justify-start
        "
        >
          <Typography
            variant="body1"
            className="text-sm text-blue-500 capitalize font-medium"
          >
            {" "}
            on this page
          </Typography>

          <Box className="flex flex-col box-border pl-4 items-start justify-start h-full mt-6 w-full space-y-3 relative">
            {[
              { title: "what's in the box", reference:inTheBoxTab},
              { title: "specification", reference: specsTab},
              { title: "description", reference: descriptionTab},
              { title: "description ver.2", reference: descriptionVerTwoTab },
            ].map((item, idx) => (
              <Link
                key={idx}
                underline="none"
                onClick={() =>
                  item.reference.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                className={`font-poppins text-[0.775rem] font-medium cursor-pointer 
                ${item.stateView? 'text-blue-500':'text-neutral-600'}
                capitalize transition-all duration-700 ease-in-out  flex items-center justify-center`}
              >
                <BiChevronRight></BiChevronRight>
                {item.title}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      {/* sidepage nav */}
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default BasicListing;
