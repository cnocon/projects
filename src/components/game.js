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
      <div className="game mb-3">
        <Status winner={winner} xIsNext={this.state.xIsNext}/>
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleSquareClick(i)}/>
          <div className="game-info">
            <ol>{/* TODO */}</ol>
          </div>
          <button role="button" className="btn btn-primary float-left btn-sm" onClick={()=>{this.handleResetClick()}}>RESET</button>
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
    const classes = this.props.winner ? 'success' : 'secondary';
    const message = this.props.winner ?
      `${this.props.winner} Wins! `:
      `${this.props.xIsNext ? 'X' : 'O'}'s Turn`;
    return (
      <div className={`alert alert-${classes}`} role="alert">
        <h4 className='status alert-heading'>{message}</h4>
      </div>
    )
  }
}
