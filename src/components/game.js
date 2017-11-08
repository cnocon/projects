import React from 'react';
import ReactDOM from 'react-dom';
import {calculateWinner, classify} from '../utils/utils.js';
import Board from './board'

/**
 * @Game (default)
 *
 * Holds the state for whose turn it is, and a history of square values,
 * including the current board, which the last item in the history.
 */
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true
    };
  }
  handleResetClick() {

    this.setState({
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
    })
  }
  handleSquareClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleSquareClick(i)}
          />
          <button role="button" className="btn btn-link mt-2" onClick={()=>{this.handleResetClick()}}>Start Over</button>
        </div>
        <div className="game-info mt-4">
          <Status winner={winner} xIsNext={this.state.xIsNext}/>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


// ============================================

/**
 * @Status
 *
 * Contains messaging for whose turn it is, and announces
 * the winner of the game, if applicable.
 */
class Status extends React.Component {
  render () {
    const classNames = this.props.winner ? '-info' : '-success';
    const message = this.props.winner ?
      `Winner: ${this.props.winner}` :
      `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    return (
      <div className={`status d-inline-block text-${classNames}`}>{message}</div>
    )
  }
}
