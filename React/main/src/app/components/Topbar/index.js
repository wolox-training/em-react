import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authActions from '~/../redux/auth/actions';

import style from './styles.scss';

class Topbar extends Component {
  state = {
    menuIsCollapsed: true
  };

  componentDidMount() {
    window.addEventListener('click', this.handleClickEvent);
  }

  toggleMenu = () => {
    this.setState({ menuIsCollapsed: !this.state.menuIsCollapsed });
  };

  handleClickEvent = () => {};

  menuClasses = () =>
    [style['user-menu'], this.state.menuIsCollapsed ? style['user-menu-collapsed'] : null].join(' ');

  render() {
    const { username, logout } = this.props;
    return (
      <nav className={style.topbar}>
        <h1 className={style['app-title']}>
          <NavLink to="/game">Tic Tac Toe!</NavLink>
        </h1>
        <div role="button" className={style['user-name']} onClick={this.toggleMenu} tabIndex={0}>
          {username}
        </div>
        <div className={this.menuClasses()}>
          <div role="button" tabIndex={0}>
            <NavLink to="/profile"> Edit Profile </NavLink>
          </div>
          <div role="button" className={style.logout} onClick={logout} tabIndex={0}>
            Log out
          </div>
        </div>
      </nav>
    );
  }
}

Topbar.propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  username: `${state.user.name} - ${state.user.icon}`
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authActions.logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar);
