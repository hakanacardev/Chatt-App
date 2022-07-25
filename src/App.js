import Router from "./components/Router"
import CustomThemeProvider from './components/CustomThemeProvider';
import { CssBaseline } from "@mui/material"
import firebase from "./components/firebase";
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import store from "./store/store"
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}
const App = () => {

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <CustomThemeProvider>
          <CssBaseline />
          <Router />
        </CustomThemeProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}



export default App
