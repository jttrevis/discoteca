import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.bgContainer}>

        <main className={styles.mainContainer}>
          <section className={styles.hero}>
            <p>


            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};
