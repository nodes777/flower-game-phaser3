import bee from "../assets/bee.png";
import defaultFlower from "../assets/default-flower.png";
import diamondFlower from "../assets/diamond-flower.png";
import roundFlower from "../assets/round-flower.png";
import squareFlower from "../assets/square-flower.png";

import straightStem from "../assets/straight-stem.png";

// import bee3d from "../assets/spritestack/bee.png";
// import flower3d from "../assets/spritestack/default-flower.png";
// import straightStem3d from "../assets/spritestack/straight-stem.png";

import { shapes } from "../types/flowerShapes";

export function preload() {
	this.load.image(shapes.DEFAULT, defaultFlower);
	this.load.image("bee", bee);
	this.load.image(shapes.DIAMOND, diamondFlower);
	this.load.image(shapes.ROUND, roundFlower);
	this.load.image(shapes.SQUARE, squareFlower);

	this.load.image("straightStem", straightStem);
	// display progress bar
	const progressBar = this.add.graphics();
	const progressBox = this.add.graphics();
	progressBox.fillStyle(0x222222, 0.8);
	progressBox.fillRect(240, 270, 320, 50);

	const width = this.cameras.main.width;
	const height = this.cameras.main.height;
	const loadingText = this.make.text({
		x: width / 2,
		y: height / 2 - 50,
		text: "Loading...",
		style: {
			font: "20px monospace",
			fill: "#ffffff"
		}
	});
	loadingText.setOrigin(0.5, 0.5);

	const percentText = this.make.text({
		x: width / 2,
		y: height / 2 - 5,
		text: "0%",
		style: {
			font: "18px monospace",
			fill: "#ffffff"
		}
	});
	percentText.setOrigin(0.5, 0.5);

	const assetText = this.make.text({
		x: width / 2,
		y: height / 2 + 50,
		text: "",
		style: {
			font: "18px monospace",
			fill: "#ffffff"
		}
	});
	assetText.setOrigin(0.5, 0.5);

	// update progress bar
	this.load.on("progress", function(value) {
		percentText.setText(parseInt(value * 100) + "%");
		progressBar.clear();
		progressBar.fillStyle(0xffffff, 1);
		progressBar.fillRect(250, 280, 300 * value, 30);
	});

	// update file progress text
	this.load.on("fileprogress", function(file) {
		assetText.setText("Loading asset: " + file.key);
	});

	// remove progress bar when complete
	this.load.on("complete", function() {
		progressBar.destroy();
		progressBox.destroy();
		loadingText.destroy();
		percentText.destroy();
		assetText.destroy();
	});

	// load 3d assets
	this.spritestack = false;
	if (this.spritestack) {
		this.load.spritesheet(
			"flower3d",
			"src/assets/spritestack/default-flower.png",
			{
				frameWidth: 10, // from json
				frameHeight: 20, // from properties
				startFrame: 4, // 4 is the forward facing sprite
				endFrame: 9 // 9 is the last angle with semi forward
			}
		);
		this.load.spritesheet(
			"straightStem3d",
			"src/assets/spritestack/straight-stem.png",
			{
				frameWidth: 4,
				frameHeight: 35,
				startFrame: 4,
				endFrame: 9
			}
		);
		this.load.spritesheet("bee3d", "src/assets/spritestack/bee-3d.png", {
			frameWidth: 54, // length divided by 16 frames
			frameHeight: 62,
			startFrame: 0 // 9 is facing right
		});
	}
}
