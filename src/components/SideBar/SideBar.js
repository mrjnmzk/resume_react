import React from 'react';
import styles from '../SideBar/SideBar.module.css';



const SideBar = () => {
    return (
        <aside className={styles.side_bar}>
            <div className={styles.img} />
            {/* <!-- Contacts container --> */}
            <div className={styles.contacts}>
                <h3 className={styles.contactsTitle}>Contacts</h3>
                <div>
                    <span className={styles.wordLink}>C:</span>
                    <a className={styles.contactsLink} href="tel:380972810427"
                    >+380 97 281 04 27</a
                    >
                </div>
                <div>
                    <span className={styles.wordLink}>E:</span>
                    <a className={styles.contactsLink} href="mailto:mrjnmzk@gmail.com"
                    >mrjnmzk@gmail.com</a>
                </div>
            </div>
            {/* <!-- Tech skills container --> */}
            <div className={styles.techSkills}>
                <h3 className={styles.techSkillsTitle}>Tech Skills</h3>
                <ul>
                    <li className={styles.techSkillsItem}>
                        <span className={styles.techSkillText}>HTML5</span>
                    </li>
                    <li className={styles.techSkillsItem}>
                        <span className={styles.techSkillText}>CSS3</span>
                    </li>
                    <li className={styles.techSkillsItem}>
                        <span className={styles.techSkillText}>Version Control/Git</span>
                    </li>
                    <li className={styles.techSkillsItem}>
                        <span className={styles.techSkillText}>WebPack</span>
                    </li>
                    <li className={styles.techSkillsItem}>
                        <span className={styles.techSkillText}>JavaScript</span>
                    </li>
                    <li className={styles.techSkillsItem}>
                        <span className={styles.techSkillText}>React.js</span>
                    </li>
                    {/* <!-- <li className={styles.techSkillsItem}>
                        <span className={styles.techSkillText}>Node.js</span>
                    </li> --> */}
                </ul>
            </div>
            {/* <!-- Soft skills container --> */}
            <div>
                <h3 className={styles.softSkillsTitle}>Soft Skills</h3>
                <ul>
                    <li className={styles.softSkillItem}>
                        <span className={styles.softSkillsText}>Scrum</span>
                    </li>
                    <li className={styles.softSkillItem}>
                        <span className={styles.softSkillsText}>Work ethic</span>
                    </li>
                    <li className={styles.softSkillItem}>
                        <span className={styles.softSkillsText}>Adaptability</span>
                    </li>
                    <li className={styles.softSkillItem}>
                        <span className={styles.softSkillsText}>Teamwork</span>
                    </li>
                    <li className={styles.softSkillItem}>
                        <span className={styles.softSkillsText}>Critical thinking</span>
                    </li>
                    <li className={styles.softSkillItem}>
                        <span className={styles.softSkillsText}>Conflict resolution</span>
                    </li>
                </ul>
            </div>
        </aside >
    );
};

export default SideBar;