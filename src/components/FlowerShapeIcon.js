import React, { Fragment } from "react";
import PropTypes from "prop-types";
import defaultShape from "../assets/default-flower.png";
import diamondShape from "../assets/diamond-flower.png";
import roundShape from "../assets/round-flower.png";
import squareShape from "../assets/square-flower.png";
const FlowerShapeIcon = props => {
	const { shape } = props;
	const iconStyle = { "vertical-align": "bottom" };

	return (
		<Fragment>
			{(() => {
				switch (shape) {
					case "default":
						return (
							<img alt="" style={iconStyle} src={defaultShape} />
						);
					case "diamond":
						return (
							<img alt="" style={iconStyle} src={diamondShape} />
						);
					case "round":
						return (
							<img alt="" style={iconStyle} src={roundShape} />
						);
					case "square":
						return (
							<img alt="" style={iconStyle} src={squareShape} />
						);
					default:
						return null;
				}
			})()}
		</Fragment>
	);
};

export default FlowerShapeIcon;

FlowerShapeIcon.propTypes = {
	shape: PropTypes.string
};
