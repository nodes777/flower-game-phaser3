export function addBeeFrameRotation(bee, game) {
	console.log(bee);
	console.log(bee.body.angle);
	console.log(bee.body.velocity);
	console.log(bee.frame);
	console.log(`Rotation: ${bee.body.rotation}`);

	game.input.keyboard.on("keydown_A", function() {
		// frame 1 is the last frame with semi forward angle
		bee.angle = 0;
	});
	const firstFrame = 0;
	const lastFrame = bee.frame.texture.frameTotal - 1;
	game.input.keyboard.on("keydown_W", function() {
		// frame 1 is the last frame with semi forward angle
		// let frameToBe = bee.frame.name + 1;
		// if (frameToBe >= lastFrame) frameToBe = firstFrame;
		// bee.setFrame(frameToBe);

		console.log(`Angle: ${bee.body.angle}`);
		console.log(`Frame Name: ${bee.frame.name}`);
		console.log(`Rotation: ${bee.body.rotation}`);

		//bee.angle = bee.angle + 22.5;
	});
}
