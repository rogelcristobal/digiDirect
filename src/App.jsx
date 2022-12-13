import { StyledEngineProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Routes, Route, HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import { useContext, lazy, Suspense, useEffect, useState } from "react";
import { MouseStateProvider } from "./context/MouseStateContext";
import { TemplateSectionProvider } from "./context/TemplateSectionContext";
import LoadingFallback from "./components/LoadingFallback";
import { ScrollProvider } from "./context/ScrollContext";
import CodeMenuContext from "./context/CodeMenuContext";
import { CodeMenuProvider } from "./context/CodeMenuContext";
import { SidebarStateProvider } from "./context/SidebarStateContext";
import Scrollbar from "smooth-scrollbar";
import SideBar from "./components/SideBar";
import { AnimatePresence } from "framer-motion";
import CodeBlockMenu from "./components/CodeBlockMenu";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
const Templates = lazy(() => import("./pages/Templates"));
const Converter = lazy(() => import("./pages/Converter"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
      <HashRouter>
        <StyledEngineProvider injectFirst>
          <CodeMenuProvider>
            <ScrollProvider>
              <SidebarStateProvider>
                <TemplateSectionProvider>
                  <MouseStateProvider>
                    <Main />
                  </MouseStateProvider>
                </TemplateSectionProvider>
              </SidebarStateProvider>
            </ScrollProvider>
          </CodeMenuProvider>
        </StyledEngineProvider>
      </HashRouter>
      
    </QueryClientProvider>
  );
};
const Main = () => {
  // context
  const { state } = useContext(CodeMenuContext);
  // scrollbar animation
  const options = {
    damping: 0.03,
    renderByPixels: true,
  };
  useEffect(() => {
    Scrollbar.initAll(options);

    // const x = Scrollbar.getAll()
    // console.log(x)
  }, []);

  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route
        path="/*"
        element={
          <Box className="h-screen  font-inter  w-full  text-[#101626]  box-border flex   items-start justify-start  relative bg-[#ffffff]">
            <SideBar />
            {/* <Navbar></Navbar> */}
            <AnimatePresence>
              {state.menuState && <CodeBlockMenu />}
            </AnimatePresence>
            <Box
              component="main"
              className=" box-border  flex h-screen  w-full relative  "
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
// https://dribbble.com/shots/19338372-Three-tier-sidebar-navigation-Untitled-UI