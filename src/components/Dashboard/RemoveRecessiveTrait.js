import React from "react";
import { connect } from "react-redux";
import { removeRecessiveTrait } from "../../actions/indexActions";
import PropTypes from "prop-types";

function mapStateToProps({ config }) {
	return {
		config
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
		const { config, traitType } = this.props;
		const recessiveTraits = config.recessive[traitType + "s"];

		const firstOption = `Select a ${traitType}`;
		const hasNoRecessiveTraits = recessiveTraits.length < 1;

		return (
			<form onSubmit={this.handleSubmit}>
				<select
					aria-label={`${traitType} to make recessive`}
					value={this.state.value}
					onChange={this.handleChange}
					disabled={hasNoRecessiveTraits}
				>
					<option>
						{hasNoRecessiveTraits
							? `There are no recessive ${traitType}s`
							: firstOption}
					</option>
					{recessiveTraits.map((trait, i) => {
						return <option key={trait + i}>{trait}</option>;
					})}
				</select>

				<input
					type="submit"
					disabled={hasNoRecessiveTraits}
					value={`Remove recessive ${traitType}`}
				/>
			</form>
		);
	}
}

export default connect(mapStateToProps)(RemoveRecessiveTrait);
