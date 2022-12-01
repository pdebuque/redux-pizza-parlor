import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function Customer() {

    const [newCustomer, setCustomer] = useState({
        name: "",
        address: "",
        city: "",
        zip: "",
        type: null,
    })
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
            name: "",
            address: "",
            city: "",
            zip: "",
            type: null
        });
        history.push('/checkout')
        // navigate to next page
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                required
                value={newCustomer.name}
                onChange={(e) => setCustomer({ ...newCustomer, name: e.target.value })}
                placeholder="Name"
            />
            <input
                type="text"
                required
                value={newCustomer.address}
                onChange={(e) => setCustomer({ ...newCustomer, address: e.target.value })}
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
            <button type="submit">NEXT</button>
        </form>
    )
}