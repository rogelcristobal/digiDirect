import { StyledEngineProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Routes, Route, HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import { useContext, lazy, Suspense, useEffect, useRef, useState } from "react";
import PageScrollableContext from "./context/PageScrollableContext";
import { MouseStateProvider } from "./context/MouseStateContext";
import { TemplateSectionProvider } from "./context/TemplateSectionContext";
import LoadingFallback from "./components/LoadingFallback";
import { ScrollProvider } from "./context/ScrollContext";

import SideBar from "./components/SideBar";

const Templates = lazy(() => import("./pages/Templates"));
const Converter = lazy(() => import("./pages/Converter"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <StyledEngineProvider injectFirst>
          <ScrollProvider>
            <TemplateSectionProvider>
              <MouseStateProvider>
                <Main />
              </MouseStateProvider>
            </TemplateSectionProvider>
          </ScrollProvider>
        </StyledEngineProvider>
      </HashRouter>
    </QueryClientProvider>
  );
};
const Main = () => {
  // sets ref on page load and passes to context to be accessed by all child
  // const scrollableRef = useRef(null);
  // const { setScrollEl, scrollEl } = useContext(PageScrollableContext);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const options = {
  //   damping: 0.00,
  //   renderByPixels: true,
  // };
  // setting the context state with ref.current
  // the purpose of this is that we can use the scrollable el thoughtout DOM tree using context
  // useEffect(() => {
  //   if (!scrollableRef.current) {
  //     return;
  //   }
  //   setScrollEl(scrollableRef.current);
  // }, []);

  // useEffect(() => {
  //   checks whether context state has a val if(!val) return null
  //   if (!scrollEl) return;
  //   initialize smooth scrolling using context
  //   Scrollbar.init(scrollEl, options);
  //   this dependency run this effect if(!ref.current === null)
  // }, [scrollableRef.current]);

  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route
        path="/*"
        element={
          
            <Box className="h-screen  font-inter  w-full  text-[#1d2128]  box-border flex   items-start justify-start w-full relative bg-[#ffffff]">
              <SideBar />
              {/* <Navbar></Navbar> */}
              {/*scrollable content content */}
              {/* set height to screen  */}
              <Box
                // ref={}
                component="main"
                className=" box-border  flex h-screen  w-full relative "
              >
                  <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                      <Route index element={<Dashboard />} />
                      <Route path="/templates" element={<Templates />} />
                      <Route path="/converter" element={<Converter />} />
                    </Routes>
                  </Suspense>
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
