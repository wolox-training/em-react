import React from 'react';

import Loading from '~components/Loading';

import Error from '../../screens/Error';

const LoadingPage = component => ({ loaded, error, onError, ...props }) => {
  const Component = () => component;
  if (error) return <Error errorMessage={error} retryAction={onError} />;
  if (loaded) return <Component {...props} />;
  return <Loading />;
};

export default LoadingPage;
