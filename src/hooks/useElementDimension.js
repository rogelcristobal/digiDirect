import React ,{useEffect,useRef}from 'react';

export const useElementDimension = (ref) => {
 const dimensions= useRef({width:0,height:0})
 
 useEffect(()=>{
    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
},[])

 return dimensions.current
}

 
