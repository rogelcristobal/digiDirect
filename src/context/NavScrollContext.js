import { createContext, useState } from "react";

const NavScrollContext = createContext();

export const NavScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [transparency,setTransparency] = useState(false)
  // scroll function
  const handleScroll=(scrollRef)=>{
    const element = scrollRef?.current;
    const scroll = () => {
      let x = element.scrollTop;
      setScrollPosition(x);
    };
    element.addEventListener("scroll", scroll);
    return () => {
      element.removeEventListener("scroll", scroll);
      setScrollPosition(0);
    };
  }
  return (
    <NavScrollContext.Provider value={{scrollPosition,setScrollPosition,transparency,setTransparency,handleScroll}}>
      {children}
    </NavScrollContext.Provider>
  );
};

export default NavScrollContext

