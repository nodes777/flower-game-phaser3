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
		const { punnett, parentId, allelePosition } = this.props;
		const colorName = punnett[parentId].genotype.color[allelePosition];
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
		punnett: flowers.punnett
	};
}

export default connect(mapStateToProps)(Allele);
