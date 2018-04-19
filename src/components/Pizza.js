import React from "react";
import { formatPrice } from "../helpers";

class Pizza extends React.Component {
	render() {
		// const img = this.props.details.image;
		// const name = this.props.details.name;
		const { image, name, price, desc, status } = this.props.details;
		const isAvailable = status === 'available';
		return (
			<li className="menu-pizza">
				<img src={image} alt={name} />
				<h3 className="pizza-name">{name}
					<span className="price">{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<button disabled={!isAvailable}>{isAvailable ? 'Add to Order' : 'Sold Out'}</button>
			</li>
		)
	}
}

export default Pizza;