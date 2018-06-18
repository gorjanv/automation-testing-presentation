import React, { Component } from 'react';
import {
  FormWrapper,
  Form,
  FormGroup,
} from './helper-components';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password:'',
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.userNameChangeHandler = this.userNameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
  }

  submitHandler() {
    const { onAuthorization } = this.props;
    const { userName, password } = this.state;

    fetch('api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName, password }),
    })
    .then(response => response.json())
    .then(data => {
      const { authorized } = data;
      onAuthorization(authorized);
    });
  }

  userNameChangeHandler({ target }) {
    this.setState(() => ({ userName: target.value }));
  }

  passwordChangeHandler({ target }) {
    this.setState(() => ({ password: target.value }));
  }

  render() {
    const { userName, password } = this.state;
    return (
      <FormWrapper>
        <Form>
          <FormGroup>
            <label for="user-name">User name:</label>
            <input
              id="user-name"
              type="text"
              onChange={this.userNameChangeHandler}
              value={userName}
            />
          </FormGroup>
          <FormGroup>
            <label for="password">Password:</label>
            <input
              id="password"
              type="password"
              onChange={this.passwordChangeHandler}
              value={password}
            />
          </FormGroup>
          <div>
            <input id="submit" type="button" value="Sign in" onClick={this.submitHandler}/>
          </div>
        </Form>
      </FormWrapper>
    );
  }
};

export default SignIn;