import {createContext ,useState} from 'react'

const PageScrollableContext  = createContext()


export const PageScrollableProvider = ({children}) => {
 const [scrollRefState,setScrollRefState] = useState(null)
  return (
    <PageScrollableContext.Provider value={{scrollRefState,setScrollRefState}}>
      {children}
    </PageScrollableContext.Provider>
  );
}

export default PageScrollableContext;
