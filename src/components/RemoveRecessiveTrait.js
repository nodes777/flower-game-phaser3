import React from "react";
import { connect } from "react-redux";
import { removeRecessiveTrait } from "../actions/indexActions";
import PropTypes from "prop-types";

function mapStateToProps({ config, punnett }) {
	return {
		config,
		punnett
	};
}

class RemoveRecessiveTrait extends React.Component {
	static propTypes = {
		traitType: PropTypes.string
	};
	state = { value: "" };

	handleSubmit = e => {
		e.preventDefault();
		const { dispatch } = this.props;
		this.setState({ value: "" });
		dispatch(
			removeRecessiveTrait({
				traitType: this.props.traitType + "s",
				trait: this.state.value
			})
		);
	};

	handleChange = e => {
		this.setState({ value: e.target.value });
	};

	render() {
		const { config, punnett, traitType } = this.props;
		const recessiveTraits = config.recessive[traitType + "s"];

		const firstOption = `Select a ${traitType}`;

		return (
			<form onSubmit={this.handleSubmit}>
				<select
					aria-label={`${traitType} to make recessive`}
					value={this.state.value}
					onChange={this.handleChange}
				>
					<option>{firstOption}</option>
					{recessiveTraits.map(trait => {
						return <option key={trait}>{trait}</option>;
					})}
				</select>

				<input
					type="submit"
					disabled={
						this.state.value === "" ||
						this.state.value === firstOption
					}
					value={`Remove recessive ${traitType}`}
				/>
			</form>
		);
	}
}

export default connect(mapStateToProps)(RemoveRecessiveTrait);
