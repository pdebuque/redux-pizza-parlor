import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function Menu() {

const pizzaList = useSelector(store=>store.pizzaList);

    return(
        pizzaList.map(pizza=>{
            return(
                <div key = {pizza.id}>{pizza.name}</div>
                )
        })
    )
}
