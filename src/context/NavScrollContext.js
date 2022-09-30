import { createContext, useState } from "react";

const NavScrollContext = createContext();

export const NavScrollProvider = ({ children }) => {
  const [state, setState] = useState(0);
  const [transparency,setTransparency] = useState(false)
  return (
    <NavScrollContext.Provider value={{state,setState,transparency,setTransparency}}>
      {children}
    </NavScrollContext.Provider>
  );
};

export default NavScrollContext

