import React from 'react';

import Loading from '~components/Loading';

const LoadingPage = component => ({ loaded, ...props }) => {
  const Component = () => component;
  if (loaded) return <Component {...props} />;
  return <Loading />;
};

export default LoadingPage;
