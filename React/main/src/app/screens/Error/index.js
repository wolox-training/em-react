import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

const Error = ({ errorTitle, errorMessage, retryAction }) => (
  <div className={style['error-page']}>
    <div className={style['error-icon']}> :/ </div>
    <div className={style['error-title']}> {errorTitle || 'Uh-oh!'} </div>
    <div className={style['error-text']}>{`We had a problem talking to the server${
      errorMessage ? `: ${errorMessage}.` : '...'
    }`}</div>
    {retryAction && (
      <button className={style['retry-button']} onClick={retryAction}>
        Try again
      </button>
    )}
  </div>
);

Error.propTypes = {
  errorTitle: PropTypes.string,
  errorMessage: PropTypes.string,
  retryAction: PropTypes.retryAction
};

export default Error;
