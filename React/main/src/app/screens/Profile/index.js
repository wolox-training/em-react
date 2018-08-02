import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import userActions from '~/../redux/users/actions';

import LoadingPage from '~components/LoadingPage';

import style from './styles.scss';
import ProfileCard from './components/ProfileCard';

class Profile extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { userData, userDataError, userDataLoading } = this.props.userData;

    const ProfileHandler = LoadingPage(
      <div className={style['profile-page']}>
        <ProfileCard data={userData} />
      </div>
    );

    return <ProfileHandler loaded={!userDataLoading} error={userDataError} />;
  }
}

Profile.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any),
  getUserData: PropTypes.func
};

const mapStateToProps = state => ({
  userData: state.user
});

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(userActions.getUserData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
