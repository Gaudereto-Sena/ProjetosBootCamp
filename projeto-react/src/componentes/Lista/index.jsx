import React, { useState } from 'react'
import styles from './Lista.module.css'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useEffect } from 'react';

const Lista = ({ itens, setCarrinho, setPrecoTotal, id, isCheckout, estiloInline, textoVazio,  }) => {
    const [itensLista, setItensLista] = useState(itens)

    const removeCarrinho = (item) => {
        const itemToRemove = itensLista.indexOf(item)
        itens.splice(itemToRemove, 1)
        console.log(itensLista)
        setItensLista([
            ...itens
        ])
    }

    useEffect(() => {
        setCarrinho([
            ...itensLista
        ])
    }, [itensLista])

    return (
        <div className={styles.lista} id={id}>
            {itensLista.length > 0 ?
                itensLista.map((item) => {
                    return (
                        <div className={styles.lista_item} key={item.id} style={estiloInline}>
                            <div className={styles.item_nome}>{item.nome}</div>
                            <div className={styles.item_preco}>{item.preco}</div>
                            {!isCheckout ? <button onClick={() => removeCarrinho(item)}><RemoveCircleIcon /></button> : ''}
                        </div>
                    )
                })
                : <div className={styles.lista_item} style={estiloInline}>{textoVazio}</div>}
        </div>
    )
}

export default Lista