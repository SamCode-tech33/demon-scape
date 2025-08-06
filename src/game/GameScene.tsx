import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    // Load the Tiled map JSON
    this.load.tilemapTiledJSON("map", "/assets/level-1-dungeon.json");

    // Load all tileset images referenced in the map JSON
    this.load.image("wall-8 - 2 tiles tall-transparency", "/assets/wall-transparency.png");
    this.load.image("Dungeon A2_32x32", "/assets/A2_32x32.png");
    this.load.image("Dungeon_A4_32x32", "/assets/B32x32.png");
    this.load.image("A4_32x32_CUSTOM", "/assets/A4_32x32_CUSTOM.png");
    this.load.image("Dungeon_B32x32", "/assets/B32x32.png");
    this.load.image("props", "/assets/TX_Props.png");
    this.load.image("more props", "/assets/Platformer_Asset_All_G.png");
    this.load.image("moreprops2", "/assets/sRandomWorldItems.png");
    this.load.image("alchemy", "/assets/SpriteSheet.png");
    this.load.image("Tileset-Terrain2", "/assets/Tileset-Terrain2.png");
  }

  create() {
    // Create the map
    const map = this.make.tilemap({ key: "map" });

    // Add all tilesets by matching the "name" from Tiled with the key we loaded above
    const tilesets = [
      map.addTilesetImage("wall-8 - 2 tiles tall-transparency", "wall-8 - 2 tiles tall-transparency"),
      map.addTilesetImage("Dungeon A2_32x32", "Dungeon A2_32x32"),
      map.addTilesetImage("Dungeon_A4_32x32", "Dungeon_A4_32x32"),
      map.addTilesetImage("A4_32x32_CUSTOM", "A4_32x32_CUSTOM"),
      map.addTilesetImage("Dungeon_B32x32", "Dungeon_B32x32"),
      map.addTilesetImage("props", "props"),
      map.addTilesetImage("more props", "more props"),
      map.addTilesetImage("moreprops2", "moreprops2"),
      map.addTilesetImage("alchemy", "alchemy"),
      map.addTilesetImage("Tileset-Terrain2", "Tileset-Terrain2")
    ] as Phaser.Tilemaps.Tileset[];

    // Create layers - now we pass ALL tilesets in an array for multi-tileset maps
    const floorLayer = map.createLayer("floor", tilesets, 0, 0);
    const rugLayer = map.createLayer("rug", tilesets, 0, 0);
    const wallsLayer = map.createLayer("walls", tilesets, 0, 0);
    const wallThingsLayer = map.createLayer("wall-objects", tilesets, 0, 0);
    const hiddenFloorLayer = map.createLayer("hidden-floor-objects", tilesets, 0, 0);
    const floorObjectsLayer = map.createLayer("floor-objects", tilesets, 0, 0);
    const surfaceItemsLayer = map.createLayer("surface-items", tilesets, 0, 0);
    const fireLayer = map.createLayer("fire", tilesets, 0, 0);

    // Optional: Set depth for rendering order if needed
    floorLayer && floorLayer.setDepth(1);
    rugLayer && rugLayer.setDepth(2);
    wallsLayer && wallsLayer.setDepth(3);
    wallThingsLayer && wallThingsLayer.setDepth(4);
    hiddenFloorLayer && hiddenFloorLayer.setDepth(5);
    floorObjectsLayer && floorObjectsLayer.setDepth(6);
    surfaceItemsLayer && surfaceItemsLayer.setDepth(7);
    fireLayer && fireLayer.setDepth(8);
  }

  update() {
    // Game logic here
  }
}