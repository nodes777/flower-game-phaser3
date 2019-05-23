import React from "react";
import PropTypes from "prop-types";
import { allTypes } from "../types/allTypes";
import ColorSquare from "./ColorSquare";

const AlleleListboxOptions = props => {
	const {
		handleOptionsEvents,
		setOptionRef,
		focusedOption,
		alleleType
	} = props;
	const alleleSet = allTypes[`${alleleType}s`];
	const setsize = Object.keys(alleleSet).length;
	return (
		<div className="options-alleles">
			{Object.keys(alleleSet).map((allele, index) => {
				return (
					<div
						tabIndex="0"
						role="option"
						id={allele}
						aria-selected={focusedOption === allele}
						key={allele}
						onClick={e => handleOptionsEvents(allele, index, e)}
						onKeyDown={e => handleOptionsEvents(allele, index, e)}
						ref={setOptionRef}
						aria-posinset={index}
						aria-setsize={setsize}
					>
						<span>
							<span className="option-allele">{allele}</span>
							{alleleType === "color" ? (
								<ColorSquare color={allele} />
							) : null}
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default AlleleListboxOptions;

AlleleListboxOptions.propTypes = {
	handleOptionsEvents: PropTypes.func,
	setOptionRef: PropTypes.func,
	focusedOption: PropTypes.string
};
