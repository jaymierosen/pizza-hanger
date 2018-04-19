import React from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// *** CONSTRUCTOR METHOD START ***
		// constructor() {
		// 	// running the component
		// 	super();
		// 	// binding 'this' to the component
		// 	this.goToStore = this.goToStore.bind(this);
		// }
	// *** CONSTRUCTOR METHOD END ***
	myInput = React.createRef();
	// functions go before the render method
	// property goToStore
	// set an arrow function
	// allows 'this' to be bound to component
	// *** another way to write it is *** :
		// goToStore(e) {
		// 	e.preventDefault();
		// 	console.log(this.myInput.current.value);
		// }
	// *** another way to write it is *** :
	// with this way of writing our function below
	// you don't need the constructor method
	// using the arrow function binds 'this' to the component
	goToStore = e => {
		// prevent page from refreshing
		e.preventDefault();
		// get the text [value] from the input
		const storeName = this.myInput.current.value;
		// change the page to the store name
		this.props.history.push(`/store/${storeName}`);
	};
	// state => an object
		// lives in an component
		// state holds data for its own component and its children
	render() {
		return (
			// 'this' refers to the component
			<form onSubmit={this.goToStore} className="store-selector">
				<h2>Please Enter A Store</h2>
				<input
					type="text"
					ref={this.myInput}
					placeholder="Store Name"
					defaultValue={getFunName()}
					required
				/>
				<button type="submit">Visit Store→</button>
			</form>
		)
	};
};

export default StorePicker;