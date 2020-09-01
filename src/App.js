import React from 'react';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import logo from './TB1PooFOlr0gK0jSZFnXXbRRXXa.jpg'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component= { Home } />
      </Switch>
    </div>
  );
}

export default App;
