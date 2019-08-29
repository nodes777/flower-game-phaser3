import React from "react";
import { connect } from "react-redux";
import { addFlowerToStore } from "../../actions/flowerActions";
import { getRandomColor } from "../../determinants/determineColor";
import { getRandomShape } from "../../determinants/determineFlowerShape";
import { getRandomStem } from "../../determinants/determineStem";
import { determineRandomPos } from "../../determinants/determinePosition";

import { screenSize } from "../../utils/screenSize";

import "../../css/btn.css";

function mapStateToProps({ flowers, tiles }) {
	return {
		flowers,
		tiles
	};
}

class NewRandomFlowerButton extends React.Component {
	handleSubmit = () => {
		const { dispatch, tiles } = this.props;
		const tileInfo = determineRandomPos(tiles.availableTiles);
		const posX = tileInfo.x;
		const posY = tileInfo.y;

		const info = {
			parent1: {
				genotype: {
					color: [getRandomColor(), getRandomColor()],
					shape: [getRandomShape(), getRandomShape()],
					stem: [getRandomStem(), getRandomStem()]
				}
			},
			parent2: {
				genotype: {
					color: [getRandomColor(), getRandomColor()],
					shape: [getRandomShape(), getRandomShape()],
					stem: [getRandomStem(), getRandomStem()]
				}
			},
			posInfo: {
				newPos: { x: posX, y: posY },
				tileIndex: tileInfo.tileIndex
			}
		};
		dispatch(addFlowerToStore(info));
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
