import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './views/Home/Home.container'
import Panel from './views/Edit/Edit.container'
import About from './views/About/About.container'
import NotFound from './views/NotFound/NotFound.container'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/edit"><Panel/></Route>
        <Route path="/about"><About/></Route>
        <Route path="*"><NotFound name="Test"/></Route>
      </Switch>
    </Router>
  );
}

export default App;
