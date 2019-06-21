import React from "react";
import { connect } from "react-redux";
import { addRecessiveTrait } from "../actions/indexActions";
import PropTypes from "prop-types";

function mapStateToProps({ config, punnett }) {
	return {
		config,
		punnett
	};
}

class AddRecessiveTrait extends React.Component {
	static propTypes = {
		traitType: PropTypes.string
	};
	state = { value: "" };

	handleSubmit = e => {
		e.preventDefault();
		const { dispatch } = this.props;
		this.setState({ value: "" });
		dispatch(
			addRecessiveTrait({
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
		const bothParentsTraits = punnett.parent1.genotype[traitType].concat(
			punnett.parent2.genotype[traitType]
		);
		const availableTraits = bothParentsTraits.filter(
			value => !recessiveTraits.includes(value)
		);
		const firstOption = `Select a ${traitType}`;

		return (
			<form onSubmit={this.handleSubmit}>
				<select
					aria-label={`${traitType} to make recessive`}
					value={this.state.value}
					onChange={this.handleChange}
				>
					<option>{firstOption}</option>
					{availableTraits.map(trait => {
						return <option key={trait}>{trait}</option>;
					})}
				</select>

				<input
					type="submit"
					disabled={
						this.state.value === "" ||
						this.state.value === firstOption
					}
					value={`Add to recessive ${traitType}`}
				/>
			</form>
		);
	}
}

export default connect(mapStateToProps)(AddRecessiveTrait);
