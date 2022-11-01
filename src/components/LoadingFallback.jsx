import React from 'react';
import {Box} from '@mui/material';
import  { LinearProgress, linearProgressClasses }from '@mui/material'
import {styled} from '@mui/material/styles'

const StyledLinearProgress = styled(LinearProgress)(({theme})=>({
    height:5,
    backgroundColor:'#93c5fd',
    [`& .${linearProgressClasses.bar}`]:{
        backgroundColor: '#3b82f6',
    },
}))
const LoadingFallback = () => {
  return (
    <Box className="fixed top-0 left-0 box-border w-full  z-50 ">

      <StyledLinearProgress variant="indeterminate" />
 
    </Box>
  );
}

export default LoadingFallback;
