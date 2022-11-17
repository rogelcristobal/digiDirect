import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

import { Box } from "@mui/material";
import { Routes, Route, HashRouter } from "react-router-dom";

// tanstack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// components
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useContext, lazy, Suspense, useState } from "react";
import ScrollTopWidget from "./components/ScrollTopWidget";
import NavScrollContext from "./context/NavScrollContext";
import Cursor from "./components/Cursor";
import LoadingFallback from "./components/LoadingFallback";
import { PageScrollableProvider } from "./context/PageScrollableContext";
import PageScrollableContext from "./context/PageScrollableContext";
import { MouseStateProvider } from "./context/MouseStateContext";

const Templates = lazy(() => import("./pages/Templates"));
const Converter = lazy(() => import("./pages/Converter"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
// query
const queryClient = new QueryClient();

const App = () => {
  const font = "'Plus Jakarta Sans', sans-serif";
  const theme = createTheme({
    typography: {
      fontFamily: [font].join(","),
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <HashRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <PageScrollableProvider>
              <MouseStateProvider>
                <Main />
              </MouseStateProvider>
            </PageScrollableProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </HashRouter>
    </QueryClientProvider>
  );
};
const Main = () => {
  // context
  const {scrollPosition } = useContext(NavScrollContext);

  // refs
  const scrollRef = useRef(null);
  const { pathname } = useLocation();
  // const {setScrolRefState} = useContext(PageScrollableContext)
  // this code will run every page changes to scroll to top immediately
  // useEffect(() => {
  //   scrollRef.current.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "instant",
  //   });
  // }, [pathname]);

  // this code  will get the scrolling position of element

  // mouse posiiton hook
 

  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route
        path="/*"
        element={
          <Box className="h-fit w-full  text-gray-800 text-[#1a1a1a]  box-border flex   items-center justify-start bg-[#fcfbfd] relative">
            {/* navbar */}

            <Navbar scrollPosition={scrollPosition}></Navbar>
            <Cursor />
            {/* content */}
            <Box className="h-full w-full  pt-0 box-border flex flex-col items-center justify-start ">
              <Box
                component="main"
                className="h-full box-border   flex items-start gap-3 rounded-lg  bg-[#fcfbfd]  w-full relative "
              >
                {/* element that scrolling */}
                <Cursor />
                <Box className="h-fit   w-full  flex flex-col  box-border  ">
                  <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                      <Route index element={<Dashboard />} />
                      <Route path="/templates" element={<Templates />} />
                      <Route path="/converter" element={<Converter />} />
                    </Routes>
                  </Suspense>
                </Box>

                {/* widget (scroll top) */}
                {/* <ScrollTopWidget scrl={scrollRef}></ScrollTopWidget> */}
              </Box>
            </Box>
          </Box>
        }
      ></Route>
    </Routes>
  );
};

export default App;

//https://products.ls.graphics/qubus/

// code blocks with copy btn (https://www.npmjs.com/package/react-code-blocks)
// html playground (https://www.npmjs.com/package/playground-elements)
