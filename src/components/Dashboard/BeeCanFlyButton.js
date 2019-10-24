import React from "react";
import { connect } from "react-redux";
import { beeCanFly } from "../../actions/configActions";

import "../../css/btn.css";

function mapStateToProps({ config }) {
	return {
		config
	};
}

class BeeCanFlyButton extends React.Component {
	handleSubmit = () => {
		const { dispatch } = this.props;

		this.setState(
			() => ({
				checked: !this.state.checked
			}),
			() => {
				dispatch(beeCanFly(this.state.checked));
			}
		);
	};
	state = {
		checked: this.props.config.beeCanFly
	};

	render() {
		return (
			<button
				className="btn bee-btn"
				onClick={this.handleSubmit}
				aria-label={
					this.state.checked
						? "Bee is flying, Pause Bee"
						: "Bee is not flying, Play Bee"
				}
			>
				{this.state.checked ? (
					<span aria-hidden={true}>&#10074;&#10074; Bee</span>
				) : (
					<span aria-hidden={true}>&#9654; Bee</span>
				)}
			</button>
		);
	}
}

export default connect(mapStateToProps)(BeeCanFlyButton);
