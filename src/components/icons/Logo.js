import React from 'react';

import styles from '../../styles/icons.module.scss';

const Logo = () => (
    // original icon size: 1500x1500
    <svg viewBox="0 0 1600 1600" className={styles.logo} xmlns="http://www.w3.org/2000/svg">
        <g id={styles.shadow} transform="translate(100.0, 80.0)" fill="none" fillRule="evenodd">
            {/* <path id="background" fill="#86D3C4" d="M0 0h1500v1500H0z"/> */}
            <g strokeWidth="50">
                <path d="M60 850.591l358.564-449.414 184.308 231.006"/>
                <path d="M418.564 850.591L928.83 231.5l510.264 619.091"/>
            </g>
            <g strokeWidth="50">
                <path d="M60 851.634l254.185 228.036m660.613 188.818l464.656-416.854"/>
                <path d="M312.834 1078.323H696.68M710.472 1266.197h266.625" strokeLinecap="round"/>
            </g>
            <path d="M60 851h1379" strokeWidth="50" strokeLinecap="round"/>
        </g>
        <g id={styles.icon} fill="none" fillRule="evenodd">
            {/* <path id="background" fill="#86D3C4" d="M0 0h1500v1500H0z"/> */}
            <g strokeWidth="50">
                <path d="M60 850.591l358.564-449.414 184.308 231.006"/>
                <path d="M418.564 850.591L928.83 231.5l510.264 619.091"/>
            </g>
            <g strokeWidth="50">
                <path d="M60 851.634l254.185 228.036m660.613 188.818l464.656-416.854"/>
                <path d="M312.834 1078.323H696.68M710.472 1266.197h266.625" strokeLinecap="round"/>
            </g>
            <path d="M60 851h1379" strokeWidth="50" strokeLinecap="round"/>
        </g>
    </svg>
);

export default Logo;
