import { Box, Paper, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import NavScrollContext from "../context/NavScrollContext";
import { useEffect, useState, useRef, useContext } from "react";

const Dashboard = () => {
  const {  setState: setScrollPos } =useContext(NavScrollContext);
    
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setState(entry.isIntersecting)
  //     // console.log(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current)
  // }, []);
  // element.addEventListener('scroll',()=>{
  //   let x =  element.scrollTop
  //   console.log(x)
  // })
  
  const scrollRef = useRef(null);
// for scrolling not using hooks
  useEffect(() => {
    const element = scrollRef.current;
    
    const handleScroll = () => {
      let x = element.scrollTop;
      setScrollPos(x);
    };
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
      setScrollPos(0)
    };
  }, []);



  return (
    <>
      <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
        <Box
          ref={scrollRef}
          className="h-full w-full overflow-auto  space-y-8 box-border px-16  pt-24 pb-32"
        >
          {/* content */}

          <Box className="mb-8 ">
            <PageTitle
              category="dashboard"
              title={
                <Typography
                  variant="body2"
                  className="font-[500] text-2xl text-gray-700 capitalize"
                >
                 good afternoon, user!
                </Typography>
              }
            />
          </Box>

          <Box className="grid grid-flow-row grid-cols-12 gap-6 ">
            <Box className="col-span-8">
              <Paper
                variant="contained"
                className="h-56 w-full  rounded-2xl  bg-[#ffffff]  box-border border-thin "
              ></Paper>
            </Box>
            <Box className="col-span-4 row-span-2">
              <Paper
                variant="contained"
                className="h-full w-full  rounded-2xl  bg-[#ffffff]  box-border border-thin "
              ></Paper>
            </Box>
            <Box className="col-span-4">
              <Paper
                variant="contained"
                className="h-20 w-full  rounded-2xl  bg-[#ffffff]  text-white box-border px-8 flex items-center justify-end border-thin"
              >
                <Typography variant="h6" className=" font-base  text-sm">
                  WebP to JPG
                </Typography>
              </Paper>
            </Box>
            <Box className="col-span-4">
              <Paper
                variant="contained"
                className="h-20 w-full  rounded-2xl  bg-[#ffffff]  box-border border-thin "
              ></Paper>
            </Box>

            <Box className="col-span-4">
              <Paper
                variant="contained"
                className="h-60 w-full  rounded-2xl  bg-[#ffffff]  box-border border-thin "
              ></Paper>
            </Box>

            <Box className="col-span-8 ">
              <Paper
                variant="contained"
                className="h-[38rem] w-full  rounded-2xl  bg-[#ffffff]  box-border border-thin "
              ></Paper>
            </Box>
          </Box>
        </Box>

        {/* <Box className="h-52 w-60">page nav</Box> */}
      </Box>
    </>
  );
};

export default Dashboard;
