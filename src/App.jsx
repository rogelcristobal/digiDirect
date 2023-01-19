import { StyledEngineProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Routes, Route, HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext, lazy, Suspense, useEffect, useRef } from "react";
import { MouseStateProvider } from "./context/MouseStateContext";
import { TemplateSectionProvider } from "./context/TemplateSectionContext";
import LoadingFallback from "./components/LoadingFallback";
import { ScrollProvider } from "./context/ScrollContext";
import CodeMenuContext from "./context/CodeMenuContext";
import { CodeMenuProvider } from "./context/CodeMenuContext";
import { SidebarStateProvider } from "./context/SidebarStateContext";
import Scrollbar from "smooth-scrollbar";
import { AnimatePresence } from "framer-motion";
import CodeBlockMenu from "./components/CodeBlockMenu";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PageScrollableContext from "./context/PageScrollableContext";
import Navbar from "./components/Navbar";
const Templates = lazy(() => import("./pages/Templates"));
const Converter = lazy(() => import("./pages/Converter"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Sample = lazy(() => import("./pages/Sample"));
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
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
  const ref = useRef(null);

  const { setScrollEl, scrollEl } = useContext(PageScrollableContext);
  // scrollbar animation
  // const options = {
  //   damping: 0.04,
  //   renderByPixels: true,
  // };
  // useEffect(() => {
  //   if (ref.current) {
  //     setScrollEl(ref.current);
  //   }
  //   Scrollbar.init(ref.current, options);
  // }, []);

  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route
        path="/*"
        element={
          <Box className="h-screen    w-screen  text-gray-800  box-border flex   items-start justify-start   bg-[#ffffff]">
            {/* <SideBar /> */}
            {/* <Navbar></Navbar> */}
            <AnimatePresence>
              {state.menuState && <CodeBlockMenu />}
            </AnimatePresence>
            <Box
              // ref={ref}
              component="main"
              className=" box-border   h-screen  w-screen   "
            >
              <Box className="h-screen w-screen  overflow-x-hidden box-border  font-ukraine-light tracking-tight text-[13px] leading-[18px]">
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/converter" element={<Converter />} />

                    <Route path="/sample" element={<Sample />} />
                  </Routes>
                </Suspense>
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
// https://dribbble.com/shots/19338372-Three-tier-sidebar-navigation-Untitled-UI
