// TetrisComponent.js
import React from 'react';
import Tetris from 'react-tetris';
import './tetris.css';  // Import the CSS file

const TetrisComponent = () => {
  return (
    <div className="tetris-container">
      <h1 className="tetris-title">Tetris</h1>
      <Tetris
        keyboardControls={{
          down: 'MOVE_DOWN',
          left: 'MOVE_LEFT',
          right: 'MOVE_RIGHT',
          space: 'HARD_DROP',
          z: 'FLIP_COUNTERCLOCKWISE',
          x: 'FLIP_CLOCKWISE',
          up: 'FLIP_CLOCKWISE',
          p: 'TOGGLE_PAUSE',
          c: 'HOLD',
          shift: 'HOLD'
        }}
      >
        {({
          HeldPiece,
          Gameboard,
          PieceQueue,
          points,
          linesCleared,
          state,
          controller,
          
        }) => (
          <div className="game-board">
            <div className="game-info">
              <p>Points: {points}</p>
              <p>Lines Cleared: {linesCleared}</p>
            </div>
            <div className="game-container">
              <div className="held-piece-container">
                <HeldPiece />
              </div>
              <div className="gameboard-container">
                <Gameboard />
              </div>
              <div className="piece-queue-container">
                <PieceQueue />
              </div>
            </div>
            <div className="controls-container">
              <div className="controls">
                <div className="directional-controls">
                  <button className="control-button" onClick={controller.moveUp}>↑</button>
                  <div className="horizontal-controls">
                    <button className="control-button" onClick={controller.moveLeft}>←</button>
                    <button className="control-button" onClick={controller.moveRight}>→</button>
                  </div>
                  <button className="control-button" onClick={controller.moveDown}>↓</button>
                </div>
                <div className="special-controls">
                  <button className="control-button" onClick={controller.hold}>Hold</button>
                  <div className="horizontal-controls">
                 <button className="control-button" onClick={controller.flipCounterclockwise}>⟲</button>
                 
                 <button className="control-button" onClick={controller.flipClockwise}>⟳</button>
                 </div>
                  <button className="control-button" onClick={controller.hardDrop}>⬇️</button>
                </div>
              </div>
            </div>
            {state === 'LOST' && (
              <div className="game-over">
                <h2>Game Over</h2>
                <button className="restart-button" onClick={controller.restart}>New game</button>
              </div>
            )}
          </div>
        )}
      </Tetris>
    </div>
  );
};

export default TetrisComponent;
