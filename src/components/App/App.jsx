import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Admin from "../Admin/Admin.jsx";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='App-title'>Prime Pizza</h1>
				<p>cart price</p>
			</header>
			<Router>
				<Route exact path='/'>
					{/* <Menu /> */}
				</Route>
				<Route exact path='/customer'>
					{/* <Customer /> */}
				</Route>
				<Route exact path='/checkout'>
					{/* <Checkout /> */}
				</Route>
				<Route exact path='/admin'>
					<Admin />
				</Route>
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
