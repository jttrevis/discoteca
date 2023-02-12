import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

import { BackToTopButton } from '../../components/BackToTopButton/BackToTopButton';
import { Hero } from './../../components/Hero/Hero';
import { Contact } from '../Contact/Contact';
import { Gallery } from '../Gallery/Gallery';

export const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<Gallery />
			<Contact />
			<BackToTopButton />
			<Footer />
		</>
	);
};
