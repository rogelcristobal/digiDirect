import React from "react";
import { Box, } from "@mui/material";
import Texthighlight from "../components/Texthighlight";


const ImageConverter = () => {

 
  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
      <Box className="h-full overflow-auto w-full  box-border px-20  py-32">
        <Box className="space-y-2 mb-8">
          <Texthighlight
            text="Image Converter"
            variant="h6"
            sx="font-semibold text-3xl tracking-tight "
          />
          
        </Box>
      
      </Box>
    </Box>
  );
};

export default ImageConverter;
