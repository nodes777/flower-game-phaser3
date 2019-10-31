import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BeeCanFlyButton from "../Dashboard/BeeCanFlyButton";
// import SaveToLocalStorageButton from "../Dashboard/SaveToLocalStorageButton";
// import ClearLocalStorageButton from "../Dashboard/ClearLocalStorageButton";
import Tooltip from "./Tooltip";

import "../../css/wings.css";

class Wing extends Component {
	static propTypes = {
		side: PropTypes.oneOf(["left", "right"])
	};
	render() {
		const { side } = this.props;

		return (
			<Fragment>
				{side === "left" ? (
					<Fragment>
						<div className="innerSideWings leftWing">
							<div className="wingContent">
								<Tooltip />
							</div>
						</div>
					</Fragment>
				) : (
					<div className="innerSideWings rightWing">
						<div className="wingContent rightWingContent">
							<BeeCanFlyButton />
						</div>
					</div>
				)}
			</Fragment>
		);
	}
}

function mapStateToProps({ config }) {
	return config.tooltip;
}
export default connect(mapStateToProps)(Wing);
