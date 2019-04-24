import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Allele from "./Allele";

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
			<span>
				<Allele
					parentId={p1Id}
					alleleType={alleleType}
					allelePosition={a1Pos}
				/>
				<Allele
					parentId={p2Id}
					alleleType={alleleType}
					allelePosition={a2Pos}
				/>
			</span>
		);
	}
}

function mapStateToProps({ flowers }) {
	return {
		flowers: flowers
	};
}
export default connect(mapStateToProps)(Diploid);
