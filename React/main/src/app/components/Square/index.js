import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

class Square extends Component {
  render() {
    return (
      <button className={style.square} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default Square;
