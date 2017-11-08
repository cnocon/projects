import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';
import '../app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <Game />
          <Footer />
        </div>
      </div>
    )
  }
}

function Footer() {
  return (
    <div className="card-footer clearfix">
      <div className="technologies">
        <h5>Technologies Used</h5>
        <ul className="list-inline">
          <li className="badge badge-warning badge-pill">ReactJS</li>
          <li className="badge badge-warning badge-pill">Node + Webpack</li>
          <li className="badge badge-warning badge-pill">Bootstrap</li>
        </ul>
      </div>
      <div className="credit">
        <p>Based on the Tic Tac Toe application created in <a href="https://reactjs.org/tutorial/tutorial.html">Facebook's React Tutorial</a>.</p>
      </div>
    </div>
  )
}
