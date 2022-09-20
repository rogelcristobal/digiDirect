import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {Box,Paper, Typography} from "@mui/material";
import {AiOutlineCopy} from 'react-icons/ai'
import { useState } from "react";
const CodeBlock = ({ code ,handleCopy}) => {
    const [hoverState,setHoverState] = useState(false)
    const handleMouseEnter = ()=>{
        setHoverState((prev)=> prev = true)
    }
    const handleMouseLeave=()=>{
        setHoverState((prev)=> prev = false)
    }

  return (
    <Box className="h-full w-full relative box-border">
      <SyntaxHighlighter
      wrapLongLines={true}
        wrapLines={true}
        language="css"
        style={nightOwl}
        customStyle={{
          paddingTop: "1rem",
          paddingBottom: '1rem',
          paddingLeft: "2rem",
          borderRadius: "15px",
          overflowX:'hidden',
          boxSizing:'border-box'
        }}
      >
        {code}
      </SyntaxHighlighter>
        <Paper variant="outlined" className={`absolute top-3 right-3 p-2 bg-inherit border-neutral-600 flex items-center justify-center rounded-lg text-neutral-300 cursor-pointer gap-3 `} onClick={handleCopy}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <AiOutlineCopy/>
            {hoverState&&
                <Typography variant="body2" className="text-xs capitalize ">copy</Typography>
            }

        </Paper>

      </Box>
  );
};

export default CodeBlock;
