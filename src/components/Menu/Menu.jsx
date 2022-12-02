import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import '../Menu/Menu.css';

export default function Menu() {

const priceObject = {
'1': 12.99,
'2': 14.99,
'3': 14.99,
'4': 19.99,
'5': 15.99,
'6': 24.99,
'7': 5.99
}


    const dispatch = useDispatch();
    const history = useHistory();
    const [newOrder, setOrder] = useState([]); //each pizza is {id: x, quantity: y}
    const pizzaList = useSelector(store => store.pizzaList);
const cartTotal = newOrder.reduce((acc,curr)=>acc+priceObject[curr.id]*curr.quantity,0)


console.log("Price Object for [1]" , priceObject[1] , "CartTotal: ", cartTotal)

    const submitOrder = () => {
        // take the order and send it to redux
        console.log('in submitOrder');
        dispatch({type: 'SET_ORDER',payload: newOrder});
        dispatch({
type: 'ADD_TO_TOTAL',
payload: cartTotal
});
history.push('/customer');
    }
    return (

<div>  {JSON.stringify(newOrder)}
        <main className='menu-container'>
            {pizzaList.map(pizza => {
                return (<PizzaListItem pizza={pizza} setOrder={setOrder} newOrder={newOrder} />)
            })}
            <button onClick={submitOrder} className='submit-btn'>submit</button>
        </main>
</div>
    )
}
