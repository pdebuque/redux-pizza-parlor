import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Customer.css';
import { TextField, Select, MenuItem, InputLabel, Button, FormControl } from '@mui/material'


export default function Customer() {

    const [newCustomer, setCustomer] = useState({
        customer_name: "",
        street_address: "",
        city: "",
        zip: "",
        type: '',
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
            <form id="customer-form" onSubmit={handleSubmit}>
                <h2>Enter your info</h2>
                <TextField
                    class="form-input"
                    type="text"
                    variant='standard'
                    size='small'
                    required
                    value={newCustomer.customer_name}
                    onChange={(e) => setCustomer({ ...newCustomer, customer_name: e.target.value })}
                    placeholder="Name"
                />
                <TextField
                    class='form-input'
                    variant='standard'
                    size='small'
                    type="text"
                    required
                    value={newCustomer.street_address}
                    onChange={(e) => setCustomer({ ...newCustomer, street_address: e.target.value })}
                    placeholder="Street Address"
                />
                <TextField
                    class='form-input'
                    variant='standard'
                    size='small'
                    type="text"
                    required
                    value={newCustomer.city}
                    onChange={(e) => setCustomer({ ...newCustomer, city: e.target.value })}
                    placeholder="City"
                />
                <TextField
                    class='form-input'
                    variant='standard'
                    size='small'
                    type="number"
                    required
                    value={newCustomer.zip}
                    onChange={(e) => setCustomer({ ...newCustomer, zip: e.target.value })}
                    placeholder="Zip"
                />
                <FormControl class='form-select'>
                    <InputLabel id="pickup-deliver-label">Pickup or Delivery</InputLabel>
                    <Select
                        labelId="pickup-deliver-label"
                        // class='form-input'
                        // name="type"
                        label='Pickup or Delivery'
                        id="type"
                        value={newCustomer.type}
                        onChange={(e) => setCustomer({ ...newCustomer, type: e.target.value })}
                    >
                        <MenuItem value="Pickup">Pickup</MenuItem>
                        <MenuItem value="Delivery">Delivery</MenuItem>
                    </Select></FormControl>
                <Button type="submit">NEXT</Button>
            </form>
        </main>
    )
}