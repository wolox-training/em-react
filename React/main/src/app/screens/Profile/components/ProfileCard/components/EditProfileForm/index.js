import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import CustomInput from '~components/CustomInput';

import { isIcon, maxLength } from '~/../global/validations';

import style from './styles.scss';

const EditProfileForm = props => {
  const { onCancel } = props;

  return (
    <form className={style['profile-card']} onSubmit={props.handleSubmit}>
      <div className={style['profile-form']}>
        <Field name="name" label="Name" component={CustomInput} validate={[maxLength]} />
        <Field
          name="icon"
          label="Icon"
          component={CustomInput}
          validate={[isIcon]}
          maxLength={2}
          className={style.iconInput}
        />
      </div>
      <div className={style['profile-actions']}>
        <button className={style['action-button']} onClick={onCancel}>
          Cancel
        </button>
        <button className={style['action-button']} type="submit">
          Save Info
        </button>
      </div>
    </form>
  );
};

EditProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  valid: PropTypes.bool,
  data: PropTypes.objectOf(PropTypes.any)
};

export default reduxForm({
  form: 'editProfile'
})(EditProfileForm);
