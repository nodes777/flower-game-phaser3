import { screenSize } from "../index";
export const determineXPos = () => {
	return Math.floor(Math.random() * screenSize.width + 1);
};
export const determineYPos = () => {
	return Math.floor(Math.random() * screenSize.height + 1);
};

export const add2 = () => {
	return 2 + 2;
};
