import { createTheme, ThemeProvider } from '@mui/material/styles';


import { trTR as coreTrTR } from '@mui/material/locale';




const CustomThemeProvider = ({ children }) => {

    const theme = createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#8e44ad',
            },
            secondary: {
                main: '#f1c40f',
            },
        },
        typography: {
            fontFamily: 'Rubik',
        },
        shape: {
            borderRadius: 8,
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