import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ColorSquare from "./ColorSquare";

const Allele = props => {
	const { alleleName, alleleType } = props;
	return (
		<span>
			{alleleName}
			{alleleType === "color" ? <ColorSquare color={alleleName} /> : null}
		</span>
	);
};

export default Allele;

Allele.propTypes = {
	alleleName: PropTypes.string,
	alleleType: PropTypes.string
};
