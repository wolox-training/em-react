import React from 'react';
import PropTypes from 'prop-types';

import Image from '~components/Image';

import TextHolder from '~components/TextHolder';

import style from './styles.scss';

const ProfileCard = ({ data }) => (
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
      <button disabled className={style['edit-profile']}>
        Edit Profile
      </button>
    </div>
  </div>
);

ProfileCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
};

export default ProfileCard;
