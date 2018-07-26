import React, { Component } from 'react';

import style from './styles.scss';
import LoginForm from './components/LoginForm';

class Login extends Component {
  attemptLogin = values => {
    console.log(values);
  };

  render() {
    return (
      <div className={style['login-page']}>
        <LoginForm onSubmit={this.attemptLogin} />
      </div>
    );
  }
}

export default Login;
