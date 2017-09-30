import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Habit from './habit';
import HabitNew from './habit-new';

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/new" component={HabitNew}/>
          <Route path="/" component={Habit}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;