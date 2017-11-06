import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
// import Button from './bootstrap/button';
// import Jumbotron from './bootstrap/jumbotron';
import './app.scss';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign in.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Greeting isLoggedIn={true} />
        </div>
      </div>
    )
  }
}
