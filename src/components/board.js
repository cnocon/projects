import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @Board (default)
 *
 * Contains the game squares. It communicates the values of it's squares via Gane state inherited as props from Game.
 */
export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <table className="table table-bordered table-responsive-sm"><tbody>
        <tr>
          <td>{this.renderSquare(0)}</td>
          <td>{this.renderSquare(1)}</td>
          <td>{this.renderSquare(2)}</td>
        </tr>

        <tr>
          <td>{this.renderSquare(3)}</td>
          <td>{this.renderSquare(4)}</td>
          <td>{this.renderSquare(5)}</td>
        </tr>
        <tr>
          <td>{this.renderSquare(6)}</td>
          <td>{this.renderSquare(7)}</td>
          <td>{this.renderSquare(8)}</td>
        </tr>
      </tbody></table>
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
    <button className="btn btn-light p-0" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
