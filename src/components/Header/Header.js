import React, { useState } from 'react';
import logo from '../../assets/images/btl.jpg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { useCallback } from 'react';
import { Link as Scroll } from 'react-scroll';

export const Header = () => {
	const [menuMobile, setMenuMobile] = useState(true);

	const handleOpenMenuMobile = useCallback(() => {
		setMenuMobile(!menuMobile);
	}, [menuMobile]);
	return (
		<>
			<iframe
				id='header'
				title='border-radius:12px'
				src='https://open.spotify.com/embed/playlist/4j7p9P4oqzyuJYMAl7qkRP?utm_source=generator&theme=0'
				width='100%'
				height='80'
				frameBorder='0'
				allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
				loading='lazy'
			></iframe>
			<header className=' flex  bg-center bg-cover items-center justify-between  ml-6 p-4 mx-auto  md:justify-center '>
				<div className='flex items-center justify-center m-auto w-full h-full md:justify-between  '>
					<Scroll
						className='overflow-hidden cursor-pointer '
						to='/'
					>
						<img
							alt='logo dj beto'
							className='w-[13rem] h-full  rounded-full   '
							src={logo}
						/>
					</Scroll>

					<ul className='hidden md:flex items-center p-8 text-[1.5rem]  justify-between'>
						<Scroll
							spy={true}
							smooth={true}
							duration={600}
							to='header'
							className='p-8 font-bold hover:scale-125 hover:text-red-500 duration-300'
						>
							Inicio
						</Scroll>
						<Scroll
							spy={true}
							smooth={true}
							duration={600}
							to='gallery'
							className='p-8 font-bold hover:scale-125 hover:text-red-500 duration-300'
						>
							Galeria
						</Scroll>
						<Scroll
							spy={true}
							smooth={true}
							duration={600}
							to='contact'
							className='p-8 font-bold hover:scale-125 hover:text-red-500 duration-300'
						>
							Contato
						</Scroll>
					</ul>
				</div>
				<div
					onClick={handleOpenMenuMobile}
					className='block  md:hidden '
				>
					{!menuMobile ? (
						<AiOutlineClose
							size={25}
							color={'#fff'}
						/>
					) : (
						<AiOutlineMenu
							size={25}
							color={'#fff'}
						/>
					)}

					<div
						className={
							!menuMobile
								? 'fixed z-50  h-screen left-0 top-0 w-[60%] ease-in-out duration-500'
								: 'fixed z-50  h-screen left-[-60%]  ease-in-out duration-500'
						}
					>
						<ul className=' z-10 text-[1.3rem] gap-10 uppercase relative items-center flex flex-col pt-24 h-screen bg-black/60 '>
							<Scroll
								spy={true}
								smooth={true}
								duration={600}
								onClick={handleOpenMenuMobile}
								to='home'
								className='p-4 font-bold hover:opacity-60'
							>
								Home
							</Scroll>
							<Scroll
								spy={true}
								smooth={true}
								duration={600}
								onClick={handleOpenMenuMobile}
								to='gallery'
								className='p-4 font-bold hover:opacity-60'
							>
								Galeria
							</Scroll>
							<Scroll
								spy={true}
								smooth={true}
								duration={600}
								onClick={handleOpenMenuMobile}
								to='contact'
								className='p-4 font-bold hover:opacity-60 '
							>
								Contatos
							</Scroll>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
};
