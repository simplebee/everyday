import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Habit from './habit';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Habit}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;