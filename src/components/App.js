import React from "react";
import Header from "./Header";
import Order from "./Order";
// import Inventory from "./Inventory";
import samplePizzas from "../sample-pizzas";
import Pizza from './Pizza';

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
		});
	};
	// ********** any custom function that needs to be update needs to be in same component where state handling is **********
	loadPizza = () => {
		this.setState({
			pizzas: samplePizzas
		});
	};
	addToOrder = (key) => {
		// take a copy of state
		const order = {...this.state.order};
		// either add to order to update # in order
		order[key] = order[key] + 1 || 1;
		// call setState to update state object
		this.setState({
			order
		})
	}
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
				{/* to pass in a number you have to pass { } */}
					<Header tagline="When you're hangry for pizza" />
					<ul className="pizzas">
						{/* Object.keys = loop over every pizza */}
						{/* {Object.keys(this.state.pizzas).map(key => <p key={key}>{key}</p>)} */}
						{Object.keys(this.state.pizzas).map(key => <Pizza key={key} details={this.state.pizzas[key]} />)}
					</ul>
				</div>
				{/* passing a state to a component */}
				{/* <Inventory addPizza={this.addPizza} loadPizza={this.loadPizza} /> */}
				<Order addPizza={this.addPizza} loadPizza={this.loadPizza} />
			</div>
		);
	};
};

export default App;
