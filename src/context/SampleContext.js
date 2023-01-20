import {createContext,useRef} from 'react'
const SampleContext = createContext()


export const SampleContextProvider=({children})=>{
    const multipleRef=useRef([])

    return(
        <SampleContext.Provider value={{multipleRef}}>{children}</SampleContext.Provider>
    )
}
export default SampleContext