import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import HomePage from './HomePage';
import NewHabitPage from './NewHabitPage';
import HabitPage from './HabitPage';
import EditHabitPage from './EditHabitPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new" component={NewHabitPage} />
        <Route path="/:habitId/edit" component={EditHabitPage} />
        <Route path="/:habitId" component={HabitPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;