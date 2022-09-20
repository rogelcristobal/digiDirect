import React from 'react';
import {Box,Typography} from'@mui/material'
const PageTitle = ({category,title,subTitle}) => {
  return (
    <Box className=" mb-12 ">
          <Typography
            variant="h6"
            className="font-medium text-sm text-blue-500 tracking-tight capitalize mb-6"
          >
           {category}
          </Typography>
          <Typography
            variant="h6"
            className="font-medium text-3xl tracking-tight capitalize"
          >
            {title}
          </Typography>

          <Typography variant="subtitle1" className=" leading-5 text-sm font-medium indent-4  mt-2">{subTitle}</Typography>
        </Box>
  );
}

export default PageTitle;
