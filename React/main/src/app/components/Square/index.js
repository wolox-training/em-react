import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

const Square = props => (
  <button className={style.square} onClick={() => props.onClick()}>
    {props.value}
  </button>
);

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default Square;
