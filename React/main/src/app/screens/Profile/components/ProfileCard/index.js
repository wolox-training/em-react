import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { maxLength, isIcon } from '~/../global/validations';

import Image from '~components/Image';

import TextHolder from '~components/TextHolder';

import CustomInput from '~components/CustomInput';

import style from './styles.scss';

class ProfileCard extends Component {
  state = {
    isEditing: false
  };

  toggleEditing = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  submit = () => {
    console.log('here');
  };

  render() {
    const { isEditing } = this.state;
    const { data, ...props } = this.props;

    if (isEditing) {
      return (
        <form className={style['profile-card']} onSubmit={props.handleSubmit}>
          <div className={style['profile-form']}>
            <Field
              name="name"
              label="Name"
              component={CustomInput}
              type="text"
              validate={[maxLength]}
              defaultValue={data.name}
            />
            <Field
              name="icon"
              label="Icon"
              component={CustomInput}
              validate={[isIcon]}
              defaultValue={data.icon}
              maxLength={2}
              className={style.iconInput}
            />
          </div>
          <div className={style['profile-actions']}>
            <button className={style['action-button']} onClick={this.toggleEditing}>
              Cancel
            </button>
            <button className={style['action-button']} onClick={this.handleSubmit} type="submit">
              Save Info
            </button>
          </div>
        </form>
      );
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
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.any)
};

export default reduxForm({
  form: 'profile'
})(ProfileCard);
