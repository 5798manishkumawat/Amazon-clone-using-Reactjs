import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header() {
	const [{ cart }, dispatch] = useStateValue();
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header_logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>

			<div className="header_search">
				<input className="header_searchInput" type="text" />
				<SearchIcon className="header_searchIcon" />
			</div>
			<div className="header_nav">
				<div className="header_option">
					<span className="header_optionLineOne">Hello Guest</span>
					<span className="header_optionLineTwo">Sign In</span>
				</div>
				<div className="header_option">
					<span className="header_optionLineOne">Returns</span>
					<span className="header_optionLineTwo">Orders</span>
				</div>
				<div className="header_option">
					<span className="header_optionLineOne">Your</span>
					<span className="header_optionLineTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header_optionBasket">
						<ShoppingCartIcon className="" />
						<span className="header_optionLineTwo header_basketCount">
							{cart.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
