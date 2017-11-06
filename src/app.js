import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
// import Button from './bootstrap/button';
// import Jumbotron from './bootstrap/jumbotron';
import './app.scss';
const messages = ['React', 'Re: React', 'Re:Re: React'];

function UserGreeting(props) {
  return <h1 className="float-left font-weight-light">Welcome</h1>;
}

function GuestGreeting(props) {
  return <h1 className="float-left font-weight-light">Please Log In</h1>;
}

function Greeting(props) {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

function LoginButton(props) {
  return <button {...props}>Log In</button>;
}

function LogoutButton(props) {
  return <button {...props}>Log Out</button>;
}
// In the example below, we will create a stateful component called LoginControl. It will render either <LoginButton /> or <LogoutButton /> depending on its current state. It will also render a <Greeting /> from the previous example:
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} className="btn btn-outline-danger ml-2 btn-lg"/>;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} className="btn btn-primary ml-2 btn-lg"/>;
    }
    return (
      <div className="card mx-auto mt-4 w-75">
        <div className="card-header">
          <Greeting isLoggedIn={isLoggedIn}/>
          <div className="float-right">{button}</div>
        </div>
        {isLoggedIn &&
          <div className="card-body mt-4">
            {messages.length > 0 &&
              <div className="card-text text-center">
                <p className="h3 font-weight-normal">You have {messages.length} unread messages.</p>
                <button className="btn btn-primary btn-lg mt-4 mb-4">View Mailbox</button>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}



export class App extends React.Component {
  render() {
    return (
      <div className="container">

          <LoginControl />

      </div>
    )
  }
}
