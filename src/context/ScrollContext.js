import { createContext,useContext, useState,useEffect } from "react";
import PageScrollableContext from "./PageScrollableContext";
const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const {scrollEl} = useContext(PageScrollableContext)
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
    <ScrollContext.Provider value={{scrollPosition}}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext