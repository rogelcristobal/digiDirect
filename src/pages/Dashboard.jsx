import  {Box,Grid,Paper} from '@mui/material'
const Dashboard = () => {
  return (
    <>
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
            <Grid item xs={4}>
              <Paper
                variant="outlined"
                className="h-60 w-full  rounded-2xl bg-[#ffffff] box-border shadow-sm"
              ></Paper>
            </Grid>
            <Grid item xs={8} >
              <Paper
                variant="outlined"
                className="h-full w-full rounded-2xl bg-[#ffffff] box-border shadow-sm"
              >



                
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                variant="outlined"
                className="h-60 w-full  rounded-2xl bg-[#ffffff] box-border shadow-sm"
              ></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                variant="outlined"
                className="h-full w-full rounded-2xl bg-[#ffffff] box-border shadow-sm"
              />
            </Grid>
            <Grid item xs={6}>
              <Paper
                variant="outlined"
                className="h-24 w-full rounded-2xl bg-[#ffffff] box-border shadow-sm"
              />
            </Grid>
            <Grid item xs={6}>
              <Paper
                variant="outlined"
                className="h-24 w-full rounded-2xl bg-[#ffffff] box-border shadow-sm"
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
    </>
  );
};

export default Dashboard;
