import React, { Component } from "react";
import "./Nav.sass";

class Nav extends Component {
	render() {
		return (
			<div className="Nav">
				<div className="nav-elem">
					<div>Woman</div>
					<div>Juniors</div>
					<div>Men</div>
					<div>Kids</div>
					<div>Shoes</div>
					<div>Accessories</div>
				</div>
			</div>
		);
	}
}

export default Nav;
