import { addTiles } from "./addTiles";
const sizes = [256, 512, 800, 1024];

export const buildGarden = game => {
	const size = sizes[2];
	addTiles(game, size);
	// if size if big, shift camera up
	if (size > 700) {
		game.iso.projector.origin.setTo(0.5, 0.2);
	}
	if (size > 900) {
		game.iso.projector.origin.setTo(0.5, 0.02);
	}
};
