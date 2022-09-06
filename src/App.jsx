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
  Divider
} from "@mui/material";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import DigiLogoInJs from "./components/DigiLogoInJs";
import { AiFillEye } from "react-icons/ai";
import ListItemBtnComponent from "./components/ListItemBtnComponent";
import ListItemBtnExpandable from "./components/ListItemBtnExpandable";
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
    <Box className="h-screen w-full box-border flex items-start justify-start bg-[#ffffff]">
      <Box className="h-[4.5rem]  w-full top-0 left-0 fixed  bg-[#ffffff]">
        {/* Nav */}
        <Divider></Divider>
      </Box>

      <Box className="h-screen w-[22rem] bg-black z-10 box-border shadow-lg ">
        {/* sidebar */}
        <Box className="h-fit w-full flex flex-col items-start justify-start px-5 py-6   box-border space-y-12 ">
          {/* digi logo */}
          <DigiLogoInJs />

          <Link
            variant="button"
            className="w-full py-4 rounded-lg bg-[rgba(34,34,34,255)]/30 hover:bg-[rgba(34,34,34,255)]/50 px-5 flex flex-col justify-start items-start box-border transition-all ease-in-out  duration-300"
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
              <Badge
                variant="dot"
                componentsProps={{
                  badge: {
                    className: "bg-green-800 top-1 -right-1  rounded-full",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  className="capitalize text-xs text-neutral-300"
                >
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
        <Box className="w-full px-4 box-border h-60 ">
          <Paper variant="outlined" className="w-full h-full mt-4 bg-inherit">
            {/* general */}
            <Typography
              variant="body1"
              className="text-neutral-700 text-xs font-medium"
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
      <Box className="h-full w-full pt-16 px-8 box-border flex items-start justify-center">
        <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-4 ">
          <Box className="h-full overflow-auto w-full space-y-0 box-border">
            {/* content */}

             <Box className=" mt-6">
              <Typography variant="h5" className="font-semibold text-2xl tracking-thin">Good afternoon, User</Typography>
             </Box>

            <Grid container columns={12} columnSpacing={2} rowSpacing={2} className="box-border p-4"> 
              <Grid item xs={6}>
                <Paper
                  variant="contained"
                  className="h-52 w-full  rounded-lg bg-[#e6e6e6] box-border drop-shadow-sm"
                >
                  
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  variant="outlined"
                  className="h-40 w-full rounded-lg bg-[#ffffff] box-border drop-shadow-sm"
                />
              </Grid>

              <Grid item xs={12}>
                <Paper
                  variant="outlined"
                  className="h-[30rem] w-full rounded-lg bg-[#ffffff] box-border drop-shadow-sm"
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
