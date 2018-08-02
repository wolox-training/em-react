import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

const CustomInput = ({ name, input, label, type, meta, maxLength, defaultValue, className }) => {
  const showingError = meta.error && !meta.active && !meta.pristine;
  input.value = !meta.active && !meta.dirty ? defaultValue : input.value;

  return (
    <div className={[style['custom-input'], className].join(' ')}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input className={style.input} type={type} {...input} name={name} maxLength={maxLength} />
      <div className={showingError ? style['error-message'] : style.hidden}> {meta.error} </div>
    </div>
  );
};

CustomInput.propTypes = {
  name: PropTypes.string,
  input: PropTypes.objectOf(PropTypes.any),
  meta: PropTypes.objectOf(PropTypes.any),
  maxLength: PropTypes.number,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

export default CustomInput;
