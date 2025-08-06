import Phaser from "phaser";
import GameScene from "./GameScene";

const speedDown = 300;

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  width: 1536,
  height: 740,
  parent: "gameCanvas",
  physics: {
    default: "arcade",
    arcade: { gravity: { y: speedDown, x: 0 }, debug: true },
  },
  scene: [GameScene],
};
