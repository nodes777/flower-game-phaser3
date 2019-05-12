import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ColorSquare = props => {
	const { color } = props;
	const boxStyle = { fontSize: "30px", color: color };
	return (
		<Fragment>
			{color === undefined ? (
				<span style={boxStyle} aria-hidden="true">
					&#9633;
				</span>
			) : (
				<span style={boxStyle} aria-hidden="true">
					&#9632;
				</span>
			)}
		</Fragment>
	);
};

export default ColorSquare;

ColorSquare.propTypes = {
	color: PropTypes.string
};
