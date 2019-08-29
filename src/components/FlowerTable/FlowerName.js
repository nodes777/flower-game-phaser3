import React from "react";
import { connect } from "react-redux";
import { changeFlowerName } from "../../actions/flowerActions";
import PropTypes from "prop-types";

class FlowerName extends React.Component {
	static propTypes = {
		flowerName: PropTypes.string
	};
	state = { value: "", changingName: false };

	handleSubmit = e => {
		e.preventDefault();
		const { dispatch } = this.props;
		if (this.state.value) {
			this.setState({ changingName: false });
			dispatch(
				changeFlowerName({
					flowerId: this.props.flowerId,
					newName: this.state.value
				})
			);
		}
	};

	handleChange = e => {
		this.setState({ value: e.target.value });
	};
	handleClickName = e => {
		this.setState({ value: this.props.flowerName });
		this.setState({ changingName: !this.state.changingName });
	};
	handleCancelChange = () => {
		this.setState({ changingName: !this.state.changingName });
	};

	render() {
		const { flowerName } = this.props;
		const { changingName } = this.state;
		return (
			<span>
				{changingName ? (
					<form onSubmit={this.handleSubmit}>
						<input
							autoFocus
							type="text"
							value={this.state.value}
							onChange={this.handleChange}
							onBlur={this.handleCancelChange}
							aria-label="Enter New Flower Name"
						/>
					</form>
				) : (
					<span
						tabIndex="0"
						role="button"
						onClick={this.handleClickName}
						onKeyPress={this.handleClickName}
						aria-label="Change Flower Name"
					>
						{flowerName}
					</span>
				)}
			</span>
		);
	}
}

export default connect()(FlowerName);
