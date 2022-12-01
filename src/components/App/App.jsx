
import React from "react";
import axios from "axios";
import "./App.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Checkout from "../Checkout/Checkout";
import { HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <Router>

        <Route exact path="/">
          <Menu />
        </Route>
        <Route exact path="/customer">
          {/* <Customer /> */}
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/admin">
          {/* <Admin /> */}
        </Route>

      </Router>
      {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}


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
