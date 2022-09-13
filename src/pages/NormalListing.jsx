import React from "react";
import { Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const NormalListing = () => {
  const template = `
<p class="mText">The <strong class="h1Lit">ProductName</strong> 
</p>     

<h2 class="h2Lit">Key Features of the name</h2>
<ul>
<li></li>
</ul>

<p></p>
<ul class="mpn">
<li>MPN - bar</li>
<li>GTIN - bar</li>
</ul>
`;

  return (
    <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
      <Box className="h-full overflow-auto w-full  space-y-3 box-border px-8 pt-5">
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
