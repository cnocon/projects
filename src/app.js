import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: null};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ value: 'X' });
  }
  render() {
    return (
      <span onClick={this.handleClick} className="square">
        {this.state.value}
      </span>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {

    const status = 'Next player: X';
    return (
      <div>
        <p className="status">{status}</p>
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
