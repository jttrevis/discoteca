import React from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer';
import styles from './Contact.module.scss'
export const Contact = () => {
  return (
    <>
      <Header />

      <form method='post' className={styles.form}>
        <div className={styles.subtitle}>
          <h2>Entre em contato para mais informação</h2>
        </div>
        <label>Nome</label>
        <input type="name" placeholder='Nome' />
        <br />
        <label>Email</label>
        <input type="email" placeholder='Email' />
        <br />
        <label>Telefone</label>
        <input type="phone" placeholder='Telefone' />
        <br />
        <label>Menssagem</label>

        <textarea placeholder='Mensagem' rows="10" cols="48" />
        <br />
        <button>Enviar</button>
      </form>
      <Footer />
    </>
  )
}
