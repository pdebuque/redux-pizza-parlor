import '../PizzaListItem/PizzaListItem.css';

import { useState } from 'react'

export default function PizzaListItem({ pizza, newOrder, setOrder }) {

    // handle click: add the pizza to the state 
    const handleClick = () => {
        setOrder([...newOrder, pizzas])
    }

    const handleChange = (e) => {
        setPizzas({ id: pizza.id, quantity: e.target.value })
    }

	const handleRemove = (e) => {
	pizza.filter()
}

    const [pizzas, setPizzas] = useState({ id: '', quantity: '' })

    // pizza will be of form {id: x, quantity: y}
    return (
        <div key={pizza.id} className='menu-item'>
            <img src={pizza.image_path} style={{ width: 200 }} alt={`${pizza.name} picture`} />
            {pizza.name}. {pizza.description} ${pizza.price}
            <input
                type="number"
                required
                placeholder="how many?"
                value={pizzas.quantity}
                onChange={handleChange}
            />
						<div className='button-section'>
							<button onClick={handleClick}>add pizza</button>
							<button onClick={handleRemove}> Remove Pizza</button>
						</div>
            
        </div>
    )
}