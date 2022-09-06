import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import {
  Paper,
  Typography,
  Box,
  Divider,
  Button,
  Stack,
  Link,
  Badge,
} from "@mui/material";
import DigiLogoInJs from "./components/DigiLogoInJs";
import { AiFillEye } from "react-icons/ai";
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

const Bordered = ({ children }) => {
  return (
    <Paper variant="outlined" className="h-full  w-full box-border bg-inherit">
      {children}
    </Paper>
  );
};

const Main = () => {
  return (
    <Box className="h-screen w-full box-border flex items-start justify-start bg-[#f9fafc]">
      <Box className="h-[4.5rem]  w-full top-0 left-0 fixed shadow-sm">
        {/* Nav */}
      </Box>

      <Box className="h-screen w-80 bg-black z-10 box-border ">
        {/* sidebar */}
        <Box className="h-44 w-full flex flex-col items-start justify-start p-4 box-border space-y-6">
          {/* digi logo */}
          <DigiLogoInJs />

          <Link
            variant="button"
            className="w-full py-4 rounded-xl bg-[rgba(34,34,34,255)]/30 hover:bg-[rgba(34,34,34,255)]/50 px-5 flex flex-col justify-start items-start box-border"
            underline="none"
            href="https://www.digidirect.com.au/"
            target="_blank"
            rel="noopener"
           
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              className="w-full"
            >
              <Badge variant="dot" componentsProps={{badge: {className: 'bg-green-800 top-1 -right-1  rounded-full'}}}>
                <Typography variant="body2" className="capitalize text-xs text-neutral-300">
                  view dashboard
                </Typography>
              </Badge>

              <AiFillEye className="text-neutral-700 text-lg"></AiFillEye>
            </Stack>
            <Typography
              variant="caption"
              className="text-neutral-700 normal-case text-[0.65rem] font-medium"
            >
              www.digidirect.com.au
            </Typography>
          </Link>
        </Box>
        <Divider light className="bg-neutral-800" />

        <Box className="w-full px-4 box-border h-60 ">
          <Paper variant="outlined" className="w-full h-full mt-4 bg-inherit">
            <Typography
              variant="body2"
              className="text-neutral-800 font-semibold"
            >
              General
            </Typography>
          </Paper>
        </Box>
      </Box>
      <Box className="h-full w-full pt-20 px-6 box-border flex items-start justify-center">
        <Box className="h-full w-full box-border flex items-start gap-3">
          <Box className="h-full overflow-auto w-full ">{/* content */}</Box>

          <Box className="h-60 w-60">{/* page nav */}</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default App;
