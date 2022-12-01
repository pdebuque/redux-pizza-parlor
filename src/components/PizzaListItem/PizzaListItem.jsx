import '../PizzaListItem/PizzaListItem.css';

import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PizzaListItem({ pizza, newOrder, setOrder }) {

    // handle click: add the pizza to the state 
    const handleClick = () => {
        setOrder([...newOrder, pizzas])
    }

    const handleChange = (e) => {
        setPizzas({ id: pizza.id, quantity: e.target.value })
    }

    const [pizzas, setPizzas] = useState({ id: '', quantity: '' })



    // pizza will be of form {id: x, quantity: y}
    return (

        <Card sx={{ maxWidth: 345, m: 2}}>
            <CardMedia
                component="img"
                height="140"
                image={pizza.image_path}
                alt="pizza pic"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {pizza.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {pizza.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        // <div key={pizza.id} className='menu-item'>
        //     <img src={pizza.image_path} style={{ width: 200 }} alt={`${pizza.name} picture`} />
        //     <div className='pizza-header'>
        //         <span className='pizza-name'>{pizza.name}</span> ${pizza.price}
        //     </div>
        //     <div className='pizza-desc'>{pizza.description}</div>
        //     <input
        //         type="number"
        //         required
        //         placeholder="how many?"
        //         value={pizzas.quantity}
        //         onChange={handleChange}
        //     />
        //     <button onClick={handleClick}>add pizza</button>
        // </div>
    )
}