import { Box, Typography, Divider } from "@mui/material";
import TextContent from "../components/TextContent";
import { useState, useRef, useContext, useEffect } from "react";
import PageScrollableContext from "../context/PageScrollableContext";
import Scrollbar from "smooth-scrollbar";
import FileInput from '../components/FileInput'
const Converter = () => {
  const ref = useRef(null);
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

  const [fileData, setFileData] = useState([]);
  const handleAddFile = (e) => {
    const file = e.target.files[0];
    setFileData([...fileData, file]);
  };
  console.log(fileData[0]?.name);
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
            category="API & Tools"
            sx=" w-fit h-fit py-2 px-2 "
            title={
              <Typography
                variant="body1"
                className="capitalize  text-[1.6rem] font-medium font-plus  "
              >
                Converters
              </Typography>
            }
          ></TextContent>
        </Box>
        {/* <Divider variant="fullWidth" light></Divider> */}
      </Box>

      {/* content */}
      <Box className="h-auto w-full  px-10 box-border  pt-0">
        <Box className="h-36  w-full box-border flex items-center justify-start">
          <Box className="h-full w-full max-w-[20rem] box-border"> 
            <FileInput />
          </Box>
        </Box>
        <Box className="h-full w-full space-y-20  px-2 box-border">
          {/*  */}
        </Box>
      </Box>
    </Box>
  );
};
export default Converter;

// <input type="file" name="item" id="" onChange={handleAddFile}/>
