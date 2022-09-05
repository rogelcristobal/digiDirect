import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { Paper, Typography ,Box} from "@mui/material";

const App = () => {
  const font = "'Poppins', sans-serif";
  const theme = createTheme({
    typography: {
      fontFamily: [font].join(","),
    },
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

const Bordered=({children})=>{
  return (
    <Paper variant="outlined" className="h-full w-full box-border">{children}</Paper>
  )
}

const Main = () => {
  return (
    <Box className="h-screen w-full box-border flex items-start justify-start">
      {/* sidebar */}
      <Box className="h-screen w-80">
        <Bordered/>
      </Box>
      <Box className="h-full w-full pt-20 px-6 box-border flex items-start justify-center"> 
        {/* content */}
        <Box className="h-full w-full box-border flex items-center">
          <Bordered >
            <Box className="h-52 w-52"><Bordered>a</Bordered></Box>
          </Bordered>
        
        </Box>
    
      </Box>
    
    </Box>
  );
};
export default App;
