import React from "react";
import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "../../utils/visualFormatting";

import Allele from "../Allele";
import FlowerName from "./FlowerName";

export default class FlowerTableRows extends React.Component {
	static propTypes = {
		genes: PropTypes.array,
		id: PropTypes.string,
		flowers: PropTypes.object,
		recessive: PropTypes.object
	};

	render() {
		const { genes, id, flowers, recessive } = this.props;
		return (
			<tr>
				<td>
					<FlowerName
						flowerName={capitalizeFirstLetter(
							flowers.byId[id].name
						)}
						flowerId={id}
					/>
				</td>
				{genes.map(gene => {
					const gene1Name = flowers.byId[id].genotype[gene][0];
					const gene2Name = flowers.byId[id].genotype[gene][1];
					const is1Recessive = recessive[gene + "s"].includes(
						gene1Name
					);
					const is2Recessive = recessive[gene + "s"].includes(
						gene2Name
					);
					return (
						<td key={gene}>
							<Allele
								alleleName={gene1Name}
								alleleType={gene}
								isRecessive={is1Recessive}
							/>
							<span> </span>
							<Allele
								alleleName={gene2Name}
								alleleType={gene}
								isRecessive={is2Recessive}
							/>
						</td>
					);
				})}
			</tr>
		);
	}
}
