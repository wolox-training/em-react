import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from '~components/Image';

import TextHolder from '~components/TextHolder';

import style from './styles.scss';
import EditProfileForm from './components/EditProfileForm';

class ProfileCard extends Component {
  state = {
    isEditing: false
  };

  onSubmit = () => {
    console.log('here');
  };

  toggleEditing = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  render() {
    const { isEditing } = this.state;
    const { data } = this.props;

    if (isEditing) {
      return <EditProfileForm data={data} onCancel={this.toggleEditing} onSubmit={this.onSubmit} />;
    }

    return (
      <div className={style['profile-card']}>
        <div className={style['profile-pic-container']}>
          <Image src={data.picture} className={style['profile-pic']} alt="Profile Pic" />
        </div>
        <h1 className={style['profile-name']}>{data.name}</h1>
        <div className={style['profile-data']}>
          <TextHolder label="Username" text={data.username} />
          <TextHolder label="Icon" text={data.icon} />
        </div>
        <div className={style['profile-stats']}>
          <TextHolder label="Won" text="-" />
          <TextHolder label="Lost" text="-" />
        </div>
        <div className={style['profile-actions']}>
          <button className={style['action-button']} onClick={this.toggleEditing}>
            Edit Profile
          </button>
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
};

export default ProfileCard;
