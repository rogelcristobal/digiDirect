import  {Box,Paper} from '@mui/material'
import Masonry from '@mui/lab/Masonry'

const Dashboard = () => {
  return (
    <>
      <Box className="h-full w-full box-border flex items-start gap-3 rounded-lg p-0   ">
        <Box className="h-full overflow-auto w-full  space-y-3 box-border px-8 pt-5">
          {/* content */}

          {/* <Box className=" mt-12">
            <Typography variant="h5" className="font-semibold text-[1.75rem] tracking-tight">Good afternoon, User</Typography>
          </Box> */}
          {/* <Paper
                variant="outlined"
                className="h-52 w-full  rounded-2xl bg-[#ffffff] box-border shadow-sm"
              ></Paper> */}

              <Masonry columns={5} spacing={3}>
              <Paper
                variant="outlined"
                className="h-52 w-full  rounded-2xl bg-[#ffffff] box-border shadow-sm"
              ></Paper>
              </Masonry>

        
        </Box>

        {/* <Box className="h-52 w-60">page nav</Box> */}
      </Box>
    </>
  );
};

export default Dashboard;
