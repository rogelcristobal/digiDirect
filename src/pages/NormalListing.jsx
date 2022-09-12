import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
const NormalListing = () => {

  const code = `
  export default function App() {
    return <h1>Hello Sandpack</h1>
  }
  `
  return (
    <div className="h-full w-full ">
       <Sandpack 
      template="react"
      files={{
        "/App.js": code,
      }}
    />
    </div>
  );
};

export default NormalListing;
