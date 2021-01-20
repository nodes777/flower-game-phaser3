import React, { Component } from "react";
import "../../css/about.css";
const url = "https://en.wikipedia.org/wiki/Punnett_square";
class AboutScreen extends Component {
	render() {
		return (
			<div className="punnett" role="region" aria-label={`About Screen`}>
				<h1>About</h1>
				<p>
					This is a flower gene simulation. Pick a{" "}
					<a href={url}>punnett square</a> configuration for color and shape of
					the two inital parents, then activate the Bee play button to start the
					simulation. You can set a gene as recessive in the options screen. The
					bee will not pollinate the same flower (a single flower cannot be both
					parents), but the flowers do not have sexes.
				</p>
				<p>
					<a href="https://github.com/nodes777/flower-game-phaser3">
						Github Repo
					</a>
				</p>
			</div>
		);
	}
}
export default AboutScreen;
