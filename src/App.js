
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoveCard from './lovecard';
import LoveLetter from './AnimatedLove';
import HeartDisplay from './Bigheart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lovecard" element={<LoveCard />} />
        <Route path="/AnimatedLove" element={<LoveLetter />} />
        <Route path="/Bigheart" element={<HeartDisplay/>} />
      </Routes>
    </Router>
  );
};

export default App;
