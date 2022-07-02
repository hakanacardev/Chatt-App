import Router from "./components/Router"
import CustomThemeProvider from './components/CustomThemeProvider';
import { CssBaseline } from "@mui/material"

const App = () => {

  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Router />
    </CustomThemeProvider>

  )
}

export default App
