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
import {
  useContext,
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import PageScrollableContext from "./context/PageScrollableContext";
import { MouseStateProvider } from "./context/MouseStateContext";
import { TemplateSectionProvider } from "./context/TemplateSectionContext";
import ScrollContext from "./context/ScrollContext";

import LoadingFallback from "./components/LoadingFallback";
import { ScrollProvider } from "./context/ScrollContext";
import Scrollbar from "smooth-scrollbar";
import Scroll from "./components/Scroll";
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
            <ScrollProvider>
              <TemplateSectionProvider>
                <MouseStateProvider>
                  <Main />
                </MouseStateProvider>
              </TemplateSectionProvider>
            </ScrollProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </HashRouter>
    </QueryClientProvider>
  );
};
const Main = () => {
  // sets ref on page load and passes to context to be accessed by all child
  
  const scrollableRef = useRef(null);

  const {setScrollEl,scrollEl}= useContext(PageScrollableContext)
  const {scrollPosition} = useContext(ScrollContext)
  //  const [scrollPosition, setScrollPosition] = useState(0);
  const options = {
    damping: 0.02,
    renderByPixels: true,
  };
  useEffect(() => {
    Scrollbar.init(scrollableRef.current, options);
    setScrollEl(scrollableRef)
  }, [scrollableRef]);

 console.log(scrollPosition)
 
 
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
      <Route
        path="/*"
        element={
          <Box
        
           className="h-screen    w-full  text-[#131313]  box-border flex   items-center justify-start  relative ">
            <Navbar></Navbar>

            {/*scrollable content content */}
            {/* set height to screen  */}
            <Box
              ref={scrollableRef}
              component="main"
              className=" w-full  h-screen   box-border   flex  items-start justify-center     relative "
            >
                <Box
                 className=" w-screen
                 h-full box-border ">
                {/* <Scroll /> */}
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/converter" element={<Converter />} />
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
