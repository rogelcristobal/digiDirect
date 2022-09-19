import React from "react";
import { Box, Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Texthighlight from "../components/Texthighlight";

import useImportFromURL from "../requests/useImportFromURL";

  


const NormalListing = () => {
  // const {fetch,state} = useImportFromURL()
  // const {mutate,state} = useImportFromURL()
  // useEffect(()=>{
  //   mutate()
  // },[])
  // console.log(state.data)

 
  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
      <Box className="h-full overflow-auto w-full  box-border px-16  pt-28 pb-28">
        <Box className="space-y-2 mb-8">
          <Texthighlight
            text="Normal Listing"
            variant="h6"
            sx="font-medium text-3xl tracking-tight "
          />
          
        </Box>
      
      </Box>
    </Box>
  );
};

export default NormalListing;
