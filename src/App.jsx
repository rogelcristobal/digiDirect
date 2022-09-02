import React from "react";
import Card from "./components/Card";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiBookContent,BiImage } from "react-icons/bi";
import {Route,Routes} from 'react-router-dom'
export const Acard = () => {
  return (
    <div className="h-full w-full flex flex-col items-start justify-end box-border  relative   duration-300 transition-all ease-in-out space-y-2">
      <div className="p-2 box-border rounded-lg bg-[#050c12]/80 absolute -top-2 -right-2 text-gray-500 hover:text-gray-300 ">
        <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
      </div>
      <div className="flex items-center justify-start space-x-4  w-full ">
        <div className="p-2 rounded-lg  bg-[#050c12]/80">
          <BiBookContent className="text-2xl"></BiBookContent>
        </div>
        <p className="text-sm   font-medium">create new listing</p>
      </div>
    </div>
  );
};
export const Bcard = () => {
  return (
    <div className="h-full w-full flex flex-col items-start justify-end box-border  relative   duration-300 transition-all ease-in-out space-y-2">
      <div className="p-2 box-border rounded-lg bg-[#050c12]/80 absolute -top-2 -right-2 text-gray-500 hover:text-gray-300 ">
        <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
      </div>
      <div className="flex items-center justify-start space-x-4  w-full ">
        <div className="p-2 rounded-lg  bg-[#050c12]/80">
          <BiImage className="text-2xl"></BiImage>
        </div>
        <p className="text-sm   font-medium">convert to jpg</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-[#050c12] text-neutral-300 w-full min-h-screen font-jakarta box-border  flex items-start justify-end">
      <div className="h-screen w-72 fixed top-0 left-0  box-border "></div>
      <div className="  w-[calc(100%-20rem)]  h-full  box-border rounded-2xl mt-20">
        <div className="grid grid-flow-row grid-cols-12 w-full grid-rows-6 gap-6 h-[35rem] box-border  p-8 rounded-2xl ">
          {[
            { col: 4, row: 2, hex: "#08131b", children: <Acard /> ,path:"/new-listing" },
            { col: 4, row: 2, hex: "#08131b", children: <Bcard /> },
            {
              col: 4,
              row: 3,
              rowStart: 4,
              hex: "#08131b",
            },
            {
              col: 8,
              row: 4,
              hex: "#08131b",
            },
          ].map((item) => (
            <Card
              colSpan={item.col}
              rowSpan={item.row}
              hexColor={item.hex}
              rowStart={item?.rowStart}
              colStart={item?.colStart}
              path={item?.path}
            >
              {item?.children}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
