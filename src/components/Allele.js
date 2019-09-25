import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ColorSquare from "./ColorSquare";
import FlowerShapeIcon from "./FlowerShapeIcon";
import { capitalizeFirstLetter } from "../utils/visualFormatting";
import { allTypes } from "../types/allTypes";

const Allele = props => {
	const { alleleName, alleleType, isRecessive } = props;
	const fontStyle = {
		fontStyle: isRecessive ? "italic" : null
	};

	return (
		<span>
			<span style={fontStyle}>{capitalizeFirstLetter(alleleName)}</span>
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
		...Object.keys(allTypes.shapes).map(shape =>
			capitalizeFirstLetter(shape)
		),
		...Object.keys(allTypes.colors),
		...Object.keys(allTypes.stems)
	]),
	alleleType: PropTypes.oneOf([
		...Object.keys(allTypes).map(word => word.substring(0, word.length - 1))
	]),
	isRecessive: PropTypes.bool
};
