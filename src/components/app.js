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
          <div className="card-footer">
            <div className="w-75 float-left">
              <h5 className="d-inline-block">Technologies Used</h5>
              <ul className="list-inline">
                <li className="badge badge-warning badge-pill">ReactJS</li>
                <li className="badge badge-warning badge-pill">Node + Webpack</li>
                <li className="badge badge-warning badge-pill">Bootstrap</li>
              </ul>
            </div>
            <div style={{fontSize: '10px'}} className="w-25 text-muted font-weight-light float-right font-italic">Based on the Tic Tac Toe application created in <a href="https://reactjs.org/tutorial/tutorial.html">Facebook's React Tutorial</a>.</div>
          </div>
        </div>
      </div>
    )
  }
}











