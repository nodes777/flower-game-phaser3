export const capitalizeFirstLetter = str => {
	return str[0] ? `${str[0].toUpperCase()}${str.substring(1)}` : "";
};
