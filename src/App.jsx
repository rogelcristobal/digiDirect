import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

import { Box } from "@mui/material";
import { Routes, Route, HashRouter } from "react-router-dom";
// icons
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// tanstack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// components
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

import { useEffect, useRef, useContext, lazy, Suspense } from "react";

import NavScrollContext from "./context/NavScrollContext";

import LoadingFallback from './components/LoadingFallback'
const Templates = lazy(() => import("./pages/Templates"));
const Converter = lazy(() => import("./pages/Converter"));
const OpenBox = lazy(() => import("./pages/OpenBox"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
// query
const queryClient = new QueryClient();

const App = () => {
  const font = "'Poppins', sans-serif";
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
            <Main />
          </ThemeProvider>
        </StyledEngineProvider>
      </HashRouter>
    </QueryClientProvider>
  );
};
const Main = () => {
  const { handleScroll } = useContext(NavScrollContext);
  const scrollRef = useRef(null);
  useEffect(() => {
    handleScroll(scrollRef);
  }, []);
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route
        path="/*"
        element={
          <Box className="h-screen w-full text-gray-800  font-poppins  box-border flex items-start justify-start bg-[#ffffff] relative">
            {/* navbar */}

            {/* <SideBar /> */}

            {/* content */}
            <Box className="h-full w-full  pt-0 box-border flex flex-col items-center justify-start">
              <Navbar />
              <Box
                component="main"
                className="h-full box-border  flex items-start gap-3 rounded-lg  bg-[#ffffff]  w-full "
                
              >
                {/* element that scrolling */}
                <Box
                  ref={scrollRef}
                  className="h-full scroll-smooth overflow-x-hidden w-full  flex pt-[4.2rem] items-start justify-center box-border "
                >
                  <Suspense  fallback={<LoadingFallback/>}>
                    <Routes>
                      <Route index element={<Dashboard />} />
                      <Route path="/templates" element={<Templates />} />
                      <Route path="/open-box-listing" element={<OpenBox />} />
                      <Route path="/converter" element={<Converter />} />
                    </Routes>
                  </Suspense>
                </Box>
              </Box>
            </Box>
          </Box>
        }
      ></Route>
      <Route
        path="/login"
        element={<div className="h-full bg-blue-100">s</div>}
      />
    </Routes>
  );
};
export default App;

// https://demos.creative-tim.com/soft-ui-dashboard-pro-react/marketplace/#/ecommerce/overview

// code blocks with copy btn (https://www.npmjs.com/package/react-code-blocks)
// html playground (https://www.npmjs.com/package/playground-elements)
