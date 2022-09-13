import React from "react";
import { Box ,Typography} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useEffect } from "react";
import useImportFromURL from "../requests/useImportFromURL";
const NormalListing = () => {


// const {fetch,state} = useImportFromURL()
const {mutate,state} = useImportFromURL()
useEffect(()=>{
  mutate()
},[])
console.log(state.data)



  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
      <Box className="h-full overflow-auto w-full  space-y-3 box-border px-20  pt-16">

          <Box>
            <Typography variant="h6" className="font-semibold text-3xl tracking-tight">WebP to JPG</Typography>






          </Box>














        {/* <Box className="w-fit rounded-xl text-md overflow-hidden ">
          <SyntaxHighlighter
            wrapLines={true}
            wrapLongLines={true}
            language="markup"
            style={docco}
          >
            {template}
          </SyntaxHighlighter>
        </Box> */}
      </Box>
    </Box>
  );
};

export default NormalListing;
