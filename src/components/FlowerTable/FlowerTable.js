import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FlowerTableHeader from "./FlowerTableHeader";
import FlowerTableRows from "./FlowerTableRows";

import "../../css/table.css";

function mapStateToProps({ flowers, config }) {
	return {
		flowers,
		config
	};
}
class FlowerTable extends Component {
	static propTypes = {
		display: PropTypes.bool
	};

	render() {
		const { flowers, display, config } = this.props;
		const genes = Object.keys(flowers.byId.flower1.genotype);
		return (
			<div
				role="region"
				aria-label="Table of all flowers present in the game, with their genotype"
			>
				{display ? (
					<table>
						<tbody>
							<tr>
								<FlowerTableHeader genes={genes} />
							</tr>
							{flowers.allIds.map(id => {
								return (
									<FlowerTableRows
										key={id}
										id={id}
										genes={genes}
										flowers={flowers}
										recessive={config.recessive}
									/>
								);
							})}
						</tbody>
					</table>
				) : null}
			</div>
		);
	}
}
export default connect(mapStateToProps)(FlowerTable);
