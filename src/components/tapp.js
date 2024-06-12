import React, { useState, useEffect } from 'react';
import './tapp.css'; // Import CSS file for styling


const TappingGame = () => {
    const [points, setPoints] = useState(0);
    const [coins, setCoins] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState(20);
    const [gameOver, setGameOver] = useState(false);
  
    // Generate random coordinates for coins
    const generateRandomCoordinates = () => {
      const x = Math.random() * 80 + 10; // Random x-coordinate between 10 and 90
      const y = Math.random() * 80 + 10; // Random y-coordinate between 10 and 90
      return { x, y };
    };
  
    // Generate initial set of coins
    useEffect(() => {
      const initialCoins = Array.from({ length: 1000 }, (_, index) => ({
        id: index,
        coordinates: generateRandomCoordinates(),
      }));
      setCoins(initialCoins);
    }, []);
  
    // Timer countdown effect
    useEffect(() => {
      if (timeRemaining > 0) {
        const timer = setTimeout(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setGameOver(true);
      }
    }, [timeRemaining]);
  
    // Event handler for tapping on a coin
    const handleTapCoin = (coinId) => {
      setPoints(points + 1);
      setCoins(coins.filter((coin) => coin.id !== coinId));
    };
  
    return (
      <div className="tapping-game">
        <h2>Time Remaining: {timeRemaining} seconds</h2>
        <h2>Coins Tapped: {points}</h2>
  
        {/* Render coins */}
        {!gameOver &&
          coins.map((coin) => (
            <div
              key={coin.id}
              className="coin"
              style={{ top: `${coin.coordinates.y}%`, left: `${coin.coordinates.x}%` }}
              onClick={() => handleTapCoin(coin.id)}
            >
              MINT
            </div>
          ))}
  
        {/* Game over message */}
        {gameOver && <h1>Game Over!</h1>}
      </div>
    );
  };
  
  export default TappingGame;