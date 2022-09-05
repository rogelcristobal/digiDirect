import {createTheme,ThemeProvider} from "@mui/material/styles";
import Typography from '@mui/material/Typography'
const App = () => {

  const font =  "'Poppins', sans-serif"
  const theme = createTheme({
    typography:{
      fontFamily:[
        font
      ].join(',')
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="p">world</Typography>
     
    </ThemeProvider>
  );
}

export default App;
