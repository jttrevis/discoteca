import React, { useState } from 'react';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';

export const Header = () => {
	const [menuMobile, setMenuMobile] = useState(true);

	const handleOpenMenuMobile = useCallback(() => {
		setMenuMobile(!menuMobile);
	}, [menuMobile]);
	return (
		<>
			<header
				style={{ backgroundImage: `url('/videos/headerBg.mp4')` }}
				className=' flex  bg-center bg-cover items-center justify-between mt-20 ml-6 p-4 mx-auto '
			>
				<div className='flex items-center justify-center m-auto w-full h-full '>
					<Link to='/'>
						<h1 className='text-[2rem] font-bold'>
							Dj.
							<span className='text-[5rem] font-bold text-red-600 animate-pulse'>
								Beto
							</span>
						</h1>
					</Link>
					<ul className='hidden md:flex items-center p-8 text-[1.5rem]  justify-between'>
						<Link
							to='/'
							className='p-8 font-bold hover:scale-150 duration-300'
						>
							Inicio
						</Link>
						<Link
							to='/contact'
							className='p-8 font-bold hover:scale-150 duration-300'
						>
							Contato
						</Link>
						<Link
							to='/gallery'
							className='p-8 font-bold hover:scale-150 duration-300'
						>
							Galeria
						</Link>
					</ul>
				</div>
				<div
					onClick={handleOpenMenuMobile}
					className='block md:hidden'
				>
					{!menuMobile ? (
						<AiOutlineClose
							size={25}
							color={'#991b1b'}
						/>
					) : (
						<AiOutlineMenu
							size={25}
							color={'#991b1b'}
						/>
					)}

					<div
						className={
							!menuMobile
								? 'fixed z-50  h-screen left-0 top-0 w-[60%] ease-in-out duration-500'
								: 'fixed z-50  h-screen left-[-60%]  ease-in-out duration-500'
						}
					>
						<ul className=' z-10 uppercase relative  flex flex-col pt-24 h-screen bg-red-900/70 '>
							<Link
								to={'/'}
								className='p-4 font-bold hover:opacity-60'
							>
								Home
							</Link>
							<Link
								to={'/contact'}
								className='p-4 font-bold hover:opacity-60 '
							>
								Contatos
							</Link>
							<Link
								to={'/gallery'}
								className='p-4 font-bold hover:opacity-60'
							>
								Galeria
							</Link>
						</ul>
					</div>
				</div>
			</header>

			<iframe
				title='spotfy'
				src='https://open.spotify.com/embed/playlist/0PG9UGqQ4bc7kYbxdyZxiq?utm_source=generator&theme=0'
				width='100%'
				height='80'
				frameBorder='0'
				allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
				loading='lazy'
			></iframe>
		</>
	);
};
