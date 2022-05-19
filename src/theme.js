import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#1D1D1D',
        },
        error: {
            main: red.A400,
        }
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif'
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              color: "#fff",
              backgroundColor: "#1D1D1D",
            }
          }
        }
      }
})

export default theme;