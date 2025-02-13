import React, { useState } from "react";

function Joueur2({ cache, onReset }) {
  const [face, setFace] = useState(cache); // Initialize with the chosen number
  const [compteur, setCompteur] = useState(0);
  const [fin, setFin] = useState(false);

  const jouer = () => {
    const valeur = Math.floor(Math.random() * 6) + 1;
    setFace(valeur);
    setCompteur((prevCompteur) => prevCompteur + 1);
    setFin(valeur === cache);
  };

  const getImage = () => {
    return `images/face${face}.png`;
  };

  const initialiser = () => {
    onReset(); // Notify the parent component to reset to Joueur1
  };

  const styleImage = { width: "60px", height: "60px" };

  return (
    <div>
      <h1>Jeu de Dé Joueur 2 ({cache})</h1>
      <img src={`images/face${cache}.png`} style={styleImage} alt="Face du dé" />
      <h2>Face: {face || "..."}</h2>
      <img src={getImage()} style={styleImage} alt="Face du dé" />
      <h2>Nombre d'essais: {compteur}</h2>
      {!fin && <button onClick={jouer}>Lancer...</button>}
      {fin && <p>Bravo, vous avez trouvé la face cachée!</p>}
      <button onClick={initialiser}>Initialiser</button>
    </div>
  );
}

export default Joueur2;
