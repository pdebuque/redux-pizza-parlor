import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import '../Menu/Menu.css';

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
// {JSON.stringify(newOrder)}
<div>  
        <main className='menu-container'>
            
            {pizzaList.map(pizza => {
                return (<PizzaListItem pizza={pizza} setOrder={setOrder} newOrder={newOrder} />)
            })}
            <button onClick={submitOrder} className='submit-btn'>submit</button>
        </main>
</div>
    )
}
