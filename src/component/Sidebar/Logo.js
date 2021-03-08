import React from 'react';
import logo from './FISH-X-logo.png';
import styles from './logo.module.less';

export default () => (
  <div className={styles.wrapper}>
    <img className={styles.img} src={logo} alt="logo" />
    <h1 className={styles.name}>FishX</h1>
  </div>
);
