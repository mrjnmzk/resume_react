import React from 'react';
import styles from '../Work/Work.module.css';

const Work = () => {
    return (
        <div>
            <h3 className={styles.workExperience}>Work Experience</h3>

            <div>
                <h4 className={styles.entrepreneurFreelance}>
                    <span>Entrepreneur</span> <span className={styles.orange}>Freelance</span>
                </h4>
                <span className={styles.workTime}>December 2019 - up to now</span>
                <span className={styles.colum}>|</span> <span className={styles.workTime}>Ukraine</span>
                <ul>
                    <li className={styles.workFunction}>
                        <span>Real estate operations</span>
                    </li>
                    <li className={styles.workFunction}>
                        <span>Development and conclusion of leases</span>
                    </li>
                    <li className={styles.workFunction}>
                        <span>Тegotiations with potential customers</span>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className={styles.managerTitle}>
                    <span>Manager</span> <span className={styles.orange}>"Inmax"</span>
                </h4>
                <span className={styles.workTime}>September 2008 - December 2019</span>
                <span className={styles.colum}>|</span> <span className={styles.workTime}>Ukraine</span>
                <ul>
                    <li className={styles.workFunction}>
                        <span
                        >Picks up the necessary information to expand external
                            connections.
                  </span>
                    </li>
                    <li className={styles.workFunction}>
                        <span>
                            Ensures timely fulfillment of obligations to
                            counterparties
                  </span>
                    </li>
                    <li className={styles.workFunction}>
                        <span>Organizes relationships with business partners</span>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className={styles.managerTitle}>
                    <span>Manager</span> <span className={styles.orange}>"Fozzy Food"</span>
                </h4>
                <span className={styles.workTime}>January 2005 - September 2008</span>
                <span className={styles.colum}>|</span> <span className={styles.workTime}>Ukraine</span>
                <ul>
                    <li className={styles.workFunction}>
                        <span>Ensuring the supply of products</span>
                    </li>
                    <li className={styles.workFunction}>
                        <span>Organization of marketing activities</span>
                    </li>
                    <li className={styles.workFunction}>
                        <span>Сonducting marketing research</span>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className={styles.educationTitle}>Education</h3>
                <div>
                    <h4 className={styles.study}>GOIT Academy</h4>
                    <h5 className={styles.study2}>Full Stack Development</h5>
                    <span className={styles.workTime}>May 2020 - up to now</span>
                    <span className={styles.colum}>|</span>
                    <span className={styles.workTime}>Ukraine</span>
                </div>
                <h4 className={styles.study}>Lviv academy of finance</h4>
                <h5 className={styles.study2}>Economic</h5>
                <span className={styles.workTime}>September 2002 - June 2007</span>
                <span className={styles.colum}>|</span> <span class="work-time">Ukraine</span>
            </div>
        </div>
    );
};

export default Work;