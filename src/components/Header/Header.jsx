import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";


function Header() {

    const cartTotal = useSelector(store => store.currentOrder.total);


    return (
        <div className="headerDiv">
            <h1>
                Prime Pizza Shoppe
            </h1>
            <h2 className="cartTotal">
                Total in Cart: ${cartTotal}
            </h2>
        </div>
    )
}

export default Header;