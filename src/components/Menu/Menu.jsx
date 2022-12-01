import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PizzaListItem from '../PizzaListItem/PizzaListItem';


export default function Menu() {

    const dispatch = useDispatch();
    const [newOrder, setOrder] = useState([])
    const pizzaList = useSelector(store => store.pizzaList);

    const submitOrder = () => {
        // take the order and send it to redux
        console.log('in submitOrder')
        dispatch({type: 'SET_ORDER',payload: newOrder})
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
