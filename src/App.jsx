import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

import { Box, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
// icons
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// tanstack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// components
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import NormalListing from "./pages/NormalListing";
import useRequest from "./requests/useRequest";
import { useEffect } from "react";
import ImageConverter from "./pages/ImageConverter";
// query
const queryClient = new QueryClient();

const App = () => {
  const font = "'poppins', sans-serif";
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
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route
        path="/*"
        element={
          <Box className="h-screen w-full text-gray-800  box-border flex items-start justify-start bg-[#ffffff] relative">
            {/* navbar */}
            <Box className="h-[4.5rem]  z-10 w-full top-0 left-0 fixed flex items-end justify-end bg-[#ffffff]  border-thin">
              <div className="w-full h-full relative">
              
              </div>
              
            </Box>

            <SideBar />
            {/* content */}
            <Box className="h-full w-full   box-border flex items-start justify-center">
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/normal-listing" element={<NormalListing />} />
                <Route path="/open-box-listing" element={<NormalListing />} />
                <Route path="/image-converter" element={<ImageConverter />} />
              </Routes>
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
