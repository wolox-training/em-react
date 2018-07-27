import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import authActions from '~/../redux/auth/actions';

import Layout from '~components/Layout';

import Game from '~screens/Game';

import Login from '~screens/Login';

import Profile from '~screens/Profile';

class App extends Component {
  async componentDidMount() {
    await this.props.checkIfLoggedIn();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <Router>
        <Fragment>
          <ProtectedRoute exact path="/" allowed={loggedIn} component={Game} />
          <Route path="/login" render={() => (loggedIn ? <Redirect to="/game" /> : <Login />)} />
          <ProtectedRoute path="/game" allowed={loggedIn} component={Game} />
          <ProtectedRoute path="/profile" allowed={loggedIn} component={Profile} />
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  checkIfLoggedIn: PropTypes.func
};

const Page = ({ content: Content }) => (
  <Layout>
    <Content />
  </Layout>
);

Page.propTypes = {
  content: PropTypes.func
};

const ProtectedRoute = _props => {
  const { component, allowed, ...props } = _props;
  return (
    <Route {...props} render={() => (allowed ? <Page content={component} /> : <Redirect to="/login" />)} />
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  checkIfLoggedIn: () => dispatch(authActions.checkLoginStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
