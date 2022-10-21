import { Box, Paper, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";


const Dashboard = () => {


  return (
    <>
      <Box className="w-full h-auto box-border px-14  pt-8 pb-36 space-y-6">
        {/* content */}

        <Box className="mb-8 w-full h-auto box-border  space-y-6">
          {/* <PageTitle
            category="dashboard"
            title={
              <Typography
                variant="body2"
                className="font-[500] text-2xl text-gray-700 capitalize"
              >
                good afternoon, user!
              </Typography>
            }
          /> */}
        </Box>

        <Box className="grid grid-flow-row grid-cols-12 gap-6 ">
          <Box className="col-span-8">
            <Paper
              variant="contained"
              className="h-56 w-full  rounded-lg  bg-inherit  box-border border-md "
            ></Paper>
          </Box>
          <Box className="col-span-4 row-span-2">
            <Paper
              variant="contained"
              className="h-full w-full  rounded-lg  bg-inherit  box-border border-md "
            ></Paper>
          </Box>
          <Box className="col-span-4">
            <Paper
              variant="contained"
              className="h-20 w-full  rounded-lg  bg-inherit  text-white box-border px-8 flex items-center justify-end border-md"
            >
              <Typography variant="h6" className=" font-base  text-sm">
                WebP to JPG
              </Typography>
            </Paper>
          </Box>
          <Box className="col-span-4">
            <Paper
              variant="contained"
              className="h-20 w-full  rounded-lg  bg-inherit  box-border border-md "
            ></Paper>
          </Box>

          <Box className="col-span-4">
            <Paper
              variant="contained"
              className="h-60 w-full  rounded-lg  bg-inherit  box-border border-md "
            ></Paper>
          </Box>

          <Box className="col-span-8 ">
            <Paper
              variant="contained"
              className="h-[38rem] w-full  rounded-lg  bg-inherit  box-border border-md "
            ></Paper>
          </Box>
        </Box>
      </Box>

      {/* <Box className="h-52 w-60">page nav</Box> */}
    </>
  );
};

export default Dashboard;
