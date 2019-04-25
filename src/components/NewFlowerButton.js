import React from "react";
import { connect } from "react-redux";
import { addFlower } from "../actions/parents";
function mapStateToProps({ flowers }) {
	return {
		flowers
	};
}

class NewFlowerButton extends React.Component {
	handleSubmit = () => {
		const { dispatch } = this.props;
		const info = {
			parent1: {
				genotype: {
					color: ["Bisque", "Azure"],
					shape: ["square", "round"]
				},
				position: { x: 0, y: 0 }
			},
			parent2: {
				genotype: {
					color: ["AliceBlue", "DarkGreen"],
					shape: ["triangle", "pentagon"]
				},
				position: { x: 0, y: 0 }
			}
		};
		dispatch(addFlower(info));
	};
	render() {
		return <button onClick={this.handleSubmit}>New Flower</button>;
	}
}

export default connect(mapStateToProps)(NewFlowerButton);
