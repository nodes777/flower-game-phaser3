import React, { Component } from "react";

import "./css/App.css";
import PunnettTable from "./components/PunnettTable";
import NewFlowerFromPunnettButton from "./components/NewFlowerFromPunnettButton";
import NewRandomFlowerButton from "./components/NewRandomFlowerButton";

import ColorListboxContainer from "./components/ColorListboxContainer";

import FlowerTable from "./components/FlowerTable/FlowerTable";

class App extends Component {
	render() {
		return (
			<div className="App">
				<PunnettTable />
				<NewFlowerFromPunnettButton />
				<NewRandomFlowerButton />
				<FlowerTable display={true} />
			</div>
		);
	}
}

export default App;
