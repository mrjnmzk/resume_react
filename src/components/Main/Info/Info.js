import React from 'react';
import styles from '../Info/Info.module.css';

const Info = () => {
    return (
        <div>
            <h2 className={styles.frontEndDev}>Front-End Developer</h2>
            <h1 className={styles.name}>Marian Muzyka</h1>
            <p className={styles.text}>
                Age: 35 years. I am always ready for new knowledge. I am ready to
                criticize and work on mistakes. I consider myself a responsible
                person. Always ready for teamwork
          </p>
        </div>
    );
};

export default Info;