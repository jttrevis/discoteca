import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { BackToTopButton } from '../../components/BackToTopButton/BackToTopButton';

export const Home = () => {
	return (
		<>
			<Header />
			<div className={styles.bgContainer}>
				<main className={styles.mainContainer}>
					<section className={styles.hero}>
						<p className={styles.textContent}>Os</p>
						<p className={styles.textContent}>
							<span>Melhores</span>
						</p>
						<p className={styles.textContent}>Momentos</p>
					</section>
					<section className={styles.hero}>
						<p className={styles.textContent2}>Você</p>
						<p className={styles.textContent2}>Só Encontra</p>
						<Link
							to='/gallery'
							className={styles.textContent2}
						>
							<button>Aqui</button>
						</Link>
					</section>
				</main>
			</div>
			<BackToTopButton />
			<Footer />
		</>
	);
};
