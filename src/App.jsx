import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import {
  Paper,
  Typography,
  Box,
  Stack,
  Link,
  Badge,
  List,
  ListItemIcon,
  ListItemButton,
  Collapse,
  ListItemText,
  Grid,
  Divider,
} from "@mui/material";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import DigiLogoInJs from "./components/DigiLogoInJs";
import { AiFillEye } from "react-icons/ai";
import ListItemBtnComponent from "./components/ListItemBtnComponent";
import ListItemBtnExpandable from "./components/ListItemBtnExpandable";
const App = () => {
  const font = "'poppins', sans-serif";
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
    <Box
      variant="contained"
      className="h-full  w-full box-border bg-inherit"
      sx={{
        border: (theme) => `0.75px solid ${theme.palette.divider}`,
      }}
    >
      {children}
    </Box>
  );
};

const Main = () => {
  return (
    // bg-[#f9fafc]
    <Box className="h-screen w-full box-border flex items-start justify-start bg-[#ffffff] ">
      <Box
       
        className="h-[4.5rem]   w-full top-0 left-0 fixed flex items-end justify-end bg-[#ffffff]  "
      >
        
      </Box>
      <Box className="h-screen w-80 bg-[#ffffff] z-10 box-border  pt-2">
        {/* sidebar */}
        <Box className="h-24 w-full flex flex-col items-start justify-start px-5 py-6  box-border space-y-12 ">
          {/* digi logo */}
          <DigiLogoInJs dark size="text-xl" />
        </Box>
        <Box className="w-full px-4 box-border h-60 ">
          <Paper variant="contained" className="w-full h-full mt-4 bg-inherit">
            {/* general */}
            <Typography
              variant="body1"
              className="text-neutral-500/40 text-xs font-medium ml-4"
            >
              General
            </Typography>

            <List>
              <ListItemBtnExpandable
                title="product listing"
                initialState={true}
                enableIcon={<HiChevronDown className="text-inherit " />}
                disableIcon={<HiChevronRight className="text-inherit" />}
              >
                {[{ title: "normal listing" }, { title: "open box" }].map(
                  (item, idx) => (
                    <ListItemBtnComponent title={item.title} key={idx} />
                  )
                )}
              </ListItemBtnExpandable>
              <ListItemBtnExpandable
                title="image converter"
                enableIcon={<HiChevronDown className="text-inherit " />}
                disableIcon={<HiChevronRight className="text-inherit" />}
              >
                {[{ title: "webp to jpg" }, { title: "png to jpg" }].map(
                  (item, idx) => (
                    <ListItemBtnComponent title={item.title} key={idx} />
                  )
                )}
              </ListItemBtnExpandable>
            </List>
          </Paper>
        </Box>
      </Box>
      <Box className="h-full w-full pt-[4.5rem] px-4 box-border flex items-start justify-center">
        <Box className="h-full w-full box-border flex items-start gap-3 rounded-2xl p-0 bg-[#f9fafc]  ">
          <Box className="h-full overflow-auto w-full space-y-3 box-border px-4 pt-5">
            {/* content */}

            {/* <Box className=" mt-12">
              <Typography variant="h5" className="font-semibold text-[1.75rem] tracking-tight">Good afternoon, User</Typography>
            </Box> */}

            <Grid
              container
              columns={12}
              columnSpacing={2.5}
              rowSpacing={2.5}
              className="box-border p-0"
            >
              <Grid item xs={6}>
                <Paper
                  variant="contained"
                  className="h-60 w-full  rounded-2xl bg-[#ffffff] box-border shadow-sm"
                ></Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  variant="contained"
                  className="h-48 w-full rounded-2xl bg-[#ffffff] box-border shadow-sm"
                />
              </Grid>
              <Grid item xs={8}>
                <Paper
                  variant="contained"
                  className="h-48 w-full rounded-2xl bg-[#ffffff] box-border shadow-sm"
                />
              </Grid>

              <Grid item xs={12}>
                <Paper
                  variant="contained"
                  className="h-[30rem] w-full rounded-2xl bg-[#ffffff] box-border shadow-sm"
                />
              </Grid>
            </Grid>
          </Box>

          <Box className="h-60 w-60">{/* page nav */}</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default App;

// https://material-kit-pro-react.devias.io/dashboard
