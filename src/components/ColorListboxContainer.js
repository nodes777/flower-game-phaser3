import { connect } from "react-redux";
import React, { Component } from "react";

import ColorListboxSelect from "./ColorListboxSelect";
import ColorListboxOptions from "./ColorListboxOptions";

import { changeParentAllele } from "../actions/parents";

import "../css/listbox.css";

class ColorListboxContainer extends Component {
	constructor(props) {
		super(props);
		// create a ref to store the DOM element
		this.selectRef = React.createRef();
		this.arrayOfOptionsRefs = [];
	}
	state = {
		currentAllele: undefined,
		openOptions: false,
		focusedOption: undefined
	};

	clearOptionsRefs = () => {
		this.arrayOfOptionsRefs = [];
	};

	handleSubmit = () => {
		const { dispatch, flowerId, alleleType, allelePosition } = this.props;
		const info = {
			flowerId: flowerId,
			alleleType: alleleType,
			allelePosition: allelePosition,
			allele: this.state.currentAllele
		};

		dispatch(changeParentAllele(info));
	};

	handleOpenOptions = event => {
		switch (event.type) {
			case "click":
				this._handleOpenOptions(event);
				break;
			case "keydown":
				if (event.key === "Enter" || event.key === " ") {
					this._handleOpenOptions(event);
				}
				break;
			default:
		}
	};

	_handleOpenOptions = event => {
		this.setState(
			() => {
				return {
					openOptions: !this.state.openOptions,
					focusedOption: document.activeElement.id
				};
			},
			() => {
				this.arrayOfOptionsRefs[0].focus();
			}
		);
	};

	handleOptionsEvents = (color, index, event) => {
		switch (event.type) {
			case "click":
				this.setState(
					() => ({
						currentAllele: color,
						openOptions: !this.state.openOptions
					}),
					() => {
						this.handleSubmit();
					}
				);
				this.selectRef.current.focus();
				break;
			case "keydown":
				if (event.key === "Enter" || event.key === " ") {
					this.setState(
						() => ({
							currentAllele: color,
							openOptions: !this.state.openOptions
						}),
						() => {
							this.handleSubmit();
						}
					);
					this.selectRef.current.focus();
				}
				if (event.key === "ArrowUp") {
					event.preventDefault();
					this.arrayOfOptionsRefs[index - 1].focus();
					this.setState(() => ({
						focusedOption: document.activeElement.id
					}));
				}
				if (event.key === "ArrowDown") {
					event.preventDefault();
					this.arrayOfOptionsRefs[index + 1].focus();
					this.setState(() => ({
						focusedOption: document.activeElement.id
					}));
					console.log(this.state.focusedOption);
				}
				if (event.key === "Escape") {
					this.setState(
						() => {
							return { openOptions: !this.state.openOptions };
						},
						() => {
							this.selectRef.current.focus();
						}
					);
				}
				break;
			default:
		}
	};

	setOptionRef = element => {
		// because refs are called when ColorListboxOptions is unmounted
		// don't add it if it's null
		if (element !== null) {
			this.arrayOfOptionsRefs.push(element);
		}
	};

	render() {
		let { currentAllele, openOptions, focusedOption } = this.state;
		const { parent } = this.props;
		return (
			<div>
				<ColorListboxSelect
					handleOpenOptions={this.handleOpenOptions}
					openOptions={this.state.openOptions}
					// Use the `ref` callback to store a reference to the text input DOM
					// element in an instance field
					selectRef={this.selectRef}
					currentAllele={currentAllele}
					parent={parent}
				/>
				<div>
					{openOptions === true ? (
						<ColorListboxOptions
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

function mapStateToProps({ flowers }) {
	return {
		flowers
	};
}

export default connect(mapStateToProps)(ColorListboxContainer);
