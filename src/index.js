import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { preload } from "./phaser/preload";
import { create } from "./phaser/create";
import { update } from "./phaser/update";
import playGame from "./phaser/scene";
import "./css/index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/indexReducer";
import indexMiddleware from "./middleware/indexMiddleware";

export const store = createStore(rootReducer, indexMiddleware);
export const screenSize = {
  width: window.innerWidth,
  height: window.innerHeight
};

const config = {
  type: Phaser.AUTO,
  parent: "phaser",
  width: screenSize.width,
  height: screenSize.height,
  backgroundColor: "#488214",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: playGame
};

const game = new Phaser.Game(config);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
