import React from "react";
import { connect } from "react-redux";
import { addFlower } from "../actions/indexActions";
import { getRandomColor } from "../utils/determineColor";
import PropTypes from "prop-types";

function mapStateToProps({ punnett }) {
	return {
		punnett
	};
}

class NewFlowerFromPunnettButton extends React.Component {
	static propTypes = {
		punnett: PropTypes.object
	};
	handleSubmit = () => {
		const { dispatch, punnett } = this.props;
		const parent1 = punnett.parent1;
		const parent2 = punnett.parent2;

		console.log(punnett);
		const info = {
			parent1: {
				genotype: {
					color: parent1.genotype.color,
					shape: ["square", "round"]
				},
				position: { x: 0, y: 0 }
			},
			parent2: {
				genotype: {
					color: parent2.genotype.color,
					shape: ["square", "diamond"]
				},
				position: { x: 0, y: 0 }
			}
		};
		dispatch(addFlower(info));
	};
	render() {
		const { punnett } = this.props;
		const parent1 = punnett.parent1;
		const parent2 = punnett.parent2;
		return (
			<button
				onClick={this.handleSubmit}
				disabled={
					parent1.genotype.color[0] === undefined ||
					parent1.genotype.color[1] === undefined ||
					parent2.genotype.color[0] === undefined ||
					parent2.genotype.color[1] === undefined
				}
			>
				New Flower From Punnett
			</button>
		);
	}
}

export default connect(mapStateToProps)(NewFlowerFromPunnettButton);
