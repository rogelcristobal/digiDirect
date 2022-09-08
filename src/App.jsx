import {
	createTheme,
	ThemeProvider,
	StyledEngineProvider,
} from "@mui/material/styles";
import { Paper, Typography, Box, List, Grid, Divider } from "@mui/material";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import DigiLogoInJs from "./components/DigiLogoInJs";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import ListItemBtnComponent from "./components/ListItemBtnComponent";
import ListItemBtnExpandable from "./components/ListItemBtnExpandable";
import useRequest from "./requests/useRequest";
import { useEffect } from "react";
const App = () => {
	const font = "'poppins', sans-serif";
	const theme = createTheme({
		typography: {
			fontFamily: [font].join(","),
		},
	});
	return (
		<HashRouter>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<Main />
				</ThemeProvider>
			</StyledEngineProvider>
		</HashRouter>
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
	const { fetch, state } = useRequest();
	useEffect(() => {
		fetch();
	}, []);
	console.log(state);
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/dashboard" />} />
			<Route
				path="/dashboard/*"
				element={
					<Box className="h-screen w-full box-border flex items-start justify-start bg-[#ffffff] ">
						<Box className="h-[4.5rem]   w-full top-0 left-0 fixed flex items-end justify-end bg-[#ffffff]  "></Box>
						<Box className="h-screen w-[22rem] bg-[#ffffff] z-10 box-border relative pt-0 shadow">
							<Divider
								orientation="vertical"
								className="absolute right-0 top-0"
								light
							></Divider>
							{/* sidebar */}
							<Box className="h-32 w-full flex flex-col items-start justify-center px-5 py-6 bg-[#111827] relative box-border space-y-12 ">
								{/* digi logo */}
								<DigiLogoInJs size="text-xl" color="text-blue-500" />
								{/* <div className="h-1 w-full absolute bottom-0 left-0 bg-blue-500"></div> */}
							</Box>
							<Box className="w-full px-0 box-border h-60 mt-6 ">
								<Paper
									variant="contained"
									className="w-full bg-inherit rounded-2xl h-auto max-h-[25rem] py-4 px-6 overflow-y-scroll box-border mt-4 "
								>
									{/* general */}
									<Typography
										variant="body1"
										className="text-neutral-700/40 text-xs font-semibold ml-2"
									>
										General
									</Typography>

									<List>
										<ListItemBtnExpandable
											textColor="text-blue-500"
											bgColor="bg-blue-50"
											title="product listing"
											initialState={true}
											enableIcon={<HiChevronDown className="text-inherit " />}
											disableIcon={<HiChevronRight className="text-inherit" />}
										>
											{[{ title: "normal listing" }, { title: "open box" }].map(
												(item, idx) => (
													<ListItemBtnComponent
														hoverColor="hover:text-blue-500"
														title={item.title}
														key={idx}
													/>
												)
											)}
										</ListItemBtnExpandable>
										<ListItemBtnExpandable
											textColor="text-blue-500"
											bgColor="bg-blue-50"
											title="image converter"
											enableIcon={<HiChevronDown className="text-inherit " />}
											disableIcon={<HiChevronRight className="text-inherit" />}
										>
											{[{ title: "webp to jpg" }, { title: "png to jpg" }].map(
												(item, idx) => (
													<ListItemBtnComponent
														hoverColor="hover:text-blue-500"
														title={item.title}
														key={idx}
													/>
												)
											)}
										</ListItemBtnExpandable>
										<ListItemBtnExpandable
											textColor="text-blue-500"
											bgColor="bg-blue-50"
											title="templates"
											initialState
											enableIcon={<HiChevronDown className="text-inherit " />}
											disableIcon={<HiChevronRight className="text-inherit" />}
										>
											{[
												{ title: "normal listing template" },
												{ title: "open box template" },
											].map((item, idx) => (
												<ListItemBtnComponent
													hoverColor="hover:text-blue-500"
													title={item.title}
													key={idx}
												/>
											))}
										</ListItemBtnExpandable>
									</List>
								</Paper>
							</Box>
						</Box>
						<Box className="h-full w-full pt-[4.5rem]  box-border flex items-start justify-center">
							<Routes>
								<Route
									index
									element={
										<Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
											<Box className="h-full overflow-auto w-full  space-y-3 box-border px-8 pt-5">
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
															variant="outlined"
															className="h-60 w-full  rounded-2xl bg-[#ffffff] box-border shadow-sm"
														></Paper>
													</Grid>
													<Grid item xs={6}>
														<Paper
															variant="outlined"
															className="h-48 w-full rounded-2xl bg-[#ffffff] box-border shadow-sm"
														/>
													</Grid>
													<Grid item xs={8}>
														<Paper
															variant="outlined"
															className="h-48 w-full rounded-2xl bg-[#ffffff] box-border shadow-sm"
														/>
													</Grid>

													<Grid item xs={12}>
														<Paper
															variant="outlined"
															className="h-[30rem] w-full rounded-2xl bg-[#ffffff] box-border shadow-sm"
														/>
													</Grid>
												</Grid>
											</Box>

											<Box className="h-60 w-60">{/* page nav */}</Box>
										</Box>
									}
								/>
							</Routes>
						</Box>
					</Box>
				}
			></Route>
			<Route path="/login" element={<div className="h-full bg-blue-100">s</div>} />
		</Routes>
	);
};
export default App;

// https://material-kit-pro-react.devias.io/dashboard
