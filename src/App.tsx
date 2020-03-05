import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Note from './views/Note/Note.container'
import Edit from './views/Edit/Edit.container'
import About from './views/About/About.container'
import NotFound from './views/NotFound/NotFound.container'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/note">
          <Note/>
        </Route>
        <Route path="/edit">
          <Edit/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
