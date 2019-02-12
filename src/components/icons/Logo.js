import React from 'react';

import styles from '../../styles/icons.module.scss';

const Logo = () => (
    // original size: width="1429" height="1100" (ratio 1.3)
    <svg viewBox="0 0 1489 1160" className={styles.logo} xmlns="http://www.w3.org/2000/svg">
        <g id={styles.shadow} transform="translate(60.0, 60.0)" strokeWidth="50" fill="none" fillRule="evenodd">
            <path d="M25 658.591l358.564-449.414 184.308 231.006"/>
            <path d="M383.564 658.591L893.83 39.5l510.264 619.091M25 659.634L279.185 887.67m660.613 188.818l464.656-416.854"/>
            <path d="M277.834 886.323H661.68M675.472 1074.197h266.625M25 659h1379" strokeLinecap="round"/>
        </g>
        <g id={styles.icon} strokeWidth="50" fill="none" fillRule="evenodd">
            <path d="M25 658.591l358.564-449.414 184.308 231.006"/>
            <path d="M383.564 658.591L893.83 39.5l510.264 619.091M25 659.634L279.185 887.67m660.613 188.818l464.656-416.854"/>
            <path d="M277.834 886.323H661.68M675.472 1074.197h266.625M25 659h1379" strokeLinecap="round"/>
        </g>
    </svg>
);

export default Logo;
