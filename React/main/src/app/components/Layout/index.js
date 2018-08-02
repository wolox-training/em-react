import React from 'react';

import Topbar from '~components/Topbar';

import style from './styles.scss';

const Layout = ({ children }) => (
  <div className={style.layout}>
    <Topbar />
    {children}
  </div>
);

export default Layout;
