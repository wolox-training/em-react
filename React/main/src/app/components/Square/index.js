import React, { Component } from 'react';

import style from './styles.scss';

class Square extends Component {
  render() {
    return (
      <button className={style.square}>
        { this.props.value }
      </button>
    );
  }
}

export default Square;
