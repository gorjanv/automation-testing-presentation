import React, { Component } from 'react';
import SignIn from './components/SignIn';
import Constructor from './components/Constructor';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { authorized: false };

    this.authorizationHandler = this.authorizationHandler.bind(this);
    this.signOutHandler = this.signOutHandler.bind(this);
  }

  authorizationHandler(isAuthorized) {
    this.setState(() => ({ authorized: isAuthorized }));
  }

  signOutHandler() {
    this.setState(() => ({ authorized: false }));
  }

  render() {
    const { authorized } = this.state;
    return authorized
    ? (
      <Constructor onSignOut={this.signOutHandler} />
    )
    : (
      <SignIn onAuthorization={this.authorizationHandler} />
    );
  }
}

export default App;