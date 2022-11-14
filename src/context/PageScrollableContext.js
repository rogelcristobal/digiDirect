import {createContext ,useState} from 'react'

const PageScrollableContext  = createContext()


export const PageScrollableProvider = ({children}) => {
 const [scrollRefState,setScrolRefState] = useState(null)
  return (
    <PageScrollableContext.Provider value={{scrollRefState,setScrolRefState}}>
      {children}
    </PageScrollableContext.Provider>
  );
}

export default PageScrollableContext;
