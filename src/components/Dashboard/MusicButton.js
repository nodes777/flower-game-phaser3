import React from "react";
import { connect } from "react-redux";
import { playMusic, pauseMusic } from "../../actions/configActions";

import "../../css/btn.css";

function mapStateToProps({ config }) {
	return {
		config,
	};
}

class MusicButton extends React.Component {
	handleSubmit = () => {
		const { dispatch } = this.props;
		// TODO: this is blockheaded
		(() => {
			if (this.state.checked) {
				dispatch(pauseMusic());
			} else {
				dispatch(playMusic());
			}
		})();

		this.setState(() => ({
			checked: !this.state.checked,
		}));
	};
	state = {
		checked: this.props.config.musicShouldPlay,
	};

	render() {
		return (
			<button
				className="btn bee-btn"
				onClick={this.handleSubmit}
				aria-label={this.state.checked ? "Play Music" : "Pause Music"}
			>
				{this.state.checked ? (
					<span aria-hidden={true}>&#10074;&#10074; Music</span>
				) : (
					<span aria-hidden={true}>&#9654; Music</span>
				)}
			</button>
		);
	}
}

export default connect(mapStateToProps)(MusicButton);
