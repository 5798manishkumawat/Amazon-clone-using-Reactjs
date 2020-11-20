import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import "./Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from "../../axios";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase";
function Payment() {
	const history = useHistory();
	const [{ cart, user }, dispatch] = useStateValue();
	const stripe = useStripe();
	const elements = useElements();

	// eslint-disable-next-line no-unused-vars
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(null);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState(false);
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payment/create?total=${getBasketTotal(cart) * 100}`,
			});
			console.log(
				"aaaaaaaaaaaaaaaaa->>>>>>>>>>>>>>>>>>",
				response.data.clientSecret
			);
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [cart]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);

		// eslint-disable-next-line no-unused-vars
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						cart: cart,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_CART",
				});

				history.replace("/orders");
			});
	};
	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};
	return (
		<div className="payment">
			<div className="payment_container">
				<h1>
					Checkout (<Link to="/checkout">{cart?.length} items</Link>)
				</h1>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment_address">
						<p>{user?.email}</p>
						<p>AS-20,Tagore Bhawan</p>
						<p>SVNIT,Surat</p>
					</div>
				</div>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment_items">
						{cart.map((item) => {
							return (
								<CheckoutProduct
									key=""
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
				<div className="payment_section">
					<div className="payment_title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment_details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment_priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getBasketTotal(cart)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
