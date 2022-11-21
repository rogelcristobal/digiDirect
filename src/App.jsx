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
import { useContext, lazy, Suspense, useEffect, useRef } from "react";
import NavScrollContext from "./context/NavScrollContext";
import PageScrollableContext from "./context/PageScrollableContext";
import { MouseStateProvider } from "./context/MouseStateContext";
import { TemplateSectionProvider } from "./context/TemplateSectionContext";
import { NavScrollProvider } from "./context/NavScrollContext";
import LoadingFallback from "./components/LoadingFallback";
import ScrollTopWidget from "./components/ScrollTopWidget";
import Cursor from "./components/Cursor";
import Scrollbar from "smooth-scrollbar";

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
            <NavScrollProvider>
              <TemplateSectionProvider>
                <MouseStateProvider>
                  <Main />
                </MouseStateProvider>
              </TemplateSectionProvider>
            </NavScrollProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </HashRouter>
    </QueryClientProvider>
  );
};
const Main = () => {
  // sets ref on page load and passes to context to be accessed by all child
  const scrollableRef = useRef(null);
  const { setScrollRefState,scrollRefState } = useContext(PageScrollableContext);
  useEffect(() => {
    setScrollRefState(scrollableRef);
  }, []);
  
  // context
  const options = {
    damping: 0.04,
    renderByPixels: true,
  };
  
  // const { scrollPosition } = useContext(NavScrollContext);
  useEffect(() => {
    if(!scrollRefState) return
    Scrollbar.init(scrollRefState?.current, options);
    // return () => {
    //   if (Scrollbar) Scrollbar.init(,options);
    // };
     return () => {
          if (Scrollbar) Scrollbar.destroy(scrollRefState?.current)
        } 
   
  }, []);
  
return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route
        path="/*"
        element={
          <Box className="h-full  w-full  text-[#131313]  box-border flex   items-center justify-start  relative ">
            {/* navbar */}
            <Navbar></Navbar>
            {/* <Cursor /> */}
            {/*scrollable content content */}
            {/* set height to screen  */}
            <Box
              component="main"
              className="h-screen overflow-auto w-full    box-border   flex  items-center justify-center     relative "
            >
              {/* element that scrolling */}
              <Box
                ref={scrollableRef}
                className=" w-full h-full overflow-auto box-border "
              >
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
        }
      ></Route>
    </Routes>
  );
};

export default App;

//https://products.ls.graphics/qubus/

// code blocks with copy btn (https://www.npmjs.com/package/react-code-blocks)
// html playground (https://www.npmjs.com/package/playground-elements)
