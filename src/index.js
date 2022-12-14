import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";


const currentOrder = (state = {
    customer_name: "",
    street_address: "",
    city: "",
    zip: "",
    total: 0,
    type: "",
    pizzas: []
}, action) => {
    // pizza order will be an array
    if (action.type === "SET_ORDER") {
        return { ...state, pizzas: action.payload }
    }
    // form saves customer = {namel, address, city, zip}
    if (action.type === "SET_CUSTOMER") {
        const customer = action.payload
        return {
            ...state, ...action.payload
        }
    }
    if (action.type === 'CLEAR_CART') return {
        customer_name: "",
        street_address: "",
        city: "",
        zip: "",
        type: null,
        total: 0,
        type: "",
        pizzas: []
    }
    return state
}

const pizzaList = (state = [], action) => {
    if (action.type === "SET_PIZZA_LIST") return action.payload
    return state
}

const store = createStore(combineReducers({
    currentOrder, pizzaList
}),
    applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

