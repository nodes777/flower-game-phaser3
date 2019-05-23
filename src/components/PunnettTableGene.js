import React, { Component } from "react";
import Diploid from "./Diploid";
import PropTypes from "prop-types";

import AlleleListboxContainer from "./AlleleListbox/AlleleListboxContainer";
import "../css/table.css";

class PunnettTableGene extends Component {
	static propTypes = {
		gene: PropTypes.string
	};
	render() {
		const { gene } = this.props;
		return (
			<table>
				<tbody>
					<tr>
						<td rowSpan="2" colSpan="2" />
						<th
							colSpan="2"
							scope="colgroup"
							className="table-header"
						>
							Flower 1
						</th>
					</tr>
					<tr>
						<th scope="col">
							<AlleleListboxContainer
								parentId="parent1"
								alleleType={gene}
								allelePosition={0}
							/>
						</th>
						<th scope="col">
							<AlleleListboxContainer
								parentId="parent1"
								alleleType={gene}
								allelePosition={1}
							/>
						</th>
					</tr>
					<tr>
						<th
							rowSpan="2"
							scope="rowgroup"
							className="table-header"
						>
							Flower 2
						</th>
						<th scope="row">
							<AlleleListboxContainer
								parentId="parent2"
								alleleType={gene}
								allelePosition={0}
							/>
						</th>
						<td>
							<Diploid
								p1Id="parent1"
								p2Id="parent2"
								alleleType={gene}
								a1Pos={0}
								a2Pos={0}
							/>
						</td>
						<td>
							<Diploid
								p1Id="parent1"
								p2Id="parent2"
								alleleType={gene}
								a1Pos={1}
								a2Pos={0}
							/>
						</td>
					</tr>
					<tr>
						<th scope="row">
							<AlleleListboxContainer
								parentId="parent2"
								alleleType={gene}
								allelePosition={1}
							/>
						</th>
						<td>
							<Diploid
								p1Id="parent1"
								p2Id="parent2"
								alleleType={gene}
								a1Pos={0}
								a2Pos={1}
							/>
						</td>
						<td>
							<Diploid
								p1Id="parent1"
								p2Id="parent2"
								alleleType={gene}
								a1Pos={1}
								a2Pos={1}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}
export default PunnettTableGene;
