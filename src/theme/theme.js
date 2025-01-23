import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,      // Extra pequeño: hasta 599px
            sm: 480,    // Pequeño: smartphones grandes
            md: 768,    // Mediano: tablets (orientación vertical)
            lg: 1024,   // Grande: laptops estándar
            xl: 1440,   // Extra grande: monitores grandes
        },
    },
    palette: {
        primary: {
            main: '#B91372', // Magenta
        },
        secondary: {
            main: '#0E0004', // Licorice
        },
        background: {
            default: '#FFFFFF', // Blanco
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default theme;
