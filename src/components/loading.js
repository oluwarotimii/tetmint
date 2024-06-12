import React, { useEffect, useState } from 'react';
import './loading.css';

const tetrominoShapes = [
  'M0 0h40v40H0z',  // Square
  'M0 0h40v10H0z M0 10h10v10H0z',  // L-shape
  'M0 0h10v40H0z',  // I-shape
  'M0 0h30v10H0z M10 10h10v10H10z',  // T-shape
  'M0 0h20v10H0z M10 10h10v30H10z',  // Z-shape
];

const LoadingScreen = () => {
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShapeIndex((prevIndex) => (prevIndex + 1) % tetrominoShapes.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <svg width="40" height="40" viewBox="0 0 40 40">
        <path d={tetrominoShapes[currentShapeIndex]} fill="#fff" />
      </svg>
    </div>
  );
};

export default LoadingScreen;
