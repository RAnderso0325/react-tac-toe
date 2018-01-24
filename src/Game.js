import React, { Component } from 'react';
import Square from './Square.js';

class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            zero: null,
            one: null,
            two: null,
            three: null,
            four: null,
            five: null,
            six: null,
            seven: null,
            eight: null,
            turnIs: true,
            winnerGame: null
        }
    }

    

    changeBox = (e) => {
        e.preventDefault()
        const squares = [[this.state.zero, this.state.one, this.state.two], [this.state.three, this.state.four, this.state.five], [this.state.six, this.state.seven, this.state.eight]];
        console.log(this.state.turnIs)
        var turn;
        if(this.state.turnIs && !e.target.value){
            turn = 'X'
            this.setState({turnIs: false})
            console.log('turn is', turn)
            console.log('turn changed', this.state.turnIs)
        }else if(!e.target.value){
            turn = 'O'
            this.setState({turnIs: true})
            console.log('turn is', turn)
            console.log('turn changed', this.state.turnIs)
        }else{
            return console.log('box has already been selected')
        }
        this.setState({ [e.target.name]: turn})
        if (checkWinner(squares) || e.target.name) {
          this.setState({winnerGame: turn})
          console.log('changed winner state')
        }
        console.log('winner', this.state.winnerGame)
    }

    render(){
        const winner = this.state.winnerGame
        console.log(winner)
        return (
        <div className="game-board">
            <span className="row row-one">
              <Square box={this.state.zero} name="zero" playBox={this.changeBox} />
              <Square box={this.state.one}  name="one" playBox={this.changeBox} />
              <Square box={this.state.two} name="two" playBox={this.changeBox} />
            </span>
            <span className="row row-two">
              <Square box={this.state.three} name="three" playBox={this.changeBox} />
              <Square box={this.state.four} name="four" playBox={this.changeBox} />
              <Square box={this.state.five} name="five" playBox={this.changeBox} />
            </span>
            <span className="row row-three">
              <Square box={this.state.six} name="six" playBox={this.changeBox} />
              <Square box={this.state.seven} name="seven" playBox={this.changeBox} />
              <Square box={this.state.eight} name="eight" playBox={this.changeBox} />
            </span>
          </div>
        );
    }
}

export default Game;

function checkWinner(squares){
    console.log('check winner called')
        const winningCombos = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]
        ];
        for (let i=0; i<winningCombos.length; i++){
            const [a, b, c] = winningCombos[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a]
            }
        }
        return null
    }