import React from 'react';

import { FaFacebookMessenger, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
	return (
		<div className=''>
			<footer className='flex justify-center items-center gap-8 h-full p-12 min-h-[400px]'>
				<a
					target='_blank'
					rel='noreferrer'
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
					rel='noreferrer'
					href='https://wa.me/+5545999462731'
				>
					<FaWhatsapp
						className='h-full hover:scale-105 ease-in-out duration-300 '
						size={35}
						color={'#fff'}
					/>
				</a>
			</footer>
			<span>
				<p>Created by Junior Trevisol</p>
			</span>
		</div>
	);
};
