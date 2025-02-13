import React, { useState } from "react";

function Joueur1({ onSetCache }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const cacheValue = parseInt(inputValue);
    if (cacheValue >= 1 && cacheValue <= 6) {
      onSetCache(cacheValue);
    } else {
      alert("Please enter a number between 1 and 6");
    }
  };

  return (
    <div>
      <h1>Jeu de Dé Joueur 1</h1>
      <p>Donner le numéro caché entre 1 et 6:</p>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        min="1"
        max="6"
      />
      <button onClick={handleSubmit}>Jouer</button>
    </div>
  );
}

export default Joueur1;
