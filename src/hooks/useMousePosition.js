import { useEffect,useState } from "react";
const useMousePosition = () => {
 const [mousepos,setMousepos] = useState({
  x:0,y:0
 })
 
 useEffect(() => {
   const updatePosition=(e)=>{
    setMousepos({
      x: e.clientX,
      y: e.clienY
    })
   }
   window.addEventListener('mousemove', updatePosition)
   return () => {
    window.removeEventListener('mousemove', updatePosition)
   };
 }, []);
 return 
}

export default useMousePosition;
