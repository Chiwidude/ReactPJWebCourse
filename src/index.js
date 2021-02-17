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

const object = [{
  rating:"4.5",
  title: "Sample Guide 1",
  gods: "Zeus",
  roles: "Solo, Jungle",
  user: "Chiwidude",
  date:"february 16th, 2021"
},
{
  rating:"4.9",
  title: "Sample Guide 2",
  gods: "Hun Batz, Susano",
  roles: "Solo, Jungle",
  user: "Masterchief117",
  date:"february 16th, 2021"
},
{
  rating:"4.7",
  title: "Best Supp Guide S8",
  gods: "",
  roles: "Support",
  user: "Chiwidude",
  date:"february 16th, 2021"
},
{
  rating:"4.8",
  title: "Xbalanque's best Guide S8",
  gods: "Xbalanque",
  roles: "ADC",
  user: "Saitama14",
  date:"february 16th, 2021"
},
{
  rating:"4.5",
  title: "Jungle Guide S8",
  gods: "",
  roles: "Jungle",
  user: "Peralta12",
  date:"february 16th, 2021"
}]

const object2 = [{
  rating:"4.5",
  title: "Sample Build 1",
  gods: "Zeus",
  roles: "Solo, Jungle",
  user: "Chiwidude",
  date:"february 16th, 2021"
},
{
  rating:"4.9",
  title: "Sample Build 2",
  gods: "Hun Batz, Susano",
  roles: "Solo, Jungle",
  user: "Masterchief117",
  date:"february 16th, 2021"
},
{
  rating:"4.7",
  title: "Best Supp Build S8",
  gods: "",
  roles: "Support",
  user: "Chiwidude",
  date:"february 16th, 2021"
},
{
  rating:"4.8",
  title: "Xbalanque's best Build S8",
  gods: "Xbalanque",
  roles: "ADC",
  user: "Saitama14",
  date:"february 16th, 2021"
},
{
  rating:"4.5",
  title: "Jungle Build S8",
  gods: "",
  roles: "Jungle",
  user: "Peralta12",
  date:"february 16th, 2021"
}]

localStorage.setItem("data", JSON.stringify(object))
localStorage.setItem("data-builds", JSON.stringify(object2))

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
