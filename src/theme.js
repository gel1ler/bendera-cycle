import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        }
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif'
    }
})

export default theme;