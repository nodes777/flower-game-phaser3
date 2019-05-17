import React from "react";
import PropTypes from "prop-types";

import ColorSquare from "../ColorSquare";

export default class FlowerTableRows extends React.PureComponent {
	static propTypes = {
		genes: PropTypes.array,
		id: PropTypes.string,
		flowers: PropTypes.object
	};

	render() {
		const { genes, id, flowers } = this.props;
		return (
			<tr>
				<td>{id}</td>
				{genes.map(gene => {
					const gene1Name = flowers.byId[id].genotype[gene][0];
					const gene2Name = flowers.byId[id].genotype[gene][1];
					return (
						<td key={gene}>
							{gene1Name.replace(
								gene1Name[0],
								gene1Name[0].toUpperCase()
							)}
							{gene === "color" ? (
								<ColorSquare color={gene1Name} />
							) : null}
							{gene2Name.replace(
								gene2Name[0],
								gene2Name[0].toUpperCase()
							)}
							{gene === "color" ? (
								<ColorSquare color={gene2Name} />
							) : null}
						</td>
					);
				})}
			</tr>
		);
	}
}
