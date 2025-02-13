import React, { Component } from 'react'

class JeuDe extends Component {
    constructor(props) {
        super(props)
        this.state = { face: null, compteur: 0, fin: false, start: false }
    }
    jouer() {
        const valeur = Math.floor(Math.random() * 6) + 1
        this.setState((prevState) => ({
            face: valeur,
            compteur: prevState.compteur + 1,
            fin: valeur === parseInt(this.props.cache),
            start: true,
        }))
    }
    getImage() {
        return this.state.face ? `images/face${this.state.face}.png` : "images/Dé.PNG"
    }
    initialiser(){
        this.setState({ face:null, compteur: 0, fin: false, start: false })
        this.props.resetCache()
    }        

    render() {
        const styleImage = { width: "60px", height: "60px" }
        const isCacheValid = this.props.cache && this.props.cache >= 1 && this.props.cache <= 6
        return (
            <>
                <div className="container">
                    <h1>Jeu de Dé...</h1>
                    {!this.state.start && (
                        <input
                            type="number"
                            placeholder="Entrez la face cachée entre 1 et 6"
                            value={this.props.cache}
                            onChange={this.props.handleCache}
                            min={1}
                            max={6}
                            className="input"
                        />
                    )}
                    {this.state.start && (
                        <>  <img src={`images/face${this.props.cache}.png`}/>
                            <h2>Face actuelle: {this.props.cache}</h2>
                            <img src={this.getImage()} style={styleImage} alt="Dice" />
                            <h2>Face: {this.state.face || "..."}</h2>
                            <h2>nombre d'essais: {this.state.compteur}</h2>
                        </>
                    )}

                    {!this.state.fin ? (
                        <button className="button" onClick={() => this.jouer()} disabled={!isCacheValid}>
                            {this.state.compteur === 0 ? "Jouer" : "Rôler"}
                        </button>
                        ) : (
                        <>
                            <p>Bravo! Vous avez trouvé la face cachée...</p>
                            <button className="button" onClick={() => this.initialiser()}>Initialiser</button>
                        </>
                    )}
                </div>
            </>
        )
    }
}

export default JeuDe
