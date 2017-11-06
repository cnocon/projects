import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

// To make a fully-working game, we now need to check if one player has won the game, and alternate placing X and O in the squares. To check if someone has won, we’ll need to have the value of all 9 squares in one place, rather than split up across the Square components... the best solution here is to store this state in the Board component instead of in each Square – and the Board component can tell each Square what to display, like how we made each square display its index earlier.
/***********************************************
  When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent.
***********************************************/

class Square extends React.Component {
  render() {
    return (
      <button className="square" data-value={this.props.value} onClick={() => this.props.onClick()}>
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
      xIsNext: true
    };
  }
  handleClick(i) {
    //use .slice() to copy the squares array instead of mutating the existing array.
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        data-value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {

    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = <h4 className="display-4 alert alert-success font-weight-bold text-success">{`Player ${winner} Wins!`}</h4>;
    } else {
      status = <div className="status">Next Player: <span className="badge badge-secondary">{this.state.xIsNext ? 'X' : 'O'}</span></div>;
    }
    return (

      <div>
        {status}
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
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
