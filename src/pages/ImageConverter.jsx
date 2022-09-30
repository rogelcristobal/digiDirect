import { useState, useRef, useContext } from "react";
import { Box, Tooltip, Button } from "@mui/material";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import CodeSnippetComponent from "../components/CodeSnippetComponent";
import template from "../template/template";
import NavScrollContext from "../context/NavScrollContext";
import { useEffect } from "react";
import useScrollRefHook from "../hooks/useScrollRefHook";
import useImportFromURL from "../requests/useImportFromURL";
import useConvert from "../requests/useConvert";
const ImageConverter = () => {
  const { inTheBoxMarkup, specsMarkup, descriptionSimple, descriptionBest } =
    template();

  const { setState: setScrollPos } = useContext(NavScrollContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    const handleScroll = () => {
      let position = element.scrollTop;
      setScrollPos(position);
    };
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
      setScrollPos(0);
    };
  }, []);

  const [URLInput, setURLInput] = useState("");

  const { mutate, state } = useImportFromURL();
  const { mutate: startConvert, state: convertStatus } = useConvert();

  console.log("import", state);
  console.log("convertStatus", convertStatus);
  return (
    <Box className="h-full box-border flex items-start gap-3 rounded-lg pt-[4.5rem]   w-full ">
      <Box
        ref={scrollRef}
        className="h-full  overflow-auto w-full  flex  items-start justify-start box-border"
      >
        <Box className="w-full max-w-4xl h-auto box-border px-16  pt-12 pb-36 space-y-16">
          {/* page title */}
          <Box className="pb-0  w-full">
            <PageTitle
              category="Tools & API's"
              title="Image Converter"
              subTitle="Convert Image format to JPG"
            />
          </Box>

          <Box className="h-96 border-thin rounded-2xl flex flex-col items-center justify-center">
            <Box className="flex items-center justify-end h-fit">
              <Tooltip title={URLInput ? URLInput : "URL text field"}>
                <input
                  value={URLInput}
                  onChange={(e) =>
                    setURLInput((prev) => (prev = e.target.value))
                  }
                  type="text"
                  className="h-8 w-72 rounded-l-lg border-0 outline-none bg-neutral-100 hover:cursor-pointer focus:cursor-text px-4 py-2 text-md font-general font-medium text-neutral-500 focus:text-neutral-900"
                />
              </Tooltip>
              <Button
                variant="contained"
                className="bg-blue-400 h-full shadow-none capitalize text-sm  rounded-r-lg"
              >
                covnert
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          className="h-72 w-72   sticky top-0 mt-16 flex flex-col items-start justify-start
        "
        ></Box>
      </Box>

      {/* sidepage nav */}
    </Box>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
export default ImageConverter;
