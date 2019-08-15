import { getHexColor } from "../../determinants/determineColor";

import { store } from "../../index";

import { mouseHoverOn, mouseHoverOut } from "./mouseHover";

export function addFlowerToGame(currFlower, currFlowerId, game) {
	const phenotype = store.getState().flowers.byId[currFlowerId].phenotype;
	console.log(phenotype);
	// set position and shape
	let newFlowerSprite = game.physics.add
		.sprite(currFlower.position.x, currFlower.position.y, phenotype.shape)
		.setInteractive();
	// set color
	newFlowerSprite.setTint(getHexColor(phenotype.color));
	// hide debug info
	newFlowerSprite.debugShowBody = false;
	// create id
	newFlowerSprite.id = currFlowerId;
	// keep on top of stem
	newFlowerSprite.depth = 1;
	// add stem
	game.add.image(newFlowerSprite.x, newFlowerSprite.y + 12, phenotype.stem);

	//add onhover display name
	let canFireHoverOn = true;
	game.input.on("pointerover", (event, gameObjects) => {
		if (canFireHoverOn) {
			canFireHoverOn = false;
			mouseHoverOn(event, gameObjects, game);
			game.time.addEvent({
				delay: 250,
				callback: () => {
					canFireHoverOn = true;
				}
			});
		}
	});

	//add onpointerout hide name
	let canFireHoverOut = true;
	game.input.on("pointerout", (event, gameObjects) => {
		if (canFireHoverOut) {
			canFireHoverOut = false;
			mouseHoverOut(event, gameObjects, game);
			game.time.addEvent({
				delay: 250,
				callback: () => {
					canFireHoverOut = true;
				}
			});
		}
	});
	// add the flower to the array of onscreen flowers for bee to fly to
	game.flowersOnScreen.push(newFlowerSprite);
}
