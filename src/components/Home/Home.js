import React from "react";
import Product from "../Product/Product";
import "./Home.css";
function Home() {
	return (
		<div className="home">
			<div className="home_container">
				<img
					className="home_image"
					src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg"
					alt=""
				/>
				<div className="home_row">
					<Product
						id="21212333"
						title="the lean startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
						rating={5}
					/>
					<Product
						id="21378433"
						title="Redmi Note 9 | 48MP Quad Camera|6.53 Full HD+ Display"
						// eslint-disable-next-line no-sequences
						price={10999}
						image="https://images-na.ssl-images-amazon.com/images/I/81mtDLql%2BXL._SL1500_.jpg"
						rating={4}
					/>
				</div>
				<div className="home_row">
					<Product
						id="21786733"
						title="iPhone 7|With Rs. 3000 bank offer"
						price={23999}
						image="https://images-na.ssl-images-amazon.com/images/I/41D9NDiSzjL._SL1024_.jpg"
						rating={5}
					/>
					<Product
						id="21876633"
						title="Redmi 9 Prime | Extra upto INR 1000 Apay cashback"
						price={9999}
						image="https://images-na.ssl-images-amazon.com/images/I/710qEb8G3gL._SL1500_.jpg"
						rating={5}
					/>
					<Product
						id="21098733"
						title="Redmi 9 | 4GB RAM Multi-task King | Starting INR 8,999"
						price={8999}
						image="https://images-na.ssl-images-amazon.com/images/I/81aWatlQCvL._SL1500_.jpg"
						rating={5}
					/>
				</div>
				<div className="home_row">
					<Product
						id="21456733"
						title="LG 139 cm (55 inches) 4K UHD Smart LED TV 55UM7290PTD "
						price={49990}
						image="https://images-na.ssl-images-amazon.com/images/I/81QJ2tzfzmL._SL1500_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
