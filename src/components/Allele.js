import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ColorSquare from "./ColorSquare";
import FlowerShapeIcon from "./FlowerShapeIcon";
import { capitalizeFirstLetter } from "../utils/visualFormatting";

const Allele = props => {
	const { alleleName, alleleType } = props;
	return (
		<span>
			{capitalizeFirstLetter(alleleName)}
			{(() => {
				switch (alleleType) {
					case "color":
						return <ColorSquare color={alleleName} />;
					case "shape":
						return <FlowerShapeIcon shape={alleleName} />;
					default:
						return null;
				}
			})()}
		</span>
	);
};

export default Allele;

Allele.propTypes = {
	alleleName: PropTypes.string,
	alleleType: PropTypes.string
};
