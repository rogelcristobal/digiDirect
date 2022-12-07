import { createContext,useState } from "react";
const CodeMenuContext = createContext()


export const CodeMenuProvider = ({children}) => {
    const [modalState,setModalState]=useState(false)
  return (
    <CodeMenuContext.Provider value={{modalState,setModalState}}>{children}</CodeMenuContext.Provider>
  )
}

export default CodeMenuContext;
