import React from 'react';
import { Navbar } from '../NavbarBurguer/Navbar';

import styles from './Header.module.scss';

export const Header = () => {
  return (

    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent} >
          <Navbar />
          <h1>Dj.<span>Beto</span></h1>
        </div>
      </header>
    </>
  );
};
