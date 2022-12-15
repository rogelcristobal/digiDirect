import { Box, Typography, Divider } from "@mui/material";
import TextContent from "../components/TextContent";
import { useState, useRef, useContext, useEffect } from "react";
import PageScrollableContext from "../context/PageScrollableContext";
import Scrollbar from "smooth-scrollbar";
import FileInput from "../components/FileInput";
import { Button } from "@mui/material";
import { TbClipboard, TbClearAll } from "react-icons/tb";
const Sample = () => {
  const [productName, setProductName] = useState("");
  const [keyFeatures, setKeyFeatures] = useState([]);

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

  // Prompt the user for a product name

  // Prompt the user for key features and add them to the array
  const addKeyFeature = () => {
    const feature = prompt("Please enter a key feature:");
    setKeyFeatures([...keyFeatures, feature]);
  };

  // Generate a more elaborate and encouraging sentence using the key features
  const sentence = `The ${productName} is an excellent choice because it is known for its ${keyFeatures.join(
    ", "
  )}. Not only will you enjoy these impressive features, but you'll also be making a smart investment in a high-quality product that will last for years to come. Don't miss out on this opportunity to own the  ${productName} - buy now at digiDirect and experience the difference!`;

  const handleCopy = (data) => {
    navigator.clipboard.writeText(data);
    alert("copied");
  };

  const [state, setState] = useState("");
  const lines = state?.split("\n");

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
                sample
              </Typography>
            }
          ></TextContent>
        </Box>
        <Divider variant="fullWidth" light></Divider>
      </Box>

      {/* content */}
      <Box className="h-auto w-full  px-10 box-border  pt-6">
        <Box className="border-thin-box flex items-center justify-start gap-4">
          <input
            type="text"
            className="h-8 border-none outline-2 outline outline-blue-500 rounded px-2 w-52 text-md font-plus font-medium"
            placeholder="Please enter a product name:"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <Button
            variant="contained"
            className="font-plus shadow-none rounded-md"
            onClick={addKeyFeature}
          >
            <Typography
              variant="body1"
              className="text-[0.9rem] font-plus font-medium normal-case tracking-wide"
            >
              Add key feature
            </Typography>
          </Button>
        </Box>
        <Box className="flex flex-col items-state justify-start space-y-3 mt-6">
          <Typography variant="body2" className="font-bold font-plus">
            Output:
          </Typography>
          <Typography
            variant="body2"
            className="font-plus font-medium indent-4 text-[1.1rem]"
          >
            The <span className="text-blue-500">{productName}</span> is an excellent choice because it is known for
            its <span className="text-green-500">{keyFeatures.join(", ")}</span> . Not only will you enjoy these
            impressive features, but you'll also be making a smart investment in
            a high-quality product that will last for years to come. Don't miss
            out on this opportunity to own the <span className="text-blue-500">{productName}</span> - buy now at
            digiDirect and experience the difference!
           
          </Typography>
        </Box>
        <Box className="flex items-center justify-start gap-4">
          <Button
            startIcon={<TbClipboard className="text-sm" />}
            onClick={() => handleCopy(sentence)}
            variant="contained"
            size="small"
            className="mt-8 rounded-md bg-[#101626] p-2 px-4 shadow-none  flex items-center"
          >
            <Typography
              variant="body1"
              className="text-[0.7rem] font-plus normal-case tracking-wide"
            >
              Copy
            </Typography>
          </Button>
          <Button
            startIcon={<TbClearAll className="text-sm" />}
            onClick={() => {
              setKeyFeatures([]);
              setProductName("");
            }}
            variant="contained"
            size="small"
            className="mt-8 rounded-md bg-[#101626] p-2 px-4 shadow-none  flex items-center"
          >
            <Typography
              variant="body1"
              className="text-[0.7rem] font-plus normal-case tracking-wide"
            >
              Clear
            </Typography>
          </Button>
        </Box>

        {/* <textarea id="myTextarea" onChange={e=>setState(e.target.value)}></textarea>
          <Button
        //   startIcon={<TbClipboard className="text-sm" />}
          onClick={()=>{
            const lines = state?.split('\n')
            console.log(lines)
          }}
          variant="contained"
          size="small"
          className=" rounded-md bg-[#101626] p-2 px-4 shadow-none  flex items-center"
        >
          <Typography
            variant="body1"
            className="text-[0.7rem] font-plus normal-case tracking-wide"
          >
            Generate
          </Typography>
        </Button> */}
      </Box>
    </Box>
  );
};

export default Sample;
