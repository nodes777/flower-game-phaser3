import { store } from "../index.js";

export const determineRandomXPos = screenSize => {
	return Math.floor(Math.random() * screenSize.width + 1);
};
export const determineRandomYPos = screenSize => {
	return Math.floor(Math.random() * screenSize.height + 1);
};

export const determinePosition = (parent2Position, allPositions) => {
	let possibleNewPositions = [
		{ x: parent2Position.x + 20, y: parent2Position.y + 20 },
		{ x: parent2Position.x + 20, y: parent2Position.y - 20 },
		{ x: parent2Position.x - 20, y: parent2Position.y + 20 },
		{ x: parent2Position.x - 20, y: parent2Position.y - 20 }
	];

	let posInfo = { availableNewPositions: [] };

	for (let i = 0; i <= possibleNewPositions.length - 1; i++) {
		let isTaken = allPositions.some(oldPosition => {
			return (
				JSON.stringify(oldPosition) ===
				JSON.stringify(possibleNewPositions[i])
			);
		});

		if (!isTaken) {
			posInfo.availableNewPositions.push(possibleNewPositions[i]);
		}
	}
	var randPos =
		posInfo.availableNewPositions[
			Math.floor(Math.random() * posInfo.availableNewPositions.length)
		];
	posInfo.hasRoom = posInfo.availableNewPositions.length > 0;
	posInfo.newPos = randPos;
	return posInfo;
};

// export const determineXPos = parent2Position => {
// 	const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
// 	let newXPosition = parent2Position.x + plusOrMinus * 20;
// 	console.log(`newXPosition ${newXPosition}`);
// 	return newXPosition;
// };
// export const determineYPos = parent2Position => {
// 	const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
// 	let newYPosition = parent2Position.y + plusOrMinus * 20;
// 	console.log(`newYPosition ${newYPosition}`);
// 	return newYPosition;
// };
