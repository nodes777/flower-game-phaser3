import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ColorSquare from "./ColorSquare";

export class Allele extends React.Component {
	static propTypes = {
		parentId: PropTypes.string,
		allelePosition: PropTypes.number,
		alleleType: PropTypes.string
	};

	render() {
		const { punnett, parentId, allelePosition, alleleType } = this.props;
		const alleleName =
			punnett[parentId].genotype[alleleType][allelePosition];
		return (
			<Fragment>
				<span>{alleleName} </span>
				{alleleType === "color" ? (
					<ColorSquare color={alleleName} />
				) : null}
			</Fragment>
		);
	}
}

function mapStateToProps({ punnett }) {
	return {
		punnett
	};
}

export default connect(mapStateToProps)(Allele);
