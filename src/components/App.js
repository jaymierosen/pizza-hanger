import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
				{/* to pass in a number you have to pass { } */}
					<Header tagline="tagline" />
				</div>
				<Order />
				<Inventory />
			</div>
		);
	}
}

export default App;
