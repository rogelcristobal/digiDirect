import { useEffect,useState } from "react";
function useMousePosition(){
 const [mousepos,setMousepos] = useState({x:null,y:null})
 
 useEffect(() => {
   const updatePosition=(e)=>{
    setMousepos({
      x: e.clientX,
      y: e.clientY
    })
   }
   window.addEventListener('mousemove', updatePosition)
   return () => {
    window.removeEventListener('mousemove', updatePosition)
   };
 }, []);
 return mousepos
}
export default useMousePosition

