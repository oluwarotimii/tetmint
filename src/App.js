import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Game from './components/game';
import TetrisComponent from './components/tetris';
import Farm from './components/farm';
import Tasks from './components/tasks'; 
import Friends from './components/friends';
import LoadingScreen from './components/loading';
import StartScreen from './components/start';
import TappingGame from './components/tapp';
import TelegramMiniApp from './components/mini';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="content">
          {/* <Routes>
            <Route path="/start" element={<StartScreen />} />
            <Route path="/play" element={<TetrisComponent />} />
            <Route path="/farm" element={<Farm />} />
            <Route path="/earn" element={<Tasks />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/loading" element={<LoadingScreen />} />
          
          </Routes> */}
          <TetrisComponent />
        </div>
      </div>
    </Router>
  );
};

export default App;
