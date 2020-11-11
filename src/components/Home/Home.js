import React from "react";
import Product from "../Product/Product";
import "./Home.css";
function Home() {
	return (
		<div className="home">
			<div className="home_container">
				<img
					className="home_image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase4/3day/Phase4_Unrec_PC_Hero_1x._CB416859894_.jpg"
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
						id="21111333"
						title="The Hard Thing about Hard Thing"
						price={299}
						image="https://images-na.ssl-images-amazon.com/images/I/51slqM2g3jL._SX329_BO1,204,203,200_.jpg"
						rating={5}
					/>
					<Product
						id="21222333"
						title="Think and Grow Rich Paperback – 1 January 2014"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/41+eK8zBwQL._SY344_BO1,204,203,200_.jpg"
						rating={5}
					/>
				</div>
				<div className="home_row">
					<Product
						id="21366633"
						title="OnePlus 8 Pro (Onyx Black 12GB RAM+256GB Storage)"
						// eslint-disable-next-line no-sequences
						price={59999}
						image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"
						rating={4}
					/>
					<Product
						id="21378433"
						title="Redmi Note 9 | 48MP Quad Camera|6.53 Full HD+ Display"
						// eslint-disable-next-line no-sequences
						price={10999}
						image="https://images-na.ssl-images-amazon.com/images/I/81mtDLql%2BXL._SL1500_.jpg"
						rating={4}
					/>
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
						title="HP All-in-One 24-df0215in 23.8-Inch FHD with Alexa Built-in (AMD Ryzen 3-3250U/8GB/256GB SSD + 1TB HDD/Win 10/MS Office 2019/Jet Black)"
						price={42990}
						image="https://images-na.ssl-images-amazon.com/images/I/71MW1E0je-L._SL1200_.jpg"
						rating={5}
					/>
					<Product
						id="21444733"
						title="Lenovo IdeaCentre AIO 330 19.5-inch All-in-One Desktop (Intel Celeron J4025/4GB/1TB HDD/DOS/Integrated Intel UHD Graphics), Black (F0D7008DIN)"
						price={42990}
						image="https://images-na.ssl-images-amazon.com/images/I/712NGnu3beL._SL1500_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
