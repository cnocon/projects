import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './app.scss';

class Square extends React.Component {
  render() {
    return (
      <button className={`square square-${this.props.value}`} onClick={() => this.props.onClick()}>{this.props.value}</button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: {'0':null,'1':null,'2':null,'3':null,'4':null,'5':null,'6':null,'7':null,'8':null},
      isXmove: true
    };
  }
  handleClick(i) {
    console.log(this.state.squares[i]);
    if (this.state.squares[i] == null) {
      //use .slice() to copy the squares array instead of mutating the existing array.
      // const squares = this.state.squares.slice();
      // squares[i] = this.state.isXmove ? 'X' : 'O';
      const key = `${i}`;
      const obj = new Object();
      obj[key] = this.state.isXmove ? 'X' : 'O';



      this.setState({
        squares: Object.assign(this.state.squares, obj),
        isXmove: !this.state.isXmove
      });
    }
  }
  renderSquare(i) {
    console.log('rendering square ' + i);
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
      status = <div className="status bg-success"><span className="badge badge-success text-success mr-1">{`Player ${winner}`}</span> Wins!</div>;
      $('.game-board').find('button').attr('disabled','disabled');
    } else {
      status = <div className="status">Next: <span className="badge badge-secondary">{`Player ${this.state.isXmove ? 'X' : 'O'}`}</span></div>;
    }
    return (
      <div>
        {status}
        <div className="game-board">
          <div className="board-row">
            <Square onClick={() => this.handleClick('0')} value={this.state.squares['0']}/>
            <Square onClick={() => this.handleClick('1')} value={this.state.squares['1']}/>
            <Square onClick={() => this.handleClick('2')} value={this.state.squares['2']}/>
          </div>
          <div className="board-row">
            <Square onClick={() => this.handleClick('3')} value={this.state.squares['3']}/>
            <Square onClick={() => this.handleClick('4')} value={this.state.squares['4']}/>
            <Square onClick={() => this.handleClick('5')} value={this.state.squares['5']}/>
          </div>
          <div className="board-row">
            <Square onClick={() => this.handleClick('6')} value={this.state.squares['6']}/>
            <Square onClick={() => this.handleClick('7')} value={this.state.squares['7']}/>
            <Square onClick={() => this.handleClick('8')} value={this.state.squares['8']}/>
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
