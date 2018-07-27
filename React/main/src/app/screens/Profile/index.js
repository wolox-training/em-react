import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextHolder from './components/TextHolder';

const Profile = ({ userData }) => (
  <div>
    <h1>{userData.name}</h1>
    <TextHolder label="Username" text={userData.username} />
    <TextHolder label="Icon" text={userData.username} />
    <div>
      <button>Edit Profile</button>
    </div>
  </div>
);

Profile.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = state => ({
  userData: state.user
});

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Profile);
