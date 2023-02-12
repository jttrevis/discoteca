import { ModalPhoto } from '../../components/ModalPhoto/Modal';

export const Gallery = () => {
	return (
		<>
			<section
				id='gallery'
				className='flex flex-col justify-center items-center gap-4'
			>
				<div className='text-2xl text-center p-2'>
					<h2 className='text-3xl font-bold py-6 '>Eventos</h2>
					<h3 className='text-4xl font-bold '>Hospital Vera Cruz</h3>
				</div>

				<div className='h-[600px] w-full'>
					<ModalPhoto />
				</div>
			</section>
			<section className='flex flex-col justify-center items-center   '>
				<h2 className='text-3xl font-bold py-10 '>Videos</h2>
				<div className='flex flex-col gap-8 md:flex-row'>
					<video controls>
						<source
							src='/videos/djbeto1.mp4'
							type='video/mp4'
						></source>
					</video>
					<video
						controls
						muted
					>
						<source
							src='/videos/djbeto2.mp4'
							type='video/mp4'
						></source>
					</video>
					<video
						controls
						muted
					>
						<source
							src='/videos/djbeto3.mp4'
							type='video/mp4'
						></source>
					</video>
				</div>
			</section>
		</>
	);
};
