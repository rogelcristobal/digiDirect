import React, { useEffect,useContext } from "react";
import Scrollbar from "smooth-scrollbar";
import PageScrollableContext from "../context/PageScrollableContext";
const Scroll = ({asd}) => {
    // const {scrollRefState} = useContext(PageScrollableContext)
  const options = {
    damping: 0.04,
    renderByPixels: true,
  };

  useEffect(() => {
//    if(!scrollRefState)return
    Scrollbar.init(asd?.current,options);
    return () => {
        if (Scrollbar) Scrollbar.destroy(asd?.current)
    } 
  }, []);
  return null;
};

export default Scroll;
