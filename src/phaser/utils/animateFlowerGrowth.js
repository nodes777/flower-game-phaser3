export function animateFlowerGrowth(game, sprite) {
	// frame 5-11 have the flower in front of stem when they should be behind
	const speed = 100;
	for (let i = 1; i <= 16; i++) {
		game.time.addEvent({
			delay: speed * i,
			callback: function() {
				if (i === 16) {
					sprite.setFrame(0);
					sprite.stem.setFrame(0);
				} else {
					sprite.setFrame(i);
					sprite.stem.setFrame(i);
				}
				// for stem on top of flower issue
				// if (i > 4 && i < 12) {
				// 	sprite.depth = 0;
				// 	sprite.stem.depth = 1;
				// } else if (i >= 12) {
				// 	sprite.depth = 2;
				// }
			}
		});
		game.tweens.add({
			targets: [sprite, sprite.stem],
			scaleX: 1,
			scaleY: 1,
			ease: "Sine.easeOutIn",
			duration: 1000,
			yoyo: false
		});
	}
}
