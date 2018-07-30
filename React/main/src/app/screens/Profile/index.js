import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './styles.scss';
import ProfileCard from './components/ProfileCard';

const Profile = ({ userData }) => (
  <div className={style['profile-page']}>
    <ProfileCard data={userData} />
  </div>
);

Profile.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = state => ({
  userData: state.user
});

export default connect(mapStateToProps)(Profile);
