import React from "react";
import { connect } from "react-redux";
import { addRecessiveAllele } from "../../actions/configActions";
import PropTypes from "prop-types";

import "../../css/dashboard.css";

function mapStateToProps({ config, flowers }) {
	return {
		config,
		flowers,
	};
}

class AddRecessiveAllele extends React.Component {
	static propTypes = {
		alleleType: PropTypes.string,
	};
	state = { value: "" };

	handleSubmit = (e) => {
		e.preventDefault();
		const { dispatch } = this.props;
		this.setState({ value: "" });
		dispatch(
			addRecessiveAllele({
				alleleType: this.props.alleleType + "s",
				allele: this.state.value,
			})
		);
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	render() {
		const { config, flowers, alleleType } = this.props;
		const recessiveAlleles = config.recessive[alleleType + "s"];
		const bothParentsAlleles = flowers.byId.flower1.genotype[alleleType].concat(
			flowers.byId.flower2.genotype[alleleType]
		);
		const availableAlleles = bothParentsAlleles.filter(
			(value) => !recessiveAlleles.includes(value)
		);
		const firstOption = `Select a ${alleleType}`;
		return (
			<form onSubmit={this.handleSubmit} className="recessive-select-form">
				<select
					aria-label={`${alleleType} to make recessive`}
					value={this.state.value}
					onChange={this.handleChange}
					className="select-allele"
				>
					<option>{firstOption}</option>
					{availableAlleles.map((allele, i) => {
						return <option key={allele + i}>{allele}</option>;
					})}
				</select>

				<input
					type="submit"
					disabled={this.state.value === "" || this.state.value === firstOption}
					value={`Add to recessive ${alleleType}s`}
					className="dash-btn"
				/>
			</form>
		);
	}
}

export default connect(mapStateToProps)(AddRecessiveAllele);
