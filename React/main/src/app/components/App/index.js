import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import authActions from '~/../redux/auth/actions';

import Game from '~screens/Game';

import Login from '~screens/Login';

class App extends Component {
  async componentDidMount() {
    await this.props.checkIfLoggedIn();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <Router>
        <Fragment>
          <Route exact path="/">
            <Redirect to={loggedIn ? '/game' : '/login'} />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/game" component={Game} />
        </Fragment>
      </Router>
    );
  }
}

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
