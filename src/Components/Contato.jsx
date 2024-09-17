import React from 'react'
import styles from '../Components/Contato.module.css'
import foto from '../Components/img/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft `}>
      <Head title="Ranek | Contato" description="Entrem em contato"/>
      <img src={foto} alt="maquina de escrever" />
        <ul className={styles.dados}>
        <h1>Entre em Contato</h1>
          <li>phvieira3@gmail.com</li>
          <li>(99) 99126-7835</li>
          <li>Rua I, Morro do Urubu</li>
        </ul>
    </section>
  )
}

export default Contato