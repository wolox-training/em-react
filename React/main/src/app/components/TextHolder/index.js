import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

const TextHolder = ({ label, text }) => (
  <div className={style['text-holder']}>
    <span className={style['holder-label']}>{label}</span>
    <span className={style['holder-text']}>{text}</span>
  </div>
);

TextHolder.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string
};

export default TextHolder;
