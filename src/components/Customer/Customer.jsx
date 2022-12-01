import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function Customer() {

    const [newCustomer, setCustomer] = useState({
        customer_name: "",
        street_address: "",
        city: "",
        zip: "",
        type: 'Pickup',
    })

    const currentOrder = useSelector(store => store.currentOrder)

    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('in handleSubmit');
        // dispatch to redux
        dispatch({
            type: 'SET_CUSTOMER',
            payload: newCustomer
        })
        // reset inputs
        setCustomer({
            customer_name: "",
            street_address: "",
            city: "",
            zip: "",
            type: 'Pickup'
        });
        history.push('/checkout')
        // navigate to next page
    }


    return (
        <main>
            {JSON.stringify(currentOrder)}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    required
                    value={newCustomer.customer_name}
                    onChange={(e) => setCustomer({ ...newCustomer, customer_name: e.target.value })}
                    placeholder="Name"
                />
                <input
                    type="text"
                    required
                    value={newCustomer.street_address}
                    onChange={(e) => setCustomer({ ...newCustomer, street_address: e.target.value })}
                    placeholder="Street Address"
                />
                <input
                    type="text"
                    required
                    value={newCustomer.city}
                    onChange={(e) => setCustomer({ ...newCustomer, city: e.target.value })}
                    placeholder="City"
                />
                <input
                    type="number"
                    required
                    value={newCustomer.zip}
                    onChange={(e) => setCustomer({ ...newCustomer, zip: e.target.value })}
                    placeholder="Zip"
                />
                <select name="type" id="type" onChange={(e) => setCustomer({ ...newCustomer, type: e.target.value })}>
                    <option value="Pickup" selected>Pickup</option>
                    <option value="Delivery">Delivery</option>
                </select>
                <button type="submit">NEXT</button>
            </form>
        </main>
    )
}