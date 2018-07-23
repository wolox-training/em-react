import React, { Component } from 'react';

import style from './styles.scss';

class Square extends Component {

  state = {
    value: null
  };

  render() {
    return (
      <button className={style.square} onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
