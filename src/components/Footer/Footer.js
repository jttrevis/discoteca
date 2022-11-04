import React from 'react';
import styles from './Footer.module.scss';
export const Footer = () => {
  return (

    <footer className={styles.footerContainer}>
      <a href="https://www.instagram.com/">
        <img src="images/instagram.png" alt="instagram" />
      </a>
      <a href="https://www.facebook.com/">
        <img src="images/facebook.png" alt="facebook" />
      </a>
      <a href="https://www.whatsapp.com/">
        <img src="images/whatsapp.png" alt="whatsapp" />
      </a>
    </footer>
  )



};
