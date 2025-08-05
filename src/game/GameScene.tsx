import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    // Load the map and tileset
    this.load.tilemapTiledJSON('map', '/demonscape-test1-dungeon.json'); // Map JSON
    this.load.image('tiles', '/demonscape-test1-dungeon_NoCol.png');         // Tileset image
  }

  create() {
    // Create the tilemap
    const map = this.make.tilemap({ key: 'map' });

    // Make sure the name matches the one in your Tiled map JSON
    const tileset = map.addTilesetImage('demonscape-tiles', 'tiles');

    // Create layers (layer name must match your Tiled JSON layer name)
    const floorLayer = map.createLayer('Floor', tileset, 0, 0);
    const rugLayer = map.createLayer('Rug', tileset, 0, 0);
    const wallsLayer = map.createLayer('Walls', tileset, 0, 0);
    const wallThingsLayer = map.createLayer('wall-objects', tileset, 0, 0);
    const hiddenFloorLayer = map.createLayer('Hidden floor objects', tileset, 0, 0);
    const floorObjectsLayer = map.createLayer('Floor Objects', tileset, 0, 0);
    const surfaceItemsLayer = map.createLayer('ON SURFACE ITEMS', tileset, 0, 0);
    const fireLayer = map.createLayer('PROP FIRE', tileset, 0, 0);

    // Optional: set world bounds
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  }
}
