import React, { Component, Fragment } from "react";

import Punnett from "./Punnett";
import FlowerTable from "./FlowerTable/FlowerTable";
import Dashboard from "./Dashboard/Dashboard";

import "../css/App.css";

class BottomContainer extends Component {
	viewsArr = ["flowertable", "punnett", "dashboard"];
	state = {
		view: 1
	};

	viewGoLeft = () => {
		console.log("left");
		this.setState({ view: this.state.view - 1 });
		console.log(this.state);
		console.log(this.viewsArr[this.state.view]);
	};
	viewGoRight = () => {
		console.log("right");
		this.setState({ view: this.state.view + 1 });
		console.log(this.state);
		console.log(this.viewsArr[this.state.view]);
	};
	render() {
		console.log(this.state);
		return (
			<div className="App bottomContainer">
				<button
					disabled={!this.state.view >= 1}
					onClick={this.viewGoLeft}
				>
					Left
				</button>
				{(() => {
					switch (this.state.view) {
						case 0:
							return <FlowerTable />;
						case 1:
							return <Punnett />;
						case 2:
							return <Dashboard />;
						default:
							return null;
					}
				})()}
				<button
					disabled={this.state.view >= 2}
					onClick={this.viewGoRight}
				>
					right
				</button>
			</div>
		);
	}
}
export default BottomContainer;
