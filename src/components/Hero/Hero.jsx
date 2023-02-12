// import React from 'react';
// import { Link } from 'react-router-dom';
// export const Hero = () => {
// 	return (
// 		<div className='flex  items-center justify-center '>
// 			<main className='flex h-screen gap-3 text-center  flex-col items-center justify-center'>
// 				<section className='flex justify-center items-center text-[3rem] gap-3'>
// 					<p className='p-4'>Os</p>
// 					<p className=''>
// 						<span className=''>Melhores</span>
// 					</p>
// 					<p className=''>Momentos</p>
// 				</section>
// 				<section className='text-[2rem] '>
// 					<p className=''>Você</p>
// 					<p className=''>Só Encontra</p>
// 					<Link to='/gallery'>
// 						<button className='text-[1.5rem] bg-red-700 rounded-md w-full p-4'>
// 							Aqui
// 						</button>
// 					</Link>
// 				</section>
// 			</main>
// 		</div>
// 	);
// };

import { Link } from 'react-router-dom';
import heroImage from '../../../src/assets/images/dj.jpg';
import './styles.css';

export const Hero = () => {
	return (
		<div className='relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0'>
			<div className='inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0'>
				<svg
					className='absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block'
					viewBox='0 0 100 100'
					fill='currentColor'
				>
					<path d='M50 0H100L50 100H0L50 0Z' />
				</svg>
				<img
					className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full'
					src={heroImage}
					alt=''
				/>
			</div>
			<div className='relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-2xl'>
				<div className='mb-16 lg:my-40 lg:max-w-lg lg:pr-5'>
					<p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400'>
						Junte-se a nós!
					</p>
					<h2 className='mb-5 overflow-y-hidden font-sans h-full text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none'>
						Não perca a chance de se divertir como{' '}
						<span className='text-5xl text-red-600 '>nunca</span> antes.
					</h2>
					<p className='pr-5 mb-5 text-base text-gray-300 md:text-lg'>
						Mergulhe no melhor da música retrô com{' '}
						<span className='text-2xl text-red-600 '>DJ Beto</span>. Entre em
						contato agora e reviva os dias de ouro da dança.
					</p>
					<div className='flex items-center wrap gap-6'>
						<Link
							to='/contact'
							className='btn'
						>
							<span className='text'>Contato</span>
						</Link>
						<Link
							to='/gallery'
							aria-label=''
							className='btn'
						>
							<span className='text'>Galeria</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
