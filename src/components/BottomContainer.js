import React, { Component, Fragment } from "react";

import Punnett from "./Punnett";
import FlowerTable from "./FlowerTable/FlowerTable";
import Dashboard from "./Dashboard/Dashboard";

class BottomContainer extends Component {
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
export default BottomContainer;
