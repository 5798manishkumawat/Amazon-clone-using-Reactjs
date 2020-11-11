import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";
function Product({ id, title, image, price, rating }) {
	const [{ cart }, dispatch] = useStateValue();
	const addToCart = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{Array(rating)
						.fill()
						.map((_, i) => {
							return (
								<p>
									<StarIcon style={{ fill: "#FCEC66" }} />
								</p>
							);
						})}
				</div>
			</div>
			<img src={image} alt="" />
			<button onClick={() => addToCart()}>Add to Cart</button>
		</div>
	);
}
export default Product;
