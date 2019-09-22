import { changeParentAllele } from "../../../actions/punnettActions";

export const _handleOptionsEvents = function(color, index, event) {
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
				//console.log(this.state.focusedOption);
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

export const _handleSubmit = function() {
	const { dispatch, parentId, alleleType, allelePosition } = this.props;
	const info = {
		parentId: parentId,
		alleleType: alleleType,
		allelePosition: allelePosition,
		allele: this.state.currentAllele
	};

	dispatch(changeParentAllele(info));
};
const _handleOpenOptions = function(event) {
	if (!this.state.openOptions) {
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
	} else {
		this.setState(() => {
			return {
				openOptions: !this.state.openOptions
			};
		});
	}
};
export const handleOpenOptions = function(event) {
	switch (event.type) {
		case "click":
			_handleOpenOptions.call(this, event);
			break;
		case "keydown":
			if (event.key === "Enter" || event.key === " ") {
				_handleOpenOptions.call(this, event);
			}
			break;
		default:
	}
};
