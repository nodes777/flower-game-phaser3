import React from "react";
import { connect } from "react-redux";
import Wing from "./Wing";

import "../css/App.css";

function mapStateToProps(state) {
	return {};
}

export class TopContainer extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string
	// };

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

export default connect(mapStateToProps)(TopContainer);
