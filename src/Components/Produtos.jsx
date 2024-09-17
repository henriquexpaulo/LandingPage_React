import React from 'react'
import styles from '../Components/Produtos.module.css'
import { Link } from 'react-router-dom';
import Head from './Head';

const Produtos = () => {
  const [produtos, SetProdutos] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto').then(r => r.json()).then(json => SetProdutos(json))
  }, []);

  console.log(produtos)
  if(produtos === null) return null
  return (
    <section className={styles.produtos + ' animeLeft'}>
        <Head
          title="Ranek"
          description="Descrição do site Ranek"
      />
        {produtos.map((produto) => (
          <Link to={`produto/${produto.id}`} key={produto.id}>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
              <h1 className={styles.nome}>{produto.nome}</h1>
          </Link>
        ))}
      </section>
  )
}

export default Produtos