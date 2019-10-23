import React, { Component, Fragment } from "react";

import "./css/App.css";

import TopContainer from "./components/TopContainer";
import BottomContainer from "./components/BottomContainer";
class App extends Component {
	render() {
		return (
			<Fragment>
				<TopContainer />
				<BottomContainer />
			</Fragment>
		);
	}
}

export default App;
