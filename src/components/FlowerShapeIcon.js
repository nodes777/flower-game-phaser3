import React, { Fragment } from "react";
import PropTypes from "prop-types";
import defaultShape from "../assets/defaultFlowerIcon.png";
import triangleShape from "../assets/triangleFlowerIcon.png";
import roundShape from "../assets/roundFlowerIcon.png";
import squareShape from "../assets/squareFlowerIcon.png";
const FlowerShapeIcon = props => {
	const { shape } = props;
	const iconStyle = { verticalAlign: "bottom" };

	return (
		<Fragment>
			{(() => {
				switch (shape) {
					case "default":
						return (
							<img alt="" style={iconStyle} src={defaultShape} />
						);
					case "triangle":
						return (
							<img alt="" style={iconStyle} src={triangleShape} />
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
