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
		const {
			punnett,
			parentId,
			allelePosition,
			alleleType,
			config
		} = this.props;
		const recessiveTraits = config.recessive[alleleType + "s"];

		const alleleName =
			punnett[parentId].genotype[alleleType][allelePosition];

		const isRecessive = recessiveTraits.includes(alleleName);
		return (
			<Allele
				alleleType={alleleType}
				alleleName={alleleName}
				isRecessive={isRecessive}
			/>
		);
	}
}

function mapStateToProps({ punnett, config }) {
	return {
		punnett,
		config
	};
}

export default connect(mapStateToProps)(TableAllele);
