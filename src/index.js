import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './common/header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Landing from './pages/landing'

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
          <Route exact path="/"  component= {Landing}/>
      </Router> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
