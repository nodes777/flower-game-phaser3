import React, { Fragment } from "react";
import PropTypes from "prop-types";
import TableAllele from "./TableAllele";

export class Diploid extends React.Component {
	static propTypes = {
		p1Id: PropTypes.string,
		p2Id: PropTypes.string,
		alleleType: PropTypes.string,
		a1Pos: PropTypes.number,
		a2Pos: PropTypes.number
	};

	render() {
		const { p1Id, p2Id, alleleType, a1Pos, a2Pos } = this.props;
		return (
			<Fragment>
				<span>
					<TableAllele
						parentId={p1Id}
						alleleType={alleleType}
						allelePosition={a1Pos}
					/>
				</span>
				<span> </span>
				<span>
					<TableAllele
						parentId={p2Id}
						alleleType={alleleType}
						allelePosition={a2Pos}
					/>
				</span>
			</Fragment>
		);
	}
}

export default Diploid;
