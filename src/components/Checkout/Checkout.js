import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

function Checkout() {
	// eslint-disable-next-line no-unused-vars
	const [{ cart, user }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout_left">
				<img
					className="checkout_ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase4/CatPage/1500x300_desk_store_header.jpg"
					alt=""
				/>
				<div>
					<h3>Hello, {user?.email}</h3>
					<h2 className="checkout_title">Your Shopping Basket</h2>
					{cart?.map((item) => {
						return (
							<CheckoutProduct
								key={item.id}
								id={item.id}
								image={item.image}
								price={item.price}
								title={item.title}
								rating={item.rating}
							/>
						);
					})}
				</div>
			</div>
			<div className="checkout_right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
