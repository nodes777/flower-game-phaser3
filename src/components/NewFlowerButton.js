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
				position: {
					x: Math.floor(Math.random() * 800 + 1),
					y: Math.floor(Math.random() * 400 + 1)
				}
			},
			parent2: {
				genotype: {
					color: ["AliceBlue", "DarkGreen"],
					shape: ["triangle", "pentagon"]
				},
				position: {
					x: Math.floor(Math.random() * 800 + 1),
					y: Math.floor(Math.random() * 400 + 1)
				}
			}
		};
		dispatch(addFlower(info));
	};
	render() {
		return <button onClick={this.handleSubmit}>New Flower</button>;
	}
}

export default connect(mapStateToProps)(NewFlowerButton);
