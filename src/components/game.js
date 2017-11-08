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
  jumpto(move) {
    console.log(move);
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const classes = winner ? 'success' : 'primary';
    const message = winner ?
      `${winner} wins! `:
      `Next Move: ${this.state.xIsNext ? 'X' : 'O'}`;

    const moves = history.map((step, move) => {
      const desc = move ? move : 'Reset'
      return (
        <li className="page-item" key={move}>
          <button className="btn btn-outline-dark page-link" onClick={() => {this.jumpTo(move)}}>{desc}</button>
        </li>
      );
    });
    return (
      <div className="col-sm" style={{maxWidth:'450px'}}>
        <div className="card">
          {/*<div className="card-header text-left">*/}
          <h5 className="alert alert-secondary">{message}</h5>
          {/*</div>*/}
          <ol className="alert pagination pagination-sm">{moves}</ol>

          <div className="card-body">
            <Board squares={current.squares} onClick={(i) => this.handleSquareClick(i)}/>
            <footer className="blockquote-footer">
              <h5>Technologies Used</h5>
              <ul className="list-inline">
                <li className="badge badge-warning badge-pill">ReactJS</li>
                <li className="badge badge-warning badge-pill">Node + Webpack</li>
                <li className="badge badge-warning badge-pill">Bootstrap</li>
              </ul>
              <p>Based on the Tic Tac Toe application created in <a href="https://reactjs.org/tutorial/tutorial.html">Facebook's React Tutorial</a>.</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
