import React from "react";
import { colors } from "../utils/colors";

const ColorListboxOptions = props => {
	const { handleOptionsEvents, setOptionRef, focusedOption } = props;
	const setsize = Object.keys(colors).length;
	return (
		<div className="options-alleles">
			{Object.keys(colors).map((color, index) => {
				const boxStyle = {
					fontSize: "20px",
					color: color
				};
				return (
					<div
						tabIndex="0"
						role="option"
						id={color}
						aria-selected={focusedOption === color}
						key={color}
						onClick={e => handleOptionsEvents(color, index, e)}
						onKeyDown={e => handleOptionsEvents(color, index, e)}
						ref={setOptionRef}
						aria-posinset={index}
						aria-setsize={setsize}
					>
						<span>
							<span className="option-allele">{color}</span>
							<span aria-hidden="true" style={boxStyle}>
								&#9632;
							</span>
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default ColorListboxOptions;
