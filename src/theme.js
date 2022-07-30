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
    dark: {
      main: '#161616'
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
          backgroundColor: "#10101d",
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }
      }
    }
  }
})

export default theme;