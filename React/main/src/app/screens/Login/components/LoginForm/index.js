import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import CustomInput from '~components/CustomInput';

import { emailOK, minLength } from '~/../global/validations';

import style from './styles.scss';

// Somehow the onSubmit received from the parent is mapped to the handleSubmit... What?!

const LoginForm = props => {
  const { valid } = props;
  return (
    <form className={style['login-form']} onSubmit={props.handleSubmit}>
      <Field
        name="username"
        label="Username"
        component={CustomInput}
        type="text"
        validate={[emailOK, minLength]}
      />
      <Field
        name="password"
        label="Password"
        component={CustomInput}
        type="password"
        validate={[minLength]}
      />
      <button className={valid ? style['submit-button'] : style['disabled-submit-button']} type="submit">
        Log In!
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(LoginForm);
