import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.css';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Landing from './pages/landing/landing'
import SignIn from './pages/login/signIn'
import Guides from './pages/guides/guides'
import Builds from "./pages/latest-builds/latestBuilds"
import GodsView from "./pages/gods/gods"
import Profile from "./pages/profile/profile"
import EditProfile from "./pages/edit-profile/EditProfile"
import Entry from "./pages/entries/Entry"
import SignUp from "./pages/signup/signup"

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Coda Caption',      
      'sans-serif'
    ].join(','),
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme= {theme}>
      <Router>
        <Switch>
        <Route exact path="/"  component= {Landing}/>
        <Route path="/sign-in" component = {SignIn} />
        <Route path="/guides" component= {Guides} />
        <Route path="/latest-builds" component={Builds} />
        <Route path="/gods" component =  {GodsView} />
        <Route path="/profile" component={Profile}/>
        <Route path="/edit-profile" component={EditProfile}/>
        <Route path="/create-build" ><Entry title="Create Build"></Entry> </Route>
        <Route path="/create-guide" ><Entry title="Create Guide"></Entry> </Route>
        <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(  sole.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
