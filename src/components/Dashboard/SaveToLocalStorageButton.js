import React from "react";
import { connect } from "react-redux";
import { saveState } from "../../utils/localStorage";

import "../../css/btn.css";

function mapStateToProps(fullState) {
	return { fullState };
}

class SaveToLocalStorageButton extends React.Component {
	handleSubmit = () => {
		saveState(this.props.fullState);
		alert(
			"Your garden has been saved in its current state and will reappear when reloading the page"
		);
	};
	render() {
		return (
			<button className="btn btn-primary" onClick={this.handleSubmit}>
				Save to Local Storage
			</button>
		);
	}
}

export default connect(mapStateToProps)(SaveToLocalStorageButton);
