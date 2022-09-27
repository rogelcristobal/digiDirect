import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
const useConvert = () => {
  const [state, setState] = useState({
    data: null,
    status: null,
    headers: null,
  });
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  };
  const input = {
    input: "633295e6a479650012ab5d02",
    output_format:'png',
  };

  const { mutate } = useMutation(async () => {
    return await axios.post(
      "https://api.freeconvert.com/v1/process/convert",
      input,
      {
        headers: headers,
      }
    );
  }, {
    onSuccess: (res)=>{
        const results={
            data:res.data,
            headers:res.headers,
            status:res.status
        }
        setState(results)
    }
  }
  );

  return {mutate,state}
};

export default useConvert;
