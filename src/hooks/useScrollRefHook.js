import { useEffect, useState } from "react";
const useScrollRefHook = (ref) => {
  const [state, setState] = useState("");
  console.log(ref);
  useEffect(() => {
    const runFunction = () => {
      setState("rn");
    };

    ref.addEventListener("scroll", runFunction);

    return () => {
      ref.removeEventListener("scroll", runFunction);
    };
  }, [state]);

  return state;
};

export default useScrollRefHook;
