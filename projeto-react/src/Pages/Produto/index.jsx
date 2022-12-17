import React, { useEffect } from 'react'
import styles from './Produto.module.css'
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Header from '../../componentes/Header'
import Error404 from '../../componentes/Error404'
import astros from '../../assets/astros.json'
import { ProdutoIndividual } from '../../componentes/ProdutoIndividual';
import Footer from '../../componentes/Footer';

const Produto = ({ user, addCarrinho }) => {
  const params = useParams()
  const [produto, setProduto] = useState([])

  useEffect(() => {
    console.log(params)
    const astroSelecionado = astros.filter((astro) =>  {return (astro.id === params.id) })
    setProduto(astroSelecionado[0])
  }, [])


  return (
    <div className={styles.produto_container}>
      <Header />
      {produto ? <ProdutoIndividual item={produto} addCarrinho={addCarrinho} /> : <Error404 />}
      <Footer/>
    </div>
  )
}

export default Produto
