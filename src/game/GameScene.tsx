import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    // Load the map and the tileset image
    this.load.tilemapTiledJSON("map", "/demonscape-test1-dungeon.json"); // your exported JSON
    this.load.image("tiles", "/level-1-dungeon.png"); // your master PNG
  }

  create() {
    // Create the tilemap
    const map = this.make.tilemap({ key: "map" });

    // The name here must match the "name" in the tilesets array of the JSON
    const tileset = map.addTilesetImage("level-1-dungeon", "tiles");
    if (!tileset) {
      throw new Error("Tileset not found! Check name in Tiled.");
    }

    const floorLayer = map.createLayer("floor", tileset, 0, 0);
    const rugLayer = map.createLayer("rug", tileset, 0, 0);
    const wallsLayer = map.createLayer("walls", tileset, 0, 0);
    const wallThingsLayer = map.createLayer("wall-objects", tileset, 0, 0);
    const hiddenFloorLayer = map.createLayer(
      "hidden-floor-objects",
      tileset,
      0,
      0
    );
    const floorObjectsLayer = map.createLayer("floor-objects", tileset, 0, 0);
    const surfaceItemsLayer = map.createLayer("surface-items", tileset, 0, 0);
    const fireLayer = map.createLayer("fire", tileset, 0, 0);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow({
      x: map.widthInPixels / 2,
      y: map.heightInPixels / 2,
    });
  }
}
