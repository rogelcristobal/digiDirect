import { createContext, useState } from "react";

const NavScrollContext = createContext();

export const NavScrollProvider = ({ children }) => {
  const [state, setState] = useState(0);
  return (
    <NavScrollContext.Provider value={{state,setState}}>
      {children}
    </NavScrollContext.Provider>
  );
};

export default NavScrollContext

