import {createContext ,useState,useRef} from 'react'

const PageScrollableContext  = createContext()


export const PageScrollableProvider = ({children}) => {
 
 const [scrollEl,setScrollEl] = useState(null)
  return (
    <PageScrollableContext.Provider value={{scrollEl,setScrollEl}}>
      {children}
    </PageScrollableContext.Provider>
  );
}

export default PageScrollableContext;
