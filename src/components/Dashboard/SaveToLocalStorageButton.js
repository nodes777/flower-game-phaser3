import React from "react";
import { connect } from "react-redux";
import { saveState } from "../../utils/localStorage";

import "../../css/btn.css";

function mapStateToProps(fullState) {
	return { fullState };
}

class SaveToLocalStorageButton extends React.Component {
	handleSubmit = () => {
		console.log(this.props);
		saveState(this.props.fullState);
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
