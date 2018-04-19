import React from "react";
import AddPizzaForm from "./AddPizzaForm";

class Order extends React.Component {
	// handleClick = () => {
	// 	this.props.addToOrder(this.props.key);
	// }
	render() {
		return (
			<div className="order">
				<h2>Order</h2>
				{/* addPizza does not live in Inventory */}
				{/* it has been passed down from App.js via props */}
				<AddPizzaForm addPizza={this.props.addPizza} />
				<div>{this.addToOrder}</div>
				<button onClick={this.props.loadPizza}>Load Pizzas</button>
			</div>
		)
	};
};

export default Order;