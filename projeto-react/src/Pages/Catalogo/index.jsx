import React from 'react'
import styles from './Catalogo.module.css'

import Header from '../../componentes/Header'

import Text from '../../componentes/Text'
import Tags from '../../componentes/Tags'
import { useState } from 'react'
import astros from '../../assets/astros.json'
import Cards from '../../componentes/Cards'
import Footer from '../../componentes/Footer'


const Catalogo = ({ usuario, addCarrinho }) => {
    const [itens, setItens] = useState(astros);
    const [hasFiltered, setHasFiltered] = useState(false)

    const tags = [
        'Planetas',
        'Estrelas',
        'Galáxias',
        'Asteroides'
    ]

    const filtrarAstros = (tag) => {
        let astrosFiltrados = []
        tag === 'todos' ? astrosFiltrados = astros : astrosFiltrados = astros.filter((item) => { return (item.tag === tag) })
        setHasFiltered(true)
        setItens(astrosFiltrados)
    }

    return (
        <>
            <Header />
            <section className={styles.catalogo}>
                <Text
                    type={'h1'}
                    estiloInline={{
                        marginLeft: '10%',
                        paddingTop: '150px',
                        fontSize: '64px',
                    }}
                >
                    Space Dream
                </Text>
                <Tags tags={tags} filtrarProdutos={filtrarAstros} />
                <Cards itens={itens} hasFiltered={hasFiltered} setHasFiltered={setHasFiltered} addCarrinho={addCarrinho} />
            </section>

            <Footer />

        </>
    )
}

export default Catalogo
