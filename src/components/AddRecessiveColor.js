import React from "react";
import { connect } from "react-redux";
import { addRecessiveColor } from "../actions/indexActions";
import { colors } from "../types/colors";
import "../css/btn.css";

function mapStateToProps({ config }) {
	return {
		config
	};
}

class AddRecessiveColor extends React.Component {
	state = { value: "" };

	handleSubmit = e => {
		e.preventDefault();
		const { dispatch } = this.props;
		this.setState({ value: "" });
		dispatch(addRecessiveColor(this.state.value));
	};

	handleChange = e => {
		this.setState({ value: e.target.value });
	};

	render() {
		const { config } = this.props;
		const recessiveColors = config.recessive.colors;
		const availableColors = Object.keys(colors).filter(
			value => !recessiveColors.includes(value)
		);
		console.log(availableColors);
		return (
			<form onSubmit={this.handleSubmit}>
				<select
					aria-label="Color to make recessive"
					value={this.state.value}
					onChange={this.handleChange}
				>
					<option>Select a Color</option>
					{availableColors.map(color => {
						return <option>{color}</option>;
					})}
				</select>

				<input
					type="submit"
					className="btn btn-primary"
					value="Add to recessive colors"
				/>
			</form>
		);
	}
}

export default connect(mapStateToProps)(AddRecessiveColor);
