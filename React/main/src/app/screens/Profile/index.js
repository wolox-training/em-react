import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import userActions from '~/../redux/users/actions';

import style from './styles.scss';
import ProfileCard from './components/ProfileCard';

class Profile extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { userData } = this.props;
    return (
      <div className={style['profile-page']}>
        <ProfileCard data={userData} />
      </div>
    );
  }
}

Profile.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any),
  getUserData: PropTypes.func
};

const mapStateToProps = state => ({
  userData: state.user.userData
});

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(userActions.getUserData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
