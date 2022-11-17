import { createContext, useState,useEffect } from "react";

const NavScrollContext = createContext();

export const NavScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    const pos = window.pageYOffset
    setScrollPosition(pos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 

  return (
    <NavScrollContext.Provider value={{scrollPosition}}>
      {children}
    </NavScrollContext.Provider>
  );
};

export default NavScrollContext