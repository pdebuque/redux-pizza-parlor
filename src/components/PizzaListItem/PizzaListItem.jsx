import '../PizzaListItem/PizzaListItem.css';

import { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, TextField } from '@mui/material/';

export default function PizzaListItem({ pizza, newOrder, setOrder }) {

    // newOrder: [{id: 1, quantity: 3}, {...}, etc.]


    const addPizza = () => {
        setOrder([...newOrder, pizzas])
    }

    const removePizza = () => {
        // find the element of newOrder with id equal to this id
        for (let item of newOrder) {
            if (item.id === pizza.id) item.quantity = 0
        }
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

        <Card sx={{ maxWidth: 345, m: 2 }}>
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
                <TextField
                    id="number-input"
                    type='number'
                    label="#"
                    variant="standard"
                    value={pizzas.quantity}
                    onChange={handleChange}
                />
                <Button size="small" onclick={addPizza}>Add</Button>
                <Button size="small" onClick={removePizza}>Remove All</Button>
            </CardActions>
        </Card>
 
    )
}