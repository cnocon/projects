import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h2>Tic Tac Toe</h2>
          <p>Based on the Tic Tac Toe application created in <a href="https://reactjs.org/tutorial/tutorial.html">Facebook's React Tutorial</a>.</p>
        </header>
        <div className="container"><Game /></div>
        <footer>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Technologies
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">ReactJS</a>
              <a className="dropdown-item" href="#">Node + Webpack</a>
              <a className="dropdown-item" href="#">Bootstrap</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}












