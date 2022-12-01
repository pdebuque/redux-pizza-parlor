import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import "../Admin/Admin.css";
function Admin() {
	const [PizzaOrder, setPizzaOrder] = useState([]);

	useEffect(() => {
		getOrder();
	}, []);

	const getOrder = () => {
		axios
			.get("/api/order")
			.then((response) => {
				console.log(response.data);
				setPizzaOrder(response.data);
				// console.log("Current Array of Pizza Order: ", PizzaOrder);
			})
			.catch((error) => {
				console.log("Error: ", error);
			});
	};

	return (
		<div className='content'>
			{/* {JSON.stringify(PizzaOrder)} */}
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Time Order Placed</th>
						<th>Type</th>
						<th>Cost</th>
					</tr>
				</thead>
				<tbody>
					{PizzaOrder.map((order) => {
						return (
							<tr key={order.id}>
								<td>{order.customer_name}</td>
								<td>{order.time}</td>
								<td>{order.type}</td>
								<td>{order.total}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Admin;
