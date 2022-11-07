import { useState, useRef, useContext } from "react";
import { Box, Typography } from "@mui/material";
import PageTitle from "../components/TextContent";
import template from "../template/template";
import NavScrollContext from "../context/NavScrollContext";
import ArticleBlock from "../components/ArticleBlock";
import { useEffect } from "react";
import TextContent from "../components/TextContent";
import { Link } from "@mui/material";
const Converter = () => {
  const { handleScroll } = useContext(NavScrollContext);
  const scrollRef = useRef(null);
  const importFile = useRef(null);
  const [importedFiles, setImportedFiles] = useState();

  const [URLInput, setURLInput] = useState([{ input: "" }]);

  const handleAddURL = () => {
    setURLInput([...URLInput, { input: "" }]);
  };
  const handleTextChange = (e, id) => {
    console.log(e, id);
  };
  const handleChooseFile = () => {
    importFile.current.click();
  };
  const inputFileOnChange = (e) => {
    setImportedFiles(e.target.files);
  };
  // console.log(typeof importedFiles, importedFiles);
  // const { mutate, state } = useImportFromURL();
  // const { mutate: startConvert, state: convertStatus } = useConvert();

  // console.log("import", state);
  // console.log("convertStatus", convertStatus);
  const [converterValue, setConverterValue] = useState(0);
  const handleInputChange = (e) => {
    setConverterValue((prev) => (prev = e.target.value));
  };

  const pageRef = useRef([]);
  pageRef.current = [];

  const sections = [
    {
      category: "Unit converter",
    },
    {
      category: "Image converter",
    },
  ];

  return (
    <>
      <Box className="w-[24rem]   h-full  sticky top-0 px-0 box-border  flex flex-col justify-start pb-8 pt-4 items-center ">
        <Box
          className="h-fit   mt-10   w-full box-border py-2 px-8  flex flex-col items-end justify-start 
        "
        >
          <Box className="flex  flex-col  max-w-[calc(24rem-10rem)] box-border   px-4 items-center justify-start h-full  w-full space-y-4 relative ">
            <Box className=" w-full flex items-center justify-end py-2  box-border">
              <TextContent
                title={
                  <Typography className="text-white">API tools</Typography>
                }
              ></TextContent>
            </Box>
            {sections.map((item, id) => (
              <Link
                key={id}
                underline="none"
                // onClick={() => {
                //   pageCategoryRef.current[id].scrollIntoView({
                //     behavior: "smooth",
                //     block: "start",
                //   });
                // }}
                className={` text-[0.9rem] relative  text-right w-full cursor-pointer ${
                  item?.isInView ? "text-white" : "text-gray-600"
                }
                 hover:text-gray-400 transition-all duration-500 ease-in-out 
                flex items-center justify-center `}
              >
                <span className="text-right w-full overflow-x-hidden ">
                  {item.category}
                </span>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="w-full h-auto box-border px-14  pt-12 pb-36 space-y-32">
       <Box className="space-y-32 w-full  box-border ">
          {/* space-y-12 between siblings */}
          {sections.map((item, id) => (
            // divided per category
            <Box
              className="box-border w-full scrollMargin flex items-center justify-start "
              key={id}
              data-id={id}
              // ref={storeRef}
            >
              <ArticleBlock
                article={item}
                titleFontSize="text-[1.4rem]"
                view={item?.refView}
              >
                
              </ArticleBlock>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
// https://codingbeautydev.com/blog/material-ui-tabs/
// https://app.haikei.app/
export default Converter;

{
  /*  */
}

{
  /* URLInput[].text*/
}
{
  /* {URLInput.map((item, idx) => (
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
              ))} */
}
{
  /* {!importedFiles ? (
                  
                   
                  <Box
                    onClick={handleChooseFile}
                    className="max-w-[40rem] py-4 px-4 w-full  h-52 border-dashed border-[2px] border-blue-200 flex flex-col items-end justify-end rounded-xl relative cursor-pointer"
                  >
                    <input
                      type="file"
                      ref={importFile}
                      onChange={inputFileOnChange}
                      className="invisible"
                      multiple
                    />
                    <Box className="absolute -translate-x-1/2 top-1/2 left-1/2 text-blue-200 -translate-y-1/2 text-5xl">
                      <AiOutlineFileImage />
                    </Box>
                  </Box>
                ) : (
                  <Box className="h-fit p-4 box-border   w-full  flex flex-col items-center justify-start relative cursor-pointer">
                    {
                      importedFiles && Object.keys(importedFiles).map((item,idx)=>(
                        <Box key={idx} className="h-16 w-full border-thiner rounded-lg   flex  box-border items-center justify-between px-6 ">
                          <Box className=" max-w-[20rem]   w-full box-border ">
                            <Typography variant="body1" className="hover:text-clip truncate font-medium text-sm text-gray-600">{importedFiles[item].name}</Typography>
                          </Box>
                          <Box className="h-full box-border flex items-center">
                            <Button endIcon={<HiChevronDown/>} variant="contained" className="rounded-lg shadow-none text-gray-400 bg-[#f7f7f9] text-sm capitalize">
                              select
                            </Button>
                          </Box>
                        </Box>
                      ))
                    }

                  </Box>
                 )} 
                <Box className="h-fit w-full max-w-[40rem] mt-2 flex items-center justify-end space-x-3  box-border">
                
                  <Button
                    startIcon={<AiOutlineLink className="text-blue-500" />}
                    variant="contained"
                    className="px-6 py-2 bg-blue-100 shadow-none  rounded-lg "
                  >
                    <Typography
                      variant="body1"
                      className="font-medium text-xs text-blue-500 capitalize"
                    >
                      From Web
                    </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    className="px-6 py-2 bg-blue-500 shadow-none  rounded-lg "
                  >
                    <Typography
                      variant="body1"
                      className=" text-xs text-white capitalize"
                    >
                      Convert
                    </Typography>
                  </Button>
                </Box> */
}
