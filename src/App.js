import React from 'react';
import './App.css';
import styles from './components/Main/AboutMe/AboutMe.module.css';
import SideBar from './components/SideBar/SideBar.js';
import Info from './components/Main/Info/Info';
import Projects from './components/Project/Projects';
import Work from './components/Work/Work.js';

function App() {
  return (
    <div className="App">
      <div className="Body">
        <div className={styles.all}>
          <SideBar />
          <div className={styles.aboutMe}>
            <Info />
            <Projects />
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
