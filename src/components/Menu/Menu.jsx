<<<<<<< HEAD
import React from "react";


function Menu() {
    return (
        <p>MENU</p>
        // <img src='images/pizza_photo.png' />
        // <p>Pizza is great.</p>
    )
}


export default Menu;
=======
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PizzaListItem from '../PizzaListItem/PizzaListItem';


export default function Menu() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [newOrder, setOrder] = useState([]);
    const pizzaList = useSelector(store => store.pizzaList);

    const submitOrder = () => {
        // take the order and send it to redux
        console.log('in submitOrder');
        dispatch({type: 'SET_ORDER',payload: newOrder});
        history.push('/customer');
    }

    return (
        <main>
            {JSON.stringify(newOrder)}
            {pizzaList.map(pizza => {
                return (<PizzaListItem pizza={pizza} setOrder={setOrder} newOrder={newOrder} />)
            })}
            <button onClick={submitOrder}>submit</button>
        </main>

    )
}
>>>>>>> c93692ceeff32f0bad3665fb0644c1c3a296855f
