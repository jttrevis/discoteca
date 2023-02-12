import React from 'react';
import copyLogo from '../../assets/images/copy.svg';
import jrLogo from '../../assets/images/JuniorLogo1.png';
import { Link as Scroll } from 'react-scroll';

import { FaFacebookMessenger, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
	return (
		<div className='flex justify-center items-center '>
			<footer className='flex flex-col justify-center items-center gap-8 h-full p-12 min-h-[400px]'>
				<div className='flex gap-14 py-[3rem]'>
					<a
						target='_blank'
						rel='noreferrer'
						className='overflow-hidden'
						href='https://www.instagram.com/robertotrevisol/'
					>
						<FaInstagram
							className='h-full hover:scale-105 ease-in-out duration-300 '
							size={35}
							color={'#fff'}
						/>
					</a>
					<a
						target='_blank'
						className='overflow-hidden'
						rel='noreferrer'
						href='https://www.facebook.com/roberto.trevisol'
					>
						<FaFacebookMessenger
							className='h-full hover:scale-105 ease-in-out duration-300 '
							size={35}
							color={'#fff'}
						/>
					</a>
					<a
						target='_blank'
						className='overflow-hidden'
						rel='noreferrer'
						href='https://wa.me/+5545999462731'
					>
						<FaWhatsapp
							className='h-full hover:scale-105 ease-in-out duration-300 '
							size={35}
							color={'#fff'}
						/>
					</a>
				</div>
				<section className='flex justify-center items-center flex-col p-11 gap-11'>
					<div>
						<img
							className='logo'
							src={jrLogo}
							alt=''
						/>
					</div>
					<div className='flex overflow-hidden justify-center gap-16 w-full m-auto h-full'>
						<Scroll
							spy={true}
							smooth={true}
							duration={600}
							to='home'
							className='font-bold hover:scale-125 hover:text-red-500 duration-300'
						>
							Home
						</Scroll>
						<Scroll
							spy={true}
							smooth={true}
							duration={600}
							to='contact'
							className=' font-bold hover:scale-125 hover:text-red-500 duration-300'
						>
							Contato
						</Scroll>
						<Scroll
							spy={true}
							smooth={true}
							duration={600}
							to='gallery'
							className=' font-bold hover:scale-125 hover:text-red-500 duration-300'
						>
							Galeria
						</Scroll>
					</div>

					<div className=''>
						<span className='flex justify-center items-center'>
							<img
								src={copyLogo}
								alt=''
								className='w-[15px] mx-2 '
							/>
							JR.TREVIS Web Developer.All rights reserved.
						</span>
					</div>
				</section>
			</footer>
		</div>
	);
};
