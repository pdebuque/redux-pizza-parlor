import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

const currentOrder = (
	state = {
		customer_name: "",
		street_address: "",
		city: "",
		zip: "",
		total: 0,
		type: "",
		pizzas: [],
	},
	action
) => {
	if (action.type === "ADD_PIZZAS") {
		return { ...state, pizzas: action.payload };
	}
	if (action.type === "SET_CUSTOMER") {
		const customer = action.payload;
		return {
			...state,
			customer_name: customer.name,
			street_address: customer.address,
			city: customer.city,
			zip: customer.zip,
		};
	}
	return state;
};

const store = createStore(
	combineReducers({
		currentOrder,
	}),
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
