import { Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { TbCloudUpload } from "react-icons/tb";

const FileInput = () => {
  const inputRef = useRef();
  const [files, setFiles] = useState([]);


  function handleDrop(event) {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    inputRef.current.files = droppedFiles;
    setFiles(droppedFiles);
   
  }

  function handleChange(event) {
    const selectedFiles = event.target.files;
    inputRef.current.files = selectedFiles;
    setFiles(selectedFiles);
  }

   console.log(files);
  return (
    <label
      onDrop={handleDrop}
      className="block h-full w-full border-medium-box  box-border relative rounded-lg cursor-pointer hover:text-[#0b70df] transition-all duration-300 ease-in-out"
    >
      <Typography
        variant="subtitle2"
        className="absolute text-center flex flex-col items-center justify-state font-plus font-semibold text-[2rem] gap-3  top-1/2 -translate-y-1/2 transform left-1/2 -translate-x-1/2"
      >
        <TbCloudUpload></TbCloudUpload>
        <span className="text-[0.8rem]">Upload files here</span>
      </Typography>
      <input type="file" ref={inputRef} className="invisible" multiple onChange={handleChange}/>
    </label>
  );
};

export default FileInput;
