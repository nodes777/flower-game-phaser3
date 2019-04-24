import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ColorSquare from "./ColorSquare";

export class Allele extends React.Component {
	static propTypes = {
		parentId: PropTypes.string,
		allelePosition: PropTypes.number
	};

	render() {
		const { flowers, parentId, allelePosition } = this.props;
		const colorName = flowers.byId[parentId].genotype.color[allelePosition];
		return (
			<Fragment>
				<span>{colorName} </span>
				<ColorSquare color={colorName} />
			</Fragment>
		);
	}
}

function mapStateToProps({ flowers }) {
	return {
		flowers: flowers
	};
}

export default connect(mapStateToProps)(Allele);
