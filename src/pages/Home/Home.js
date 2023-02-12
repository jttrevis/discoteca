import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

import { BackToTopButton } from '../../components/BackToTopButton/BackToTopButton';
import { Hero } from './../../components/Hero/Hero';
import { Contact } from './../../components/Contact/Contact';
import { Gallery } from './../../components/Gallery/Gallery';
import { InVeiwSection } from '../../components/inViewSection/inViewSection';

export const Home = () => {
	return (
		<>
			<Header />

			<InVeiwSection>
				<Hero />
			</InVeiwSection>

			<InVeiwSection>
				<Gallery />
			</InVeiwSection>

			<InVeiwSection>
				<Contact />
			</InVeiwSection>

			<InVeiwSection>
				<Footer />
			</InVeiwSection>
			<BackToTopButton />
		</>
	);
};
