import grassTileData from "../../assets/spritestack/grassTile.json";

export const addTiles = game => {
	console.log(game.add.isoSprite);
	let tile;
	const height = grassTileData.height - 2;
	for (let xx = 0; xx < 256; xx += height) {
		for (let yy = 0; yy < 256; yy += height) {
			tile = game.add.isoSprite(xx, yy, 0, "grassTile", game.isoTiles);
			tile.setInteractive();

			tile.on("pointerover", function() {
				this.setTint(0x86bfda);
				this.isoZ += 5;
				console.log(this);
				if (this.flowerSprite) {
					this.flowerSprite.isoZ += 5;
					this.flowerSprite.stem.isoZ += 5;
				}
			});

			tile.on("pointerout", function() {
				this.clearTint();
				this.isoZ -= 5;
				if (this.flowerSprite) {
					this.flowerSprite.isoZ -= 5;
					this.flowerSprite.stem.isoZ -= 5;
				}
			});
		}
	}
};
