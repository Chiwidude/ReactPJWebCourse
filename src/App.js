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

const App = ()  => {
  return (
    <ThemeProvider theme= {theme}>
      <Router>
          <Header>
            <Route
            exact = {true}
            path="/"
            component={Landing}

            />
          </Header>
      </Router> 
    </ThemeProvider>
   
  );
}

export default App;
