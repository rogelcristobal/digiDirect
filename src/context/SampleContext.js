import {createContext,useState} from 'react'
const SampleContext = createContext()


export const SampleContextProvider=({children})=>{
    const [refState,setRefState]=useState([])  
    return(
        <SampleContext.Provider value={{refState,setRefState}}>{children}</SampleContext.Provider>
    )
}
export default SampleContext