import React from "react";
import { connect } from "react-redux";
import { addRecessiveAllele } from "../../actions/indexActions";
import PropTypes from "prop-types";

function mapStateToProps({ config, punnett }) {
	return {
		config,
		punnett
	};
}

class AddRecessiveAllele extends React.Component {
	static propTypes = {
		alleleType: PropTypes.string
	};
	state = { value: "" };

	handleSubmit = e => {
		e.preventDefault();
		const { dispatch } = this.props;
		this.setState({ value: "" });
		dispatch(
			addRecessiveAllele({
				alleleType: this.props.alleleType + "s",
				allele: this.state.value
			})
		);
	};

	handleChange = e => {
		this.setState({ value: e.target.value });
	};

	render() {
		const { config, punnett, alleleType } = this.props;
		const recessiveAlleles = config.recessive[alleleType + "s"];
		const bothParentsAlleles = punnett.parent1.genotype[alleleType].concat(
			punnett.parent2.genotype[alleleType]
		);
		const availableAlleles = bothParentsAlleles.filter(
			value => !recessiveAlleles.includes(value)
		);
		const firstOption = `Select a ${alleleType}`;
		return (
			<form onSubmit={this.handleSubmit}>
				<select
					aria-label={`${alleleType} to make recessive`}
					value={this.state.value}
					onChange={this.handleChange}
				>
					<option>{firstOption}</option>
					{availableAlleles.map((allele, i) => {
						return <option key={allele + i}>{allele}</option>;
					})}
				</select>

				<input
					type="submit"
					disabled={
						this.state.value === "" ||
						this.state.value === firstOption
					}
					value={`Add to recessive ${alleleType}s`}
				/>
			</form>
		);
	}
}

export default connect(mapStateToProps)(AddRecessiveAllele);
