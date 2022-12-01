

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Admin from "../Admin/Admin.jsx";
import Customer from '../Customer/Customer';
import Checkout from '../Checkout/Checkout';
import Menu from '../Menu/Menu'


function App() {

  const dispatch = useDispatch()
  const getPizzaList = () => {
    axios.get('/api/pizza')
      .then(({ data }) => {
        dispatch({
          type: 'SET_PIZZA_LIST',
          payload: data
        })
      })
      .catch(err => console.log('could not get pizza list', err))
    // dispatch to index: add pizzas
  }
  //use selector to get the pizza list
  useEffect(() => {
    getPizzaList()
  }, []);


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
        {/* <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route> */}

      </Router>

      {/* 
      
<Header />
      <Router>
    <Menu />
      - executes get at /pizza and displays on dom
      - records pizza choice(s) to state
      - next button navs to <customer />

    <Customer />
      - saves user data into state
      - next button navs to checkout

    <Checkout />
      - shows order data from state(redux)
      - checkout button executes post with order data
      - orders are saved into an array of orders

    <Admin />
      - display all orders

</Router>
      
      */}
    </div>
  );
}

export default App;
