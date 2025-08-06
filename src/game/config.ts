import Phaser from 'phaser';
import GameScene from './GameScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container', // attach canvas to this div
  physics: { default: 'arcade' },
  scene: [GameScene],
};

