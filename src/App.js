

// import React, { useState } from 'react'
// import './App.css'
// import JeuDe from './jeux';

// function App() {
//     const [cache, setCache] = useState('')

//     const handleCache = (event) => {
//         const value = event.target.value
//         if (value === '' || (value >= 1 && value <= 6)) {
//             setCache(value)
//         }
//     }

//     const resetCache = () => {
//         setCache('')
//     }

//     return (
//         <>
//             <JeuDe cache={cache} handleCache={handleCache} resetCache={resetCache}></JeuDe>
//         </>
//     )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoveCard from './lovecard';
import LoveLetter from './AnimatedLove';
import HeartDisplay from './Bigheart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoveCard />} />
        <Route path="/AnimatedLove" element={<LoveLetter />} />
        <Route path="/Bigheart" element={<HeartDisplay/>} />
      </Routes>
    </Router>
  );
};

export default App;
