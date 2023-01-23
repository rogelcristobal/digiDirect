import {createContext,useRef} from 'react'
const SampleContext = createContext()


export const SampleContextProvider=({children})=>{
    const multipleRef=useRef([])
    const storeElement=(el)=>{
        console.log(el.current)
    }
    return(
        <SampleContext.Provider value={{multipleRef,storeElement}}>{children}</SampleContext.Provider>
    )
}
export default SampleContext