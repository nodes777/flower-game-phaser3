import React from "react";
import { connect } from "react-redux";
import { addFlowerToStore } from "../../actions/indexActions";
import {
	determineRandomXPos,
	determineRandomYPos
} from "../../determinants/determinePosition";

import { screenSize } from "../../utils/screenSize";

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

		const info = {
			parent1: {
				genotype: {
					color: parent1.genotype.color,
					shape: ["square", "round"],
					stem: parent1.genotype.stem
				},
				position: { x: 0, y: 0 }
			},
			parent2: {
				genotype: {
					color: parent2.genotype.color,
					shape: ["square", "diamond"],
					stem: parent2.genotype.stem
				},
				position: { x: 0, y: 0 }
			},
			posInfo: {
				newPos: {
					x: determineRandomXPos(screenSize),
					y: determineRandomYPos(screenSize)
				}
			}
		};
		dispatch(addFlowerToStore(info));
	};
	render() {
		const { punnett } = this.props;
		const parent1 = punnett.parent1;
		const parent2 = punnett.parent2;
		return (
			<button
				className="btn btn-primary"
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
