import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Habit from './habit';

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Habit}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;