import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

const CustomInput = ({ name, input, label, type, meta }) => {
  const showingError = meta.error && !meta.active && !meta.pristine;
  return (
    <div className={style['custom-input']}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input className={style.input} type={type} {...input} name={name} />
      <div className={showingError ? style['error-message'] : style.hidden}> {meta.error} </div>
    </div>
  );
};

CustomInput.propTypes = {
  name: PropTypes.string,
  input: PropTypes.objectOf(PropTypes.any),
  meta: PropTypes.objectOf(PropTypes.any),
  label: PropTypes.string,
  type: PropTypes.string
};

export default CustomInput;
