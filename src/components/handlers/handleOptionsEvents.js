export const handleOptionsEvents = (color, index, event) => {
	console.log(this);
	console.log(color);
	switch (event.type) {
		case "click":
			this.setState(() => ({
				currentAllele: color,
				openOptions: !this.state.openOptions
			}));
			this.selectRef.current.focus();
			break;
		case "keydown":
			if (event.key === "Enter" || event.key === " ") {
				this.setState(() => ({
					currentAllele: color,
					openOptions: !this.state.openOptions
				}));
				this.selectRef.current.focus();
			}
			if (event.key === "ArrowUp") {
				event.preventDefault();
				this.arrayOfOptionsRefs[index - 1].focus();
			}
			if (event.key === "ArrowDown") {
				event.preventDefault();
				this.arrayOfOptionsRefs[index + 1].focus();
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
	}
};
