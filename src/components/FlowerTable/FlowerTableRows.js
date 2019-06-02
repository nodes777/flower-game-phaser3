import React from "react";
import PropTypes from "prop-types";

import Allele from "../Allele";

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
							<Allele alleleName={gene1Name} alleleType={gene} />
							<span> </span>
							<Allele alleleName={gene2Name} alleleType={gene} />
						</td>
					);
				})}
			</tr>
		);
	}
}
