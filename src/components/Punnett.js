import React, { Component, Fragment } from "react";

import "../css/App.css";
import PunnettTableGene from "./PunnettTableGene";
import FlowerTable from "./FlowerTable/FlowerTable";

class App extends Component {
	render() {
		return (
			<div className="bottomInnerContainer">
				<PunnettTableGene gene={"color"} />
				<PunnettTableGene gene={"shape"} />
			</div>
		);
	}
}

export default App;
