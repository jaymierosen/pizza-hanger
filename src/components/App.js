import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
	state = {
		pizzas: {},
		order: {}
	};
	addPizza = pizza => {
		// 1. take a copy of existing state
		// ... object spread
		const pizzas = {...this.state.pizzas};
		// 2. add new pizza to pizza var
		pizzas[`pizza${Date.now()}`] = pizza;
		// 3. set new pizza object
		this.setState({
			// updating the pizzas object with pizza item added
			pizzas: pizza
		})
	};
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
				{/* to pass in a number you have to pass { } */}
					<Header tagline="When you're hangry for pizza" />
				</div>
				<Order />
				{/* passing a state to a component */}
				<Inventory addPizza={this.addPizza} />
			</div>
		);
	};
};

export default App;
