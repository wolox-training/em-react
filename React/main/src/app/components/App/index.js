import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
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
          <Route
            exact
            path="/"
            render={() => (loggedIn ? <Redirect to="/game" /> : <Redirect to="/login" />)}
          />
          <Route exact path="/login" render={() => (loggedIn ? <Redirect to="/game" /> : <Login />)} />
          {/* <ProtectedRoute path="/profile" allowed={loggedIn} component={Profile} /> */}
          <Route path="/profile" render={() => <Page page={Profile} />} />
          <Route path="/game" render={() => <Page page={Game} />} />
        </Fragment>
      </Router>
    );
  }
}

const Page = ({ page: Page }) => (
  <Layout>
    <Page />
  </Layout>
);

const ProtectedRoute = _props => {
  const { component: CustomComponent, allowed, ...props } = _props;
  return <Route {...props} render={() => (allowed ? <CustomComponent /> : <Redirect to="/login" />)} />;
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  checkIfLoggedIn: PropTypes.func
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
