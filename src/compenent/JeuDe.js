import React from "react";

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState((prevState) => ({
      face: valeur,
      compteur: prevState.compteur + 1,
      fin: valeur === this.props.cache,
    }));
  }

  getImage() {
    return `images/face${this.state.face}.png`;
  }

  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    const styleImage = { width: "60px", height: "60px" };
    return (
      <div>
        <h1>Jeu de Dé...</h1>
        <img src="images/Dé.PNG" alt="Dé" />
        <h2>Face: {this.state.face || "..."}</h2>
        <img src={this.getImage()} style={styleImage} alt="Face du dé" />
        <h2>Nombre d'essais: {this.state.compteur}</h2>
        <button onClick={() => this.jouer()}>Jouer</button>
        {this.state.fin && <p>Bravo, vous avez trouvé la face cachée!</p>}
        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}
