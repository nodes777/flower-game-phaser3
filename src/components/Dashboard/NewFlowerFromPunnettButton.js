import React from "react";
import { connect } from "react-redux";
import { addFlowerToStore } from "../../actions/flowerActions";
import { determineRandomPos } from "../../determinants/determinePosition";

import { screenSize } from "../../utils/screenSize";

import PropTypes from "prop-types";

function mapStateToProps({ flowers, tiles }) {
	return {
		flowers,
		tiles,
	};
}

class NewFlowerFromPunnettButton extends React.Component {
	static propTypes = {
		flowers: PropTypes.object,
	};
	handleSubmit = () => {
		const { dispatch, flowers, tiles } = this.props;
		const parent1 = flowers.byId.flower1;
		const parent2 = flowers.byId.flower2;
		const tileInfo = determineRandomPos(tiles.availableTiles);
		const posX = tileInfo.x;
		const posY = tileInfo.y;

		const info = {
			parent1: {
				genotype: {
					color: parent1.genotype.color,
					shape: parent1.genotype.shape,
					stem: parent1.genotype.stem,
				},
				position: { x: 0, y: 0 },
			},
			parent2: {
				genotype: {
					color: parent2.genotype.color,
					shape: parent2.genotype.shape,
					stem: parent2.genotype.stem,
				},
				position: { x: 0, y: 0 },
			},
			posInfo: {
				newPos: { x: posX, y: posY },
				tileIndex: tileInfo.tileIndex,
			},
		};
		dispatch(addFlowerToStore(info));
	};
	render() {
		const { flowers } = this.props;
		const parent1 = flowers.byId.flower1;
		const parent2 = flowers.byId.flower2;
		return (
			<button
				className="btn btn-primary"
				onClick={this.handleSubmit}
				title={"Generate a new flower from the currrent Punnett Square config"}
				className="dash-btn"
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
