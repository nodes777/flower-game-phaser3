import React, { Component } from "react";
import { connect } from "react-redux";

import ColorSquare from "./ColorSquare";

import "../css/table.css";

function mapStateToProps({ flowers }) {
	return {
		flowers
	};
}
class FlowerTable extends Component {
	render() {
		const { flowers } = this.props;
		const genes = Object.keys(flowers.byId.flower1.genotype);
		return (
			<table>
				<tbody>
					<tr>
						<th>Flower ID</th>
						{genes.map(gene => {
							return (
								<th rowSpan="1" colSpan="1">
									{gene}
								</th>
							);
						})}
					</tr>
					{flowers.allIds.map(id => {
						return (
							<tr>
								<td>{id}</td>
								{genes.map(gene => {
									const gene1Name =
										flowers.byId[id].genotype[gene][0];
									const gene2Name =
										flowers.byId[id].genotype[gene][1];
									return (
										<td>
											{gene1Name}{" "}
											<ColorSquare color={gene1Name} />
											{gene2Name}{" "}
											<ColorSquare color={gene2Name} />
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}
export default connect(mapStateToProps)(FlowerTable);
