import React, { Component } from "react";
import "./App.sass";
import routes from "./routes";
import Nav from "./components/Nav/Nav";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				{routes}
			</div>
		);
	}
}

export default App;
