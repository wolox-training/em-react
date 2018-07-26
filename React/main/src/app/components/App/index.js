import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Game from '~screens/Game';

import Login from '~screens/Login';

class App extends Component {
  async componentDidMount() {
    await this.checkLoggedInStatus();
  }

  checkLoggedInStatus = () => true;

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
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(App);
