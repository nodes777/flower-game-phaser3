import React, { Component, Fragment } from "react";

import "./css/App.css";
import Punnett from "./components/Punnett";
import FlowerTable from "./components/FlowerTable/FlowerTable";
import Dashboard from "./components/Dashboard";

class App extends Component {
	render() {
		return (
			<Fragment>
				<div className="App">
					<Punnett />
					<Dashboard />
				</div>
				<div className="App">
					<FlowerTable display={true} />
				</div>
			</Fragment>
		);
	}
}

export default App;
