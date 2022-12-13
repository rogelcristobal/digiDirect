import { Box } from "@mui/material";
import { useState } from "react";
const Converter = () => {
  const [fileData, setFileData] = useState([]);
  const handleAddFile=(e)=>{
    const file = e.target.files[0];
    setFileData([...fileData,file]);
  }
  console.log(fileData[0]?.name)
  return (
    <Box className="flex flex-col items-start justify-start w-full  h-full  box-border p-3">
      <Box className="h-full w-full">
        <input type="file" name="item" id="" onChange={handleAddFile}/>
        {/* {state&&
          state.map((item)=>(
            <p key={item.id}>{item}</p>
          ))
        } */}
      </Box>
    </Box>
  );
};
export default Converter;

