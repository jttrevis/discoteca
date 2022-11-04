import React from 'react';
import { Navbar } from '../NavbarBurguer/Navbar';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (

    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent} >
          <Navbar />
          <Link to="/home">Dj.<span>Beto</span></Link>
        </div>
      </header>
      <iframe src="https://open.spotify.com/embed/playlist/0PG9UGqQ4bc7kYbxdyZxiq?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </>
  );
};
