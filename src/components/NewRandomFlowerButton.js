import React from "react";
import { connect } from "react-redux";
import { addFlower } from "../actions/indexActions";
import { getRandomColor } from "../determinants/determineColor";
import { getRandomShape } from "../determinants/determineFlowerShape";
import {
	determineRandomXPos,
	determineRandomYPos
} from "../determinants/determinePosition";

import { screenSize } from "../utils/screenSize";

import "../css/btn.css";

function mapStateToProps({ flowers }) {
	return {
		flowers
	};
}

class NewRandomFlowerButton extends React.Component {
	handleSubmit = () => {
		const { dispatch } = this.props;

		const info = {
			parent1: {
				genotype: {
					color: [getRandomColor(), getRandomColor()],
					shape: [getRandomShape(), getRandomShape()]
				}
			},
			parent2: {
				genotype: {
					color: [getRandomColor(), getRandomColor()],
					shape: [getRandomShape(), getRandomShape()]
				}
			},
			posInfo: {
				newPos: {
					x: determineRandomXPos(screenSize),
					y: determineRandomYPos(screenSize)
				}
			}
		};
		dispatch(addFlower(info));
	};
	render() {
		return (
			<button className="btn btn-primary" onClick={this.handleSubmit}>
				New Random Flower
			</button>
		);
	}
}

export default connect(mapStateToProps)(NewRandomFlowerButton);
