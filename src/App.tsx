import { useEffect } from 'react';
import Phaser from 'phaser';
import { gameConfig } from './game/config';
import "./global.css";

function App() {
  useEffect(() => {
    const game = new Phaser.Game(gameConfig);
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="gameCanvas" />
}

export default App;

