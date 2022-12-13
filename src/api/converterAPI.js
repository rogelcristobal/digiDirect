import axios from "axios";


const converterAPI = axios.create({
    baseURL: "https://api.freeconvert.com/v1",
});
const apiKey = process.env.REACT_APP_API_KEY

export const getCurrentUser = async () => {
  const headers = {
    'Accept':'application/json',
    'Authorization':`Bearer ${apiKey}`
  };
  try {
    const {data} = await converterAPI.get('/account/me',{headers:headers})
    return data
  } catch (error) {
    return(error)
  }
};



export default converterAPI

