import { useEffect, useContext } from "react";
import NavScrollContext from "../context/NavScrollContext";
const useElementScrollPosition = (element) => {
  const { state, setState } = useContext(NavScrollContext);

  useEffect(() => {
    const scrollFunction = () => {
      let x = element.scrollTop;
      setState(x);
    };
    if (element) {
      element.addEventListener("scroll", scrollFunction);
    }
    
  }, [element]);

  return { state };
};

export default useElementScrollPosition;
