import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import Order from "../Order/Order";
import "./Orders.css";

function Orders() {
	// eslint-disable-next-line no-unused-vars
	const [{ user, cart }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) => {
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				});
		} else {
			setOrders([]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="orders">
			<h1>Your Orders</h1>
			<div className="orders_order">
				{orders.map((order) => {
					return <Order order={order} />;
				})}
			</div>
		</div>
	);
}

export default Orders;
