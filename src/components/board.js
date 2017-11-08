import React from 'react';
import ReactDOM from 'react-dom';
import {calculateWinner} from '../utils/utils.js';

/**
 * @Board (default)
 *
 * Holds the state for whose turn it is and the value of squares
 * on the board.
 */
export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  resetBoard() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    })
  }
  render() {
    return (
      <div>
        <Status {...this.state} />
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
        <button className="btn btn-lg btn-secondary mt-2" onClick={()=>{this.resetBoard()}}>
          Reset
        </button>
      </div>
    );
  }
}

// ============================================
/**
 * @Square
 *
 * A game square.
 */
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

/**
 * @Status
 *
 * Contains messaging for whose turn it is, and announces
 * the winner of the game, if applicable.
 */
class Status extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const winner = calculateWinner(this.props.squares);
    const classNames = winner ? 'alert alert-success' : 'alert alert-info';
    let message = winner ?
      `Winner: ${winner}` :
      `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    return (
      <div className={`status ${classNames}`}>{message}</div>
    )
  }
}
