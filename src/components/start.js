import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './loading';

const StartScreen = ({ totalPoints }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayClick = () => {
    setIsLoading(true); // Set loading to true
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
      navigate('/play'); // Navigate to the '/play' route
    }, 2000);
  
    return () => clearTimeout(timer); // Cleanup the timer
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  const levels = [
    { name: 'Novice', points: 0 },
    { name: 'Beginner', points: 10000 },
    { name: 'Intermediate', points: 50000 },
    { name: 'Advanced', points: 100000 },
    { name: 'Expert', points: 500000 },
    { name: 'Master', points: 1000000 },
    { name: 'Grandmaster', points: 5000000 },
    { name: 'Legendary', points: 10000000 },
    { name: 'Mythical', points: 50000000 },
    { name: 'Invincible', points: 100000000 }
  ];

  let userLevel = levels[0].name;
  for (let i = levels.length - 1; i >= 0; i--) {
    if (totalPoints >= levels[i].points) {
      userLevel = levels[i].name;
      break;
    }
  }

  return (
    <div className="start-screen">
      <h1>Welcome to Tetmint</h1>
      <p>Total Points: {totalPoints}</p>
      <p>Level: {userLevel}</p>
      <button className="play-button" onClick={handlePlayClick}>Play</button>
    </div>
  );
};

export default StartScreen;
