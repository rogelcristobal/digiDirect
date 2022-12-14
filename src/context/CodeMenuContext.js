import { createContext,useSate,useReducer } from "react";
const CodeMenuContext = createContext()
function reducer(state, action) {
  switch(action.type){
    case 'TOGGLE_MENU_ON':{
      return{
        menuState: true,
       
      
      }
    }
    case 'TOGGLE_MENU_OFF':{
      return{
        menuState: false,
      
      }
    }
   
    
  }
  throw Error('Unknown action: ' + action.type);
}

export const CodeMenuProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,{
      menuState:false,
    })

  return (
    <CodeMenuContext.Provider value={{state,dispatch}}>{children}</CodeMenuContext.Provider>
  )
}

export default CodeMenuContext;
