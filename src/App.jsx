import React, { Component } from "react";

import "./css/App.css";
import PunnettTable from "./components/PunnettTable";
import NewFlowerFromTableButton from "./components/NewFlowerFromTableButton";
import NewRandomFlowerButton from "./components/NewRandomFlowerButton";

import ColorListboxContainer from "./components/ColorListboxContainer";
class App extends Component {
	render() {
		return (
			<div className="App">
				<PunnettTable />
				<NewFlowerFromTableButton />
				<NewRandomFlowerButton />
			</div>
		);
	}
}

export default App;
