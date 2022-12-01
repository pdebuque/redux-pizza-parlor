import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Checkout.css";



function Checkout(){

    const currentOrder = useSelector(store => store.currentOrder);
    const history = useHistory();


    function submitOrder(){

        console.log ('in submitOrder!');
        axios.post('/api/order', {currentOrder} )
        .then( response=> {
            console.log(response);
            alert('ORDER SUBMITTED!');      //TODO TO BE DEVELOPED INTO A MODAL
            history.push('/');              //BRINGS US BACK TO LANDING PAGE
        }).catch(error => {
            console.log(error);
            alert('ORDER ERROR');
            history.push('/');              //!NEEDS TO BE DELETED, USING FOR TEST PURPOSES
        })

    }

    return(
        <div className="checkOut">
            <h3 id="checkoutDetails">Checkout Details</h3>
            <p>Order Total: ${currentOrder.total}</p>
            <p>Order: {currentOrder.pizzas} will need to be mapped</p>
            <p>Customer Name: {currentOrder.customer_name}</p>
            <h3>Delivery Address:</h3>
            <p>Street: {currentOrder.street_address}</p>
            <p>City: {currentOrder.city}</p>
            <p>Zip: {currentOrder.zip}</p>
            <p>{currentOrder.type}</p>
            
            <button type="submit" className="checkoutButton" onClick={()=>submitOrder()}>Submit Order</button>
        </div>

    )


}

export default Checkout;

{/* <Checkout />
- shows order data from state(redux)✅
- checkout button executes post with order data✅
- orders are saved into an array of orders✅ */}