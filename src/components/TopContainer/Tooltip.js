import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/App.css";
import "../../css/wings.css";

import { capitalizeFirstLetter } from "../../utils/visualFormatting.js";

class Tooltip extends React.Component {
	constructor(props) {
		super(props);
	}
	// static propTypes = {
	// 	content: PropTypes.shape({
	// 		name: PropTypes.string,
	// 		genotype: PropTypes.objectOf({
	// 			shape: PropTypes.arrayOf.PropTypes.string,
	// 			color: PropTypes.arrayOf.PropTypes.string,
	// 		}),
	// 	}),
	// };

	render() {
		const props = this.props.content;
		return (
			<div>
				<p>Name: {props.name}</p>
				<p>
					Shape: {capitalizeFirstLetter(props.genotype.shape[0])},{" "}
					{capitalizeFirstLetter(props.genotype.shape[1])}
				</p>
				<p>
					Color: {capitalizeFirstLetter(props.genotype.color[0])},{" "}
					{capitalizeFirstLetter(props.genotype.color[1])}
				</p>
			</div>
		);
	}
}
function mapStateToProps({ config }) {
	return config.tooltip;
}
export default connect(mapStateToProps)(Tooltip);
