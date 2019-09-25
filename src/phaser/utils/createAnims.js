export const createAnims = game => {
	//console.log(game.anims.generateFrameNumbers("triangleFlower"));

	const defaultSpinConfig = {
		key: "defaultFlowerSpin",
		frames: game.anims.generateFrameNumbers("defaultFlower"),
		frameRate: 6,
		yoyo: false,
		repeat: 0,
		showOnStart: true
	};

	const triangleSpinConfig = {
		key: "triangleFlowerSpin",
		frames: game.anims.generateFrameNumbers("triangleFlower"),
		frameRate: 6,
		yoyo: false,
		repeat: 0,
		showOnStart: true
	};

	const roundSpinConfig = {
		key: "roundFlowerSpin",
		frames: game.anims.generateFrameNumbers("roundFlower"),
		frameRate: 6,
		yoyo: false,
		repeat: 0,
		showOnStart: true
	};

	const squareSpinConfig = {
		key: "squareFlowerSpin",
		frames: game.anims.generateFrameNumbers("squareFlower"),
		frameRate: 6,
		yoyo: false,
		repeat: 0,
		showOnStart: true
	};

	const defaultFlowerSpinAnim = game.anims.create(defaultSpinConfig);
	const triangleFlowerSpinAnim = game.anims.create(triangleSpinConfig);
	const roundFlowerSpinAnim = game.anims.create(roundSpinConfig);
	const squareFlowerSpinAnim = game.anims.create(squareSpinConfig);
	console.log("Animation: ");
	console.log(defaultFlowerSpinAnim);
};
