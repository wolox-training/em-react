import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import style from './styles.scss';
import LoginForm from './components/LoginForm';

class Login extends Component {
  attemptLogin = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="login-page">
        <LoginForm onSubmit={this.attemptLogin} />
      </div>
    );
  }
}

export default Login;
