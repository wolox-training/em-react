import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authActions from '~/../redux/auth/actions';

import style from './styles.scss';
import LoginForm from './components/LoginForm';

class Login extends Component {
  attemptLogin = values => {
    this.props.authActions.logIn(values);
  };

  render() {
    return (
      <div className={style['login-page']}>
        <LoginForm onSubmit={this.attemptLogin} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
});

Login.propTypes = {
  authActions: PropTypes.objectOf(PropTypes.any)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
