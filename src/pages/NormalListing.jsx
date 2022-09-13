import React from "react";
import { Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
const NormalListing = () => {
  
const template = `
<p class="mText">The <strong class="h1Lit">ProductName</strong> 
</p>     

<h2 class="h2Lit">Key Features of the Product</h2>
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
    <div className="h-full w-full ">
      <Box className="w-[50%] rounded-xl  overflow-hidden p-0">
        <SyntaxHighlighter wrapLines={true}  wrapLongLines={true} language="markup"  style={github}>
          {template}
        </SyntaxHighlighter>
      </Box>
    </div>
  );
};

export default NormalListing;
