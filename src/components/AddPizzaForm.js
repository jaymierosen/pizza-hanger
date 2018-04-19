import React from "react";

class AddPizzaForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    toppingRef = React.createRef();
	notesRef = React.createRef();
	status = React.createRef();
    // imageRef = React.createRef();
    createPizza = e => {
        // stop form from submitting
        e.preventDefault();
        // pizza object
        const pizza = {
			nameRef: this.nameRef.current.value,
			statusRef: this.statusRef.current.value,
            // never have to deal with decimals
            priceRef: parseFloat(this.priceRef.current.value),
            toppingRef: this.toppingRef.current.value,
            notesRef: this.notesRef.current.value,
        };
        this.props.addPizza(pizza);
        // refresh the form after submitting
        // event.currentTarget.reset();
    };
	render() {
		return (
            <form className="pizza-edit" onSubmit={this.createPizza}>
				<p ref={this.statusRef}>{this.statusRef}</p>
                <input name="name" type="text" placeholder="Name" ref={this.nameRef} />
                <input name="price" type="text" placeholder="Price" ref={this.priceRef} />
                <label>Toppings</label>
                <input type="checkbox" value="red pepper" name="red pepper" ref={this.toppingRef} />
                <label htmlFor="red pepper">Red Pepper</label>
                <input type="checkbox" value="pineapple" name="pineapple" ref={this.toppingRef} />
                <label htmlFor="pineapple">Pineapple</label>
                <textarea name="notes" type="text" placeholder="Notes" ref={this.notesRef} />
                {/* <input name="image" type="text" placeholder="Image" /> */}
                <button type="submit">Add Pizza</button>
            </form>
		)
	}
}

export default AddPizzaForm;