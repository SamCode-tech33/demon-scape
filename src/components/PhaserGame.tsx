import { useEffect } from "react";
import Phaser from "phaser";

export default function PhaserGame() {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0, x: 0 },
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    new Phaser.Game(config);

    function preload(this: Phaser.Scene) {
      this.load.image("tiles", "/assets/tiles.png");
      this.load.tilemapTiledJSON("map", "/assets/map.json");
    }

    function create(this: Phaser.Scene) {
      const map = this.make.tilemap({ key: "map" });
      const tileset: any = map.addTilesetImage("tilesetNameInTiled", "tiles");
      map.createLayer("Tile Layer 1", tileset, 0, 0);
    }

    function update() {
      // Game loop
    }
  }, []);

  return <div id="game-container" />;
}
