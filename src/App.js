import React, { useEffect } from 'react';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import logo from './TB1PooFOlr0gK0jSZFnXXbRRXXa.jpg';
import { closeSuggation, saveSuggation } from './Components/redux/action/ProductAction';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const data = useSelector(state => ({Products: state.Product}))
  const dispatch = useDispatch();
  const { saveValue, value } = data.Products
  return (
    <div className="App" style={{position: 'relative'}} onClick ={() => {
      if(saveValue.length || value){
      dispatch(saveSuggation())
      }
      dispatch(closeSuggation())

    }}>
      <Switch>
        <Route path='/' exact component= { Home } />
      </Switch>
    </div>
  );
}

export default App;
