import React from "react";
import AddPizzaForm from "./AddPizzaForm";

class Inventory extends React.Component {
	render() {
		return (
			<div className="inventory">
				<h2>Inventory</h2>
				{/* addPizza does not live in Inventory */}
				{/* it has been passed down from App.js via props */}
				<AddPizzaForm addPizza={this.props.addPizza} />
				<button onClick={this.props.loadPizza}>Load Pizzas</button>
			</div>
		)
	};
};

export default Inventory;