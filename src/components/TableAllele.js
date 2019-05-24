import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Allele from "./Allele";

export class TableAllele extends React.Component {
	static propTypes = {
		parentId: PropTypes.string,
		allelePosition: PropTypes.number,
		alleleType: PropTypes.string
	};

	render() {
		const { punnett, parentId, allelePosition, alleleType } = this.props;
		const alleleName =
			punnett[parentId].genotype[alleleType][allelePosition];
		return <Allele alleleType={alleleType} alleleName={alleleName} />;
	}
}

function mapStateToProps({ punnett }) {
	return {
		punnett
	};
}

export default connect(mapStateToProps)(TableAllele);
