import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default class FlowerTableHeader extends React.PureComponent {
	static propTypes = {
		genes: PropTypes.array
	};

	render() {
		const { genes } = this.props;
		return (
			<Fragment>
				<th>Flower ID</th>
				{genes.map(gene => {
					return (
						<th key={gene} rowSpan="1" colSpan="1">
							{gene.replace(gene[0], gene[0].toUpperCase())}
						</th>
					);
				})}
			</Fragment>
		);
	}
}
