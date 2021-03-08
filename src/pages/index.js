import React from 'react';
import { i18n } from '@fishx/i18n';
import Pic from '@/assets/imgs/pic.png';
import styles from './css/style.module.less';

const Welcome = () => (
  <div className="bg-white">
    <div className="bg-white">
      <div className={styles.welcome}>
        <div className={styles.txt}>
          <div className={styles['middle-item']}>
            <b className={styles['middle-item-hack']} />
            <div className={styles['middle-item-body']}>
              <h1>{i18n('HELLO_GREETING')}</h1>
              <h2>FishX-desktop</h2>
            </div>
          </div>
        </div>
        <div className={styles.pic}>
          <div className={styles['middle-item']}>
            <b className={styles['middle-item-hack']} />
            <div className={styles['middle-item-body']}>
              <div className={styles['middle-item-img']}>
                <img src={Pic} width="400" height="306" alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
