// components/Game.js
import React from 'react';
import TetrisComponent from './tetris';

const Game = () => {
  return (
    <div>
      <h1>Play Tetris</h1>
      <TetrisComponent />
    </div>
  );
};

export default Game;
