import React from "react";

const Header = (props) => (
	// return (
		<header>
			<h1>Pizza Hanger</h1>
			{/* because the tagline prop is in the header component in app.js*/}
			<h3>{props.tagline}</h3>
		</header>
	// )
)

export default Header;
