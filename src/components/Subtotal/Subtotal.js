import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
function Subtotal() {
	// eslint-disable-next-line no-unused-vars
	const [{ cart }, dispatch] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({cart.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal_gift">
							<input type="checkbox" /> This Order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(cart)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
