import { createContext,useReducer } from "react";

const SidebarStateContext = createContext()


const reducer =(state,action)=>{
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return{
                status:!state.status
            }
    }
}
export const SidebarStateProvider= ({children}) => {
const [state,dispatch] = useReducer(reducer,{status:true})
  return (
    <SidebarStateContext.Provider value={{state,dispatch}}>
        {children}
    </SidebarStateContext.Provider>
  );
}

export default SidebarStateContext;
