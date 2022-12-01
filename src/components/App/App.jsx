import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, Router } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <p>cart price</p>
      </header>
      <Router>

        <Route exact path="/">
          <Menu />
        </Route>
        <Route exact path="/customer">
          <Customer />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>

      </Router>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
