import { useEffect,useState } from "react";
const useMousePosition = () => {
 const [mousepos,setMousepos] = useState({
  x:0,y:0
 })
 const updatePosition=(e)=>{
  setMousepos({
    x: e.clientX,
    y:e.clienY
  })
 }

 useEffect(() => {
  window.addEventListener('mousemove', updatePosition)
   return () => {
    window.removeEventListener('mousemove', updatePosition)
   };
 }, []);
 return mousepos
}

export default useMousePosition;
