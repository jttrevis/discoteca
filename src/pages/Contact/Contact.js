import { useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer';
import emailjs from '@emailjs/browser'
import styles from './Contact.module.scss'
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if (name === '' || email === '' || phone === '' || message === '') {



      toast('Preencha todos os campos!', {
        icon: '❌',
      });
      return
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phone
    }
    emailjs.send('service_he4l8tg', 'template_a9jkb13', templateParams, 'HEYhtFGyfevobvic5')
      .then((response) => {
        toast('Email Enviado!', {
          icon: '✅',
        });
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      }, (err) => {

        toast("Erro ao enviar o Email", {
          icon: '❌',
        });
      }
      )
  }



  return (
    <>
      <Header />

      <form onSubmit={sendEmail} className={styles.form}>
        <div className={styles.subtitle}>
          <h2>Contato para mais informação</h2>
        </div>

        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input type="phone"
          placeholder='Telefone'
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />


        <textarea
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button type="submit" value="Enviar">Enviar</button>
      </form>
      <Toaster />
      <Footer />
    </>
  )
}
