import { createContext ,useState} from "react";
import useMousePosition from "../hooks/useMousePosition";
const MouseStateContext = createContext()


export const MouseStateProvider = ({children}) => {
    const {x,y} = useMousePosition()
    const [mouseHoverState,setMouseHoverState] = useState(false)
  return (
    <MouseStateContext.Provider value={{mouseHoverState,setMouseHoverState,x,y}}>
      {children}
    </MouseStateContext.Provider>
  );
}

export default MouseStateContext;
