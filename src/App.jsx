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
import Dashboard from "./pages/Dashboard";
import BasicListing from "./pages/BasicListing";
import OpenBox from "./pages/OpenBox";
import ImageConverter from "./pages/ImageConverter";
import { useEffect, useState } from "react";
// query
const queryClient = new QueryClient();

const App = () => {
  const font = "'General Sans', sans-serif";
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
          <Box className="h-screen w-full text-gray-800 tracking-widde font-general  box-border flex items-start justify-start bg-[#ffffff] relative">
            {/* navbar */}

            <SideBar />

            {/* content */}
            <Box className="h-full w-full  pt-0 box-border flex flex-col items-center justify-start">
              <Navbar />
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/basic-listing" element={<BasicListing />} />
                <Route path="/open-box-listing" element={<OpenBox />} />
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
