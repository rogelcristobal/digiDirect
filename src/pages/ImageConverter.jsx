import React from "react";
import { Box,Typography } from "@mui/material";
import Texthighlight from "../components/Texthighlight";
import PageTitle from "../components/PageTitle";

const ImageConverter = () => {

 
  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
      <Box className="h-full overflow-auto w-full  box-border px-20  py-32">
        <Box className="space-y-2 mb-8">
          <PageTitle category="tools & API's" title="image converter"/>
        </Box>
      
      </Box>
    </Box>
  );
};

export default ImageConverter;
