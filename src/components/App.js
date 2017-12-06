import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './HomePage';
import NewHabitPage from './NewHabitPage';
import HabitPage from './HabitPage';
import EditHabitPage from './EditHabitPage';

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/new" component={NewHabitPage} />
          <Route path="/:habitId/edit" component={EditHabitPage} />
          <Route path="/:habitId" component={HabitPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;