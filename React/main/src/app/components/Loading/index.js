import React from 'react';

import style from './styles.scss';

const Loading = () => (
  <div className={style.loadingWidget}>
    <div className={style.dots}>
      <div className={style.dot} />
      {/* <div className={style.dot} />
      <div className={style.dot} /> */}
    </div>
    <div className={style.text}>Carganding</div>
  </div>
);

export default Loading;
