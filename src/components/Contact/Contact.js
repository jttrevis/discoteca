import { useState } from 'react';

import emailjs from '@emailjs/browser';
import './Contact.css';

import { toast } from 'react-hot-toast';

export const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	function sendEmail(e) {
		e.preventDefault();

		if (name === '' || email === '' || phone === '' || message === '') {
			toast('Preencha todos os campos!', {
				icon: '❌',
			});
			return;
		}
		const templateParams = {
			from_name: name,
			message: message,
			email: email,
			phone: phone,
		};
		emailjs
			.send(
				'service_he4l8tg',
				'template_a9jkb13',
				templateParams,
				'HEYhtFGyfevobvic5',
			)
			.then(
				(response) => {
					toast('Email Enviado!', {
						icon: '✅',
					});
					setName('');
					setEmail('');
					setPhone('');
					setMessage('');
				},
				(err) => {
					toast('Erro ao enviar o Email', {
						icon: '❌',
					});
				},
			);
	}

	return (
		<>
			<form
				id='contact'
				onSubmit={sendEmail}
				className='flex flex-col justify-center items-center h-screen  mx-10  '
			>
				<div className='text-[3rem] p-4'>
					<h2>Contato para mais informação</h2>
				</div>
				<div className=' flex flex-col gap-8 w-full  max-w-[500px]'>
					<input
						className='h-[3rem] rounded-xl p-1'
						type='text'
						placeholder='Digite seu nome'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>

					<input
						type='email'
						placeholder='Digite seu email'
						className='h-[3rem] rounded-xl p-1'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>

					<input
						type='tel'
						placeholder='Telefone'
						className='h-[3rem] rounded-xl p-1'
						onChange={(e) => setPhone(e.target.value)}
						value={phone}
					/>

					<textarea
						type='text'
						className='h-[6rem] rounded-xl p-1'
						placeholder='Digite sua mensagem...'
						onChange={(e) => setMessage(e.target.value)}
						value={message}
					/>
				</div>
				<button className='button my-6 '>
					<span>Enviar</span>
					<div class='top'></div>
					<div class='left'></div>
					<div class='bottom'></div>
					<div class='right'></div>
				</button>
			</form>
		</>
	);
};
