import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authActions from '~/../redux/auth/actions';

import style from './styles.scss';
import LoginForm from './components/LoginForm';

class Login extends Component {
  attemptLogin = values => {
    this.props.login(values);
  };

  render() {
    const { loginError } = this.props;
    return (
      <div className={style['login-page']}>
        <LoginForm onSubmit={this.attemptLogin} />
        <div className={loginError ? style['login-error'] : style['login-error-hidden']}>
          <p>{loginError}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  loginError: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(authActions.logIn(values))
});

Login.propTypes = {
  login: PropTypes.func,
  loginError: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
