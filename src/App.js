import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      winner: ''
    }
  }

  changeWinner = () => {
    var player;
    this.setState({ winner: player})
  }

  resetGame = (e) => {
    e.preventDefault()
    console.log('reset game reached')
  }

  render() {
    if(this.state.winner){
      return (
        <div className="game-over">
          <h1>Player {this.state.winner} won!</h1>
          <h3>Would you like to play again?</h3>
          <button onClick={this.resetGame} value="New Game" />
        </div>
      )
    }else{
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Tic-Tac-Toe</h1>
          </header>
          <div className="content">
            <Game winner={this.state.winner} isWinner={this.changeWinner} />
          </div>
        </div>
      );
    }
  }
}

export default App;
