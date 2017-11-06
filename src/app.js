import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

// To make a fully-working game, we now need to check if one player has won the game, and alternate placing X and O in the squares. To check if someone has won, we’ll need to have the value of all 9 squares in one place, rather than split up across the Square components... the best solution here is to store this state in the Board component instead of in each Square – and the Board component can tell each Square what to display, like how we made each square display its index earlier.
/***********************************************
  When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent.
***********************************************/

class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={() => this.props.onClick()} className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      player: 'X'
    };
  }
  handleClick(i) {
    console.log(this);
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    const status = `${this.state.player}`;
    return (
      <div>
        <div className="status">Next Player: <span className="badge badge-secondary">{status}</span></div>
        <div className="game-board">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  render() {
    return (
      <div className="game">
        <Board />
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Game />
      </div>
    )
  }
}
