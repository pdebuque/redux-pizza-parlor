import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Header.css";


function Header() {

  const cart = useSelector(store => store.currentOrder);
	//const [totalPrice, setTotalPrice] = useState([]); 	

    return (
        <div className="headerDiv">
<p> {JSON.stringify(cart)} </p>
            <h1>
                Prime Pizza Shoppe
            </h1>
            <h2 className="cartTotal">
                Total in Cart: {cart.total}
            </h2>
        </div>
    );
}

export default Header;