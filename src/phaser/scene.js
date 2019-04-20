import Phaser from "phaser";
import { preload } from "./preload";
import { create } from "./create";
import { update } from "./update";
class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  preload() {
    return preload.call(this);
  }
  create() {
    return create.call(this);
  }
  update() {
    return update.call(this);
  }
}

export default playGame;
