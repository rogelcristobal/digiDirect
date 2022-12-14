import { Box, Typography, Divider } from "@mui/material";
import TextContent from "../components/TextContent";
import { useState, useRef, useContext, useEffect } from "react";
import PageScrollableContext from "../context/PageScrollableContext";
import Scrollbar from "smooth-scrollbar";
import FileInput from "../components/FileInput";
import {Button} from "@mui/material"
import {TbClipboard} from 'react-icons/tb'
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
  const productNameInput = (
    <input
      type="text"
      placeholder="Please enter a product name:"
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
    />
  );

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
    alert('copied')
  };


  
const [state,setState]=useState('')
const lines = state?.split('\n')


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
      <Box className="h-auto w-full  px-10 box-border  pt-0">



        <div>
          {productNameInput}
          <button onClick={addKeyFeature}>Add Key Feature</button>
          <p>{sentence}</p>
        </div>
        <Button
          startIcon={<TbClipboard className="text-sm" />}
          onClick={() => handleCopy(sentence)}
          variant="contained"
          size="small"
          className=" rounded-md bg-[#101626] p-2 px-4 shadow-none  flex items-center"
        >
          <Typography
            variant="body1"
            className="text-[0.7rem] font-plus normal-case tracking-wide"
          >
            Copy
          </Typography>
        </Button>

         <textarea id="myTextarea" onChange={e=>setState(e.target.value)}></textarea>
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
        </Button>
        
        

      </Box>
    </Box>
  );
};

export default Sample;
