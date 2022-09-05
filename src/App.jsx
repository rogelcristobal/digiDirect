import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

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

const Main = () => {
  return (
    <Paper variant="outlined" className="h-screen w-80 box-border font-poppins">
      <Typography variant="p" color="initial">text</Typography>
    </Paper>
  );
};
export default App;
