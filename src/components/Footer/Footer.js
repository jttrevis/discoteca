import React from 'react';
import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <div className='name'>
      <footer className={styles.footerContainer}>
        <a href="https://www.instagram.com/robertotrevisol/">
          <img src="images/instagram.png" alt="instagram" />
        </a>
        <a href="https://www.facebook.com/roberto.trevisol">
          <img src="images/facebook.png" alt="facebook" />
        </a>
        <a href="https://wa.me/+5545999462731">
          <img src="images/whatsapp.png" alt="whatsapp" />
        </a>
      </footer>
      <span >
        <p >Created by Junior Trevisol</p>
      </span>
    </div>
  )



};
