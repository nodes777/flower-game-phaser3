import React from "react";
import { connect } from "react-redux";
import Wing from "./Wing";

import "../../css/App.css";

export class TopContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topContainerMain">
				<div className="topContainerInner">
					<Wing side="left" />
					<Wing side="right" />
				</div>
			</div>
		);
	}
}

export default TopContainer;
