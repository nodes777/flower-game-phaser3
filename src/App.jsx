import React, { Component } from "react";

import "./css/App.css";
import PunnettTableGene from "./components/PunnettTableGene";

import NewFlowerFromPunnettButton from "./components/NewFlowerFromPunnettButton";
import NewRandomFlowerButton from "./components/NewRandomFlowerButton";

import FlowerTable from "./components/FlowerTable/FlowerTable";
import BeeCanFlyButton from "./components/BeeCanFlyButton";

class App extends Component {
	render() {
		return (
			<div className="App">
				<BeeCanFlyButton />
				<PunnettTableGene gene={"color"} />
				<PunnettTableGene gene={"shape"} />
				<NewFlowerFromPunnettButton />
				<NewRandomFlowerButton />
				<FlowerTable display={true} />
			</div>
		);
	}
}

export default App;
