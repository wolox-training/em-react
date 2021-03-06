import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

const Square = ({ onClick, value }) => (
  <button className={style.square} onClick={onClick}>
    {value}
  </button>
);

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Square;
