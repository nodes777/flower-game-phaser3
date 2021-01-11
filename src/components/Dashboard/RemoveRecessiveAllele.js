import React from "react";
import { connect } from "react-redux";
import { removeRecessiveAllele } from "../../actions/configActions";
import PropTypes from "prop-types";
import "../../css/dashboard.css";

function mapStateToProps({ config }) {
	return {
		config,
	};
}

class RemoveRecessiveAllele extends React.Component {
	static propTypes = {
		alleleType: PropTypes.string,
	};
	state = { value: "" };

	handleSubmit = (e) => {
		e.preventDefault();
		const { dispatch } = this.props;
		this.setState({ value: "" });
		dispatch(
			removeRecessiveAllele({
				alleleType: this.props.alleleType + "s",
				allele: this.state.value,
			})
		);
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	render() {
		const { config, alleleType } = this.props;
		const recessiveAlleles = config.recessive[alleleType + "s"];

		const firstOption = `Select a ${alleleType}`;
		const hasNoRecessiveAlleles = recessiveAlleles.length < 1;

		return (
			<form onSubmit={this.handleSubmit} className="recessive-select-form">
				<select
					aria-label={`${alleleType} to make recessive`}
					value={this.state.value}
					onChange={this.handleChange}
					disabled={hasNoRecessiveAlleles}
					className="select-allele"
				>
					<option>
						{hasNoRecessiveAlleles
							? `No recessive ${alleleType}s`
							: firstOption}
					</option>
					{recessiveAlleles.map((allele, i) => {
						return <option key={allele + i}>{allele}</option>;
					})}
				</select>

				<input
					type="submit"
					disabled={
						hasNoRecessiveAlleles ||
						this.state.value === "" ||
						this.state.value === `Select a ${alleleType}`
					}
					value={`Remove recessive ${alleleType}`}
					className="dash-btn"
				/>
			</form>
		);
	}
}

export default connect(mapStateToProps)(RemoveRecessiveAllele);
