import { screenSize } from "../exampleState";
import { store } from "../index.js";

export const determineRandomXPos = () => {
	return Math.floor(Math.random() * screenSize.width + 1);
};
export const determineRandomYPos = () => {
	return Math.floor(Math.random() * screenSize.height + 1);
};

export const determineXPos = parent2Position => {
	const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	let newXPosition = parent2Position.x + plusOrMinus * 20;
	console.log(`newXPosition ${newXPosition}`);
	return newXPosition;
};
export const determineYPos = parent2Position => {
	const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	let newYPosition = parent2Position.y + plusOrMinus * 20;
	console.log(`newYPosition ${newYPosition}`);
	return newYPosition;
};

export const verifyPositions = (xPos, yPos, allPositions, parent2Position) => {
	let newPositions = { x: xPos, y: yPos };
	console.log(`newPositions:`);
	console.log(newPositions);
	let isTaken = false;
	console.log(allPositions);

	isTaken = allPositions.some(oldPositions => {
		return JSON.stringify(oldPositions) === JSON.stringify(newPositions);
	});
	console.log(isTaken);

	if (isTaken) {
		// retry
		console.log("Both are taken!");
		return verifyPositions(
			determineXPos(parent2Position),
			determineYPos(parent2Position),
			allPositions,
			parent2Position
		);
	} else {
		return newPositions;
	}
};
