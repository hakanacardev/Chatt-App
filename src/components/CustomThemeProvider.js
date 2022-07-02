import { createTheme, ThemeProvider } from '@mui/material/styles';


import { trTR as coreTrTR } from '@mui/material/locale';




const CustomThemeProvider = ({ children }) => {

    const theme = createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#d05515',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#3f3f3f',
                contrastText: '#ffffff',
            },
            text: {
                primary: '#3f3f3f',
            },
            background: {
                default: '#f5f5f5',
            },
        },
        typography: {
            fontFamily: 'Poppins',
        },
    },
        coreTrTR,
    )

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )

}

export default CustomThemeProvider