import { store } from "../index.js";
import { determineXPos, determineYPos } from "../utils/determinePosition";
import { colors } from "../utils/colors";

export function init(game) {
	game.firstFlower = game.physics.add.sprite(400, 150, "blankFlower");
	game.firstFlower.debugShowBody = false;
	game.firstFlower.id = "flower1";

	// set the color by picking a random color in the flowers genotype array
	// prefix with 0x to expect hex
	game.firstFlower.setTint(
		"0x" +
			colors[
				store.getState().flowers.byId.flower1.genotype.color[
					Math.round(Math.random())
				]
			]
	);

	game.bee = game.physics.add.sprite(200, 150, "bee");
	game.bee.setOrigin(0.5, 0.5).setDrag(50, 50);
	game.bee.id = "bee1";
	// turn off debug info
	game.bee.debugShowBody = false;
	//game.bee.debugShowVelocity = false;

	game.secondFlower = game.physics.add.sprite(
		Phaser.Math.RND.integerInRange(25, 600),
		Phaser.Math.RND.integerInRange(25, 600),
		"blankFlower"
	);
	game.secondFlower.debugShowBody = false;
	game.secondFlower.id = "flower2";
	game.secondFlower.setTint(
		"0x" +
			colors[
				store.getState().flowers.byId.flower2.genotype.color[
					Math.round(Math.random())
				]
			]
	);

	//Create array of flowers on screen to fly to
	game.flowersOnScreen = [game.firstFlower, game.secondFlower];

	// set the flower to go to
	game.flowerToFlyTo = game.firstFlower;
}
