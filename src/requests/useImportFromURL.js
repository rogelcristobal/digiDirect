import axios from "axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
const useImportFromURL = () => {
  const [state, setState] = useState({
    data:null,
    status:null,
    headers:null
  });
  

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  };

  const { mutate } = useMutation(async (payload) => {
      return await axios.post(
        "https://api.freeconvert.com/v1/process/import/url",
        payload,
        {
          headers: headers,
        }
      );
     
    },
    {
      onSuccess: (res) => {
        const result={
            data:res.data,
            header:res.headers,
            status:res.status
        }
        setState(result)
      },
    }
  );

  return {mutate,state};
};

export default useImportFromURL;
