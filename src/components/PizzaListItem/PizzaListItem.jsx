import '../PizzaListItem/PizzaListItem.css';


export default function PizzaListItem({pizza, newOrder, setOrder}) {
    
// handle click: add the pizza to the state 
const handleClick = () =>{
    setOrder([...newOrder,pizza])
}


    return (
        <div key={pizza.id} className='menu-item'>
            <img src={pizza.image_path} alt={`${pizza.name} picture`} />
            {pizza.name}. {pizza.description} {pizza.price}
            <button onClick = {handleClick}>add pizza</button>
        </div>
    )
}