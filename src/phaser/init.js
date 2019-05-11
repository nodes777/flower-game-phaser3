import { store } from "../index.js";
import { determineXPos, determineYPos } from "../utils/determinePosition";
import { colors } from "../types/colors";

export function init(game) {
	/* First Flower */
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
	game.firstFlower.depth = 1;
	// add stem
	game.add.image(game.firstFlower.x, game.firstFlower.y + 12, "straightStem");
	/* Bee */
	game.bee = game.physics.add.sprite(200, 150, "bee");
	game.bee.setOrigin(0.5, 0.5).setDrag(50, 50);
	game.bee.id = "bee1";
	game.bee.depth = 999;
	// turn off debug info
	game.bee.debugShowBody = false;
	//game.bee.debugShowVelocity = false;

	/* Second Flower */
	game.secondFlower = game.physics.add.sprite(
		determineXPos(),
		determineYPos(),
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
	game.secondFlower.depth = 1;
	// add stem
	game.add.image(
		game.secondFlower.x,
		game.secondFlower.y + 12,
		"straightStem"
	);
	//Create array of flowers on screen to fly to
	game.flowersOnScreen = [game.firstFlower, game.secondFlower];

	// set the flower to go to
	game.flowerToFlyTo = game.firstFlower;
}
