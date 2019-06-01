export function add3dControls(game) {
	// 3 degrees rotation
	game.input.keyboard.on("keydown_A", function() {
		// frame 1 is the last frame with semi forward angle

		const lastFrame = 1;
		// set frame for all 3dFlowers
		game.flowersOnScreen.forEach(flower => {
			let frameToBe = flower.frame.name - 1;
			if (frameToBe <= lastFrame) frameToBe = lastFrame;
			flower.setFrame(frameToBe);
			// set the stem frame
			let stemframeToBe = flower.stem.frame.name - 1;
			if (stemframeToBe <= lastFrame) frameToBe = lastFrame;
			flower.stem.setFrame(frameToBe);
		});
	});

	game.input.keyboard.on("keydown_D", function() {
		// frame 7 is the last frame with semi forward angle
		const lastFrame = 7;
		// set frame for all 3dFlowers
		game.flowersOnScreen.forEach(flower => {
			let frameToBe = flower.frame.name + 1;
			if (frameToBe >= lastFrame) frameToBe = lastFrame;
			flower.setFrame(frameToBe);

			let stemframeToBe = flower.stem.frame.name - 1;
			if (stemframeToBe <= lastFrame) frameToBe = lastFrame;
			flower.stem.setFrame(frameToBe);
		});
	});

	//inputs for rotation 360
	// game.input.keyboard.on("keydown_A", function() {
	// 	console.log(game.threeDFlower.frame);
	// 	let lastFrame = game.threeDFlower.frame.texture.frameTotal - 2;
	// 	let frameToBe = game.threeDFlower.frame.name - 1;

	// 	if (frameToBe <= 0) frameToBe = lastFrame;
	// 	game.threeDFlower.setFrame(frameToBe);
	// 	game.threeDFlowerStem.setFrame(frameToBe);
	// });

	// game.input.keyboard.on("keydown_D", function() {
	// 	game.threeDFlower.setFrame(game.threeDFlower.frame.name + 1);
	// 	game.threeDFlowerStem.setFrame(game.threeDFlowerStem.frame.name + 1);
	// });
}
