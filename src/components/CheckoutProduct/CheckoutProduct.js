import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
	const [{ cart }, dispatch] = useStateValue();

	const removeFromCart = () => {
		dispatch({
			type: "REMOVE_FROM_CART",
			id: id,
		});
	};
	return (
		<div className="checkoutProduct">
			<img src={image} alt="" />
			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{title}</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{Array(rating)
						.fill()
						.map((_, i) => {
							return (
								<p>
									<StarIcon key="" style={{ fill: "#FCEC66" }} />
								</p>
							);
						})}
				</div>
				{!hideButton && (
					<button onClick={() => removeFromCart()}>Remove from Cart</button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
