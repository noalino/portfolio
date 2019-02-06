import React from 'react';
import styles from '../../../styles/icons.module.scss';

const DesignIcon = () => (
  <svg viewBox="0 0 64 64" id="design" className={styles.skill_icon}>
    {/* Tools inside screen */}
    <path className={styles.custom} d="M51,23H42a1,1,0,0,0-1,1V39H33V37h4V35H27v2h4v2H23V33c0-.014-.007-.025-.008-.039a1,1,0,0,0-.061-.3c-.009-.022-.014-.044-.023-.066s-.007-.025-.013-.037L19,24.764V23a1,1,0,0,0-2,0v1.764l-3.895,7.789c-.006.012-.007.025-.013.037s-.014.044-.023.066a1,1,0,0,0-.061.3c0,.014-.008.025-.008.039v7a1,1,0,0,0,1,1H51a1,1,0,0,0,1-1V24A1,1,0,0,0,51,23ZM18,27.236,20.382,32H15.618ZM21,39H15V34h6Zm29,0H43V37h2V35H43V33h4V31H43V29h2V27H43V25h7Z"/>
    {/* Screen & pencil */}
    <path d="M9,46v4a5.006,5.006,0,0,0,5,5H26.674l-1.635,5.725A1,1,0,0,0,26,62H38a1,1,0,0,0,.961-1.275L37.326,55H51a5.006,5.006,0,0,0,5-5V21a5.006,5.006,0,0,0-5-5H39.659l.26-.606a1,1,0,0,0-.055-.9l-7-12a1.041,1.041,0,0,0-1.728,0l-7,12a1,1,0,0,0-.055.9l.26.606H14a5.006,5.006,0,0,0-5,5ZM27.326,60l1.428-5h6.492l1.428,5ZM32,4.985l5.882,10.084L35.341,21H33V17.816a3,3,0,1,0-2,0V21H28.659l-2.541-5.931ZM29,25V23h6v2Zm6,2v4H29V27ZM31,15a1,1,0,1,1,1,1A1,1,0,0,1,31,15ZM11,21a3,3,0,0,1,3-3H25.2l1.8,4.2V32a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1v-9.8L38.8,18H51a3,3,0,0,1,3,3V45H11Zm0,26H54v3a3,3,0,0,1-3,3H14a3,3,0,0,1-3-3Z"/>
    {/* Brand icon (bottom square) */}
    <rect height="2" width="2" x="31" y="49"/>
    {/* Top 4 squares */}
    <rect height="2" width="2" x="9" y="12"/>
    <rect height="2" width="2" x="13" y="12"/>
    <rect height="2" width="2" x="17" y="12"/>
    <rect height="2" width="2" x="21" y="12"/>
    {/* Top-right rectangle */}
    <rect height="2" width="14" x="41" y="12"/>
  </svg>
);

export default DesignIcon;
