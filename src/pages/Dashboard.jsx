import { Box, Paper, Typography } from "@mui/material";
import Texthighlight from "../components/Texthighlight";
const Dashboard = () => {
  return (
    <>
      <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
        <Box className="h-full overflow-auto w-full  space-y-3 box-border px-16 pt-28">
          {/* content */}

          <Box className="mb-6">
            
              <Texthighlight text="dashboard" variant="h6" sx="capitalize font-medium text-3xl"/>
            
          </Box>

          <Box className="grid grid-flow-row grid-cols-12 gap-6 ">
            <Box className="col-span-8">
              <Paper
                variant="contained"
                className="h-56 w-full  rounded-2xl  bg-[#ffffff] shad box-border sample-border "
              ></Paper>
            </Box>
            <Box className="col-span-4 row-span-2">
              <Paper
                variant="contained"
                className="h-full w-full  rounded-2xl  bg-[#ffffff] shad box-border sample-border "
              ></Paper>
            </Box>
            <Box className="col-span-4">
              <Paper
                variant="contained"
                className="h-20 w-full  rounded-2xl  bg-[#ffffff] shad text-white box-border px-8 flex items-center justify-end sample-border"
              >
                <Typography variant="h6" className=" font-base  text-sm">
                  WebP to JPG
                </Typography>
              </Paper>
            </Box>
            <Box className="col-span-4">
              <Paper
                variant="contained"
                className="h-20 w-full  rounded-2xl  bg-[#ffffff] shad box-border sample-border "
              ></Paper>
            </Box>

            <Box className="col-span-4">
              <Paper
                variant="contained"
                className="h-60 w-full  rounded-2xl  bg-[#ffffff] shad box-border sample-border "
              ></Paper>
            </Box>

            <Box className="col-span-8 ">
              <Paper
                variant="contained"
                className="h-[38rem] w-full  rounded-2xl  bg-[#ffffff] shad box-border sample-border "
            ></Paper>
            </Box>
          </Box>
        </Box>

        {/* <Box className="h-52 w-60">page nav</Box> */}
      </Box>
    </>
  );
};

export default Dashboard;
