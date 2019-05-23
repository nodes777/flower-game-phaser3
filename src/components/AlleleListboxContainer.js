import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes from "prop-types";

import AlleleListboxSelect from "./AlleleListboxSelect";
import AlleleListboxOptions from "./AlleleListboxOptions";

import {
	_handleOptionsEvents,
	_handleSubmit,
	handleOpenOptions
} from "./handlers/colorListboxHandlers";

import "../css/listbox.css";

class AlleleListboxContainer extends Component {
	static propTypes = {
		alleleType: PropTypes.string,
		parentId: PropTypes.string,
		punnett: PropTypes.object,
		allelePosition: PropTypes.number
	};

	constructor(props) {
		super(props);
		// create a ref to store the DOM element
		this.selectRef = React.createRef();
		this.arrayOfOptionsRefs = [];
		this.handleOptionsEvents = _handleOptionsEvents.bind(this);
		this.handleSubmit = _handleSubmit.bind(this);
		this.handleOpenOptions = handleOpenOptions.bind(this);
	}
	state = {
		currentAllele: this.props.punnett[this.props.parentId].genotype[
			this.props.alleleType
		][this.props.allelePosition],
		openOptions: false,
		focusedOption: undefined
	};

	clearOptionsRefs = () => {
		this.arrayOfOptionsRefs = [];
	};

	setOptionRef = element => {
		// because refs are called when AlleleListboxOptions is unmounted
		// don't add it if it's null
		if (element !== null) {
			this.arrayOfOptionsRefs.push(element);
		}
	};

	render() {
		const { alleleType } = this.props;
		let { currentAllele, openOptions, focusedOption } = this.state;
		return (
			<div>
				<AlleleListboxSelect
					alleleType={alleleType}
					handleOpenOptions={this.handleOpenOptions}
					openOptions={this.state.openOptions}
					// Use the `ref` callback to store a reference to the text input DOM
					// element in an instance field
					selectRef={this.selectRef}
					currentAllele={currentAllele}
				/>
				<div>
					{openOptions === true ? (
						<AlleleListboxOptions
							alleleType={alleleType}
							handleOptionsEvents={this.handleOptionsEvents}
							setOptionRef={this.setOptionRef}
							currentAllele={currentAllele}
							focusedOption={focusedOption}
						/>
					) : (
						// clear the refs array when ColorListbox is not being rendered
						[this.clearOptionsRefs(), null]
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ flowers, punnett }) {
	return {
		flowers,
		punnett
	};
}

export default connect(mapStateToProps)(AlleleListboxContainer);
