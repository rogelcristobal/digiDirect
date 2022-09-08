import axios from "axios";
import { useState } from "react";
const request = () => {
 const [state,setState]= useState(null)
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  };
  const fetch=async()=>{
    const response = await axios.get('https://api.freeconvert.com/v1/account/me',headers)
    setState((prev)=>prev=response.data)

  }
  return {fetch,state}
};

export default request;
