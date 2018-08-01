import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

class Image extends Component {
  state = {
    isLoading: true,
    hasErrored: false
  };

  onLoad = () => {
    this.setState({ isLoading: false, hasErrored: false }, () => console.log('here'));
  };

  onError = () => {
    this.setState({ isLoading: false, hasErrored: true });
  };

  classes = (() => {
    const inheritedClassses = this.props.className || null;
    return [
      style.image,
      inheritedClassses,
      this.state.isLoading ? style.loading : '',
      this.state.hasErrored ? style.hasError : ''
    ];
  })();

  render() {
    const { alt, src, className, ...props } = this.props;
    return (
      <img
        {...props}
        src={src}
        alt={alt}
        className={[
          style.image,
          className,
          this.state.isLoading ? style.loading : '',
          this.state.hasErrored ? style.hasError : ''
        ].join(' ')}
        onLoad={this.onLoad}
        onError={this.onError}
      />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

export default Image;
