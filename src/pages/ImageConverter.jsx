import { useState, useRef, useContext } from "react";
import { Box, Tooltip, IconButton, Button, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import template from "../template/template";
import NavScrollContext from "../context/NavScrollContext";
import { useEffect } from "react";
import useImportFromURL from "../requests/useImportFromURL";
import useConvert from "../requests/useConvert";
import { AiOutlinePlus } from "react-icons/ai";
import PageSubTitle from "../components/PageSubTitle";
const ImageConverter = () => {
  const { inTheBoxMarkup, specsMarkup, descriptionSimple, descriptionBest } =
    template();

  const { setState: setScrollPos, setTransparency } =
    useContext(NavScrollContext);
  const scrollRef = useRef(null);

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
  const [URLInput, setURLInput] = useState([{ input: "" }]);

  const handleAddURL = () => {
    setURLInput([...URLInput, { input: "" }]);
  };
  const handleTextChange = (e, id) => {
    console.log(e, id);
  };

  // const { mutate, state } = useImportFromURL();
  // const { mutate: startConvert, state: convertStatus } = useConvert();

  // console.log("import", state);
  // console.log("convertStatus", convertStatus);
  return (
    <Box className="h-full box-border flex items-start gap-3 rounded-lg pt-[4.5rem]   w-full ">
      <Box
        ref={scrollRef}
        className="h-full  overflow-auto w-full  flex  items-start justify-start box-border"
      >
        <Box className="w-full  h-auto box-border px-16  pt-12 pb-36 space-y-16">
          {/* page title */}
          <Box className="  w-full">
            <PageTitle
              category="Tools & API's"
              title="Image Converters"
              subTitle="Easily convert images  from one format to another "
            />
          </Box>
          <Box>
          

            <Box className="h-96 box-border pt-4 flex flex-col items-start justify-start">
              <Box className="w-full rounded-xl  box-border flex flex-col items-center justify-start h-fit gap-3 p-4">
                {/* URLInput[].text*/}
                {/* {URLInput.map((item, idx) => (
                <Tooltip key={idx} title={"URL text field"}>
                <input
                name="url_input"
                value={item.input}
                onChange={(e) => {
                  const list = [...URLInput];
                  list[idx].input = e.target.value;
                  setURLInput(list);
                }}
                type="text"
                className="h-8 w-96 rounded-lg border-0 outline-none bg-gray-100 hover:cursor-pointer focus:cursor-text px-4 py-2 text-md font-general font-medium text-gray-400 focus:text-gray-900"
                />
                </Tooltip>
              ))} */}
              <Box className="max-w-[40rem] w-full h-fit flex flex-col items-end justify-start">

                <Box className="h-60 bg-blue-50 cursor-pointer border-2 border-blue-300 border-dashed rounded-xl text-blue-500 w-full  flex flex-col items-center justify-center text-2xl gap-3">
                  <AiOutlinePlus></AiOutlinePlus>
                  <Typography variant="" className="text-sm capitalize">
                    choose files
                  </Typography>
                </Box>
                <Box className="h-fit w-full flex items-center justify-end space-x-3 mt-8">
                  {/* <IconButton
                  onClick={handleAddURL}
                  className="h-8 w-8  text-sm rounded-lg shadow-none text-blue-500 bg-blue-100"
                  >
                  <AiOutlinePlus></AiOutlinePlus>
                </IconButton> */}
                  <Button
                    variant="contained"
                    className="px-6 py-2 bg-blue-500 shadow-none  rounded-lg "
                    >
                    <Typography
                      variant="body1"
                      className=" text-sm text-white capitalize"
                      >
                      Submit
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
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
