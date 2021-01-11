import React from "react";
import { connect } from "react-redux";
import { clearState } from "../../utils/localStorage";

import "../../css/dashboard.css";

function mapStateToProps(fullState) {
	return { fullState };
}

class ClearLocalStorageButton extends React.Component {
	handleSubmit = () => {
		clearState(this.props.fullState);
		alert(
			"Your garden has been cleared from local storage and will not appear upon reloading of the page"
		);
	};
	render() {
		return (
			<button
				className="btn btn-primary"
				onClick={this.handleSubmit}
				className="dash-btn"
				title="Remove the saved state from local storage"
			>
				Clear Local Storage
			</button>
		);
	}
}

export default connect(mapStateToProps)(ClearLocalStorageButton);
