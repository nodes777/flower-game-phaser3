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
		const flower1 = flowers.byId.flower1;
		const flower2 = flowers.byId.flower2;
		//TODO REFACTOR THIS
		if (flower2.genotype.color[0] === undefined)
			alert("table isnt complete");
		console.log(flowers);
		const info = {
			parent1: {
				genotype: {
					color: flower1.genotype.color,
					shape: ["square", "round"]
				},
				position: { x: 0, y: 0 }
			},
			parent2: {
				genotype: {
					color: flower2.genotype.color,
					shape: ["triangle", "pentagon"]
				},
				position: { x: 0, y: 0 }
			}
		};
		dispatch(addFlower(info));
	};
	render() {
		return (
			<button onClick={this.handleSubmit}>New Flower From Table</button>
		);
	}
}

export default connect(mapStateToProps)(NewFlowerButton);
