import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useState } from 'react';

const slides = [
	{
		url: 'images/photos/1.jpg',
	},
	{
		url: 'images/photos/2.jpg',
	},
	{
		url: 'images/photos/3.jpg',
	},

	{
		url: 'images/photos/4.jpg',
	},
	{
		url: 'images/photos/5.jpg',
	},
	{
		url: 'images/photos/6.jpg',
	},
	{
		url: 'images/photos/7.jpg',
	},

	{
		url: 'images/photos/8.jpg',
	},

	{
		url: 'images/photos/9.jpg',
	},

	{
		url: 'images/photos/10.jpg',
	},

	{
		url: 'images/photos/11.jpg',
	},

	{
		url: 'images/photos/12.jpg',
	},
];

export const ModalPhoto = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};
	return (
		<div className='px-2 w-full h-full max-w-[1020px] overflow-hidden   m-auto relative group md:max-w-[1020px] '>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-full z-10   bg-center bg-cover bg-no-repeat duration-900 md:bg-cover  '
			></div>
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-500'>
				<BsChevronCompactLeft
					onClick={prevSlide}
					size={30}
				/>
			</div>
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-500'>
				<BsChevronCompactRight
					onClick={nextSlide}
					size={30}
				/>
			</div>
			<div className='flex rounded-2xl justify-center py-2 pb-6 '>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className='text-2xl cursor-pointer py-4 border-solid border-red-400 '
					>
						<RxDotFilled className='' />
					</div>
				))}
			</div>
		</div>
	);
};
