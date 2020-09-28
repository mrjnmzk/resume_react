import React from 'react';
import styles from '../Project/Projects.module.css';

const Projects = () => {
    return (
        <div>
            <h3 className={styles.projectsTitle}>Projects</h3>
            <ol>
                <li className={styles.pojectsMumeric}>
                    <a
                        className={styles.linkProjects}
                        href="https://petershevchuk.github.io/html-css-project/build/"
                    >GO ITeens
              </a>
                    <span className={styles.pojectsSymbols}>..............</span>
                    <span>[</span>
                    <span className={styles.pojectsTech}>HTML5, CSS3</span>
                    <span>]</span>
                </li>
                <li className={styles.pojectsMumeric}>
                    <a
                        className={styles.linkProjects}
                        href="https://andriymakohin.github.io/filmoteka/build/"
                    >Filmoteka
              </a>
                    <span className={styles.pojectsSymbols}>....................</span>
                    <span>[</span>
                    <span className={styles.pojectsTech}>JavaScript</span>
                    <span>]</span>
                </li>
                <li className={styles.pojectsMumeric}>
                    <a
                        className={styles.linkProjects}
                        href="https://app-finance.netlify.app/registration"
                    >Finance-App</a>
                    <span className={styles.pojectsSymbols}>...................</span>
                    <span>[</span>
                    <span className={styles.pojectsTech}>React.js</span>
                    <span>]</span>
                </li>
            </ol>
        </div>
    );
};

export default Projects;