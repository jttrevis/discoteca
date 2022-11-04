import React from 'react';
import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <div>
      <footer className={styles.footerContainer}>
        <a href="https://www.instagram.com/robertotrevisol/">
          <img src="images/instagram.png" alt="instagram" />
        </a>
        <a href="https://www.facebook.com/roberto.trevisol">
          <img src="images/facebook.png" alt="facebook" />
        </a>
        <a href="https://www.whatsapp.com/">
          <img src="images/whatsapp.png" alt="whatsapp" />
        </a>
      </footer>
      <span>
        <p>Created by Junior Trevisol</p>
      </span>
    </div>
  )



};
