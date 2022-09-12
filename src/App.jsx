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
    <QueryClientProvider client={queryClient} >
      <ReactQueryDevtools initialIsOpen={false} />
      <HashRouter basename="digiDirect">
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
  const { pathname } = useLocation();
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route
        path="/*"
        element={
          <Box className="h-screen w-full box-border flex items-start justify-start bg-[#ffffff] ">
            {/* navbar */}
            <Box className="h-[4.5rem]   w-full top-0 left-0 fixed flex items-end justify-end bg-[#ffffff]  shadow-sm">
              <div className="w-full h-full relative">
                <Divider
                  variant="fullWidth"
                  className="absolute bottom-0 right-0 w-full"
                  light
                ></Divider>
              </div>
            </Box>

            <SideBar />
            {/* content */}
            <Box className="h-full w-full pt-[5rem]  box-border flex items-start justify-center">
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/normal-listing" element={<NormalListing />} />
                <Route path="/open-box-listing" element={<NormalListing />} />
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

// https://material-kit-pro-react.devias.io/dashboard

// code blocks with copy btn (https://www.npmjs.com/package/react-code-blocks)
// html playground (https://www.npmjs.com/package/playground-elements)
