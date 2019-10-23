import React, { Component, Fragment } from "react";

import Punnett from "./Punnett";
import FlowerTable from "./FlowerTable/FlowerTable";
import Dashboard from "./Dashboard/Dashboard";

import "../css/App.css";

class BottomContainer extends Component {
	render() {
		return (
			<Fragment>
				<div className="App bottomContainer">
					<Punnett />
					{/*<Dashboard />*/}
				</div>
				<div className="App">
					<FlowerTable display={true} />
				</div>
			</Fragment>
		);
	}
}
export default BottomContainer;
