import { createContext, useState, useEffect } from "react";
// import useMousePosition from "../hooks/useMousePosition";
const MouseStateContext = createContext();

export const MouseStateProvider = ({ children }) => {
  const [mousepos, setMousepos] = useState({ x: null, y: null });
  const [mouseHoverState, setMouseHoverState] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setMousepos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);


  return (
    <MouseStateContext.Provider
      value={{ mouseHoverState, setMouseHoverState, mousepos  }}
    >
      {children}
    </MouseStateContext.Provider>
  );
};

export default MouseStateContext;
