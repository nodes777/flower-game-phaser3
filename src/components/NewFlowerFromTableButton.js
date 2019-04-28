import React from "react";
import { connect } from "react-redux";
import { addFlower } from "../actions/indexActions";
import { getRandomColor } from "../utils/colors";

function mapStateToProps({ flowers }) {
	return {
		flowers
	};
}

class NewFlowerButton extends React.Component {
	// include in punnett Table and disable if table isn't complete

	handleSubmit = () => {
		const { dispatch, flowers } = this.props;
		const parent1 = flowers.punnett.parent1;
		const parent2 = flowers.punnett.parent2;

		console.log(flowers);
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
					shape: ["triangle", "pentagon"]
				},
				position: { x: 0, y: 0 }
			}
		};
		dispatch(addFlower(info));
	};
	render() {
		const { flowers } = this.props;
		const parent1 = flowers.punnett.parent1;
		const parent2 = flowers.punnett.parent2;
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
				New Flower From Table
			</button>
		);
	}
}

export default connect(mapStateToProps)(NewFlowerButton);
