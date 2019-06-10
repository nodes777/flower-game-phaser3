import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ColorSquare from "./ColorSquare";
import FlowerShapeIcon from "./FlowerShapeIcon";
import { capitalizeFirstLetter } from "../utils/visualFormatting";
import { allTypes } from "../types/allTypes";

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
	alleleName: PropTypes.oneOf([
		...Object.keys(allTypes.shapes).map(shape => shape.toLowerCase()),
		...Object.keys(allTypes.colors)
	]),
	alleleType: PropTypes.oneOf([
		...Object.keys(allTypes).map(word => word.substring(0, word.length - 1))
	])
};
